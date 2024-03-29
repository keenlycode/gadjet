import { Adapter } from "@nitipit/adapter/src/adapter";
import { Editor } from '@tiptap/core';
import { Level } from '@tiptap/extension-heading';
import StarterKit from '@tiptap/starter-kit';
import { FloatingMenu as FloatingMenuExt } from '@tiptap/extension-floating-menu';
import { 
    HeadingMenuStyle,
    HeadingMenuStyleParam,
    HTMLEditorStyle,
    HTMLEditorStyleParam
} from './html-editor.style';
import {
    InputRadioButton,
    InputRadioButtonGroup
} from '../input/input-radio-button';
import { BoxArrow } from '../box-arrow/box-arrow';

// This will prevent duplicate define with extended component.
class HeadingMenuButton extends InputRadioButton {};
class HeadingMenuButtonGroup extends InputRadioButtonGroup {};
class FloatingMenu extends BoxArrow {};


class HeadingMenu extends Adapter {
    static Style = HeadingMenuStyle;

    static define(tagName: string): void {
        HeadingMenuButton.define(`${tagName}-button`);
        HeadingMenuButtonGroup.define(`${tagName}-button-group`);
        HeadingMenuButton.tagStyle({
            buttonColor: this.Style.default.buttonColor,
            activeColor: this.Style.default.activeColor
        });
        super.define(tagName);
    }

    static tagStyle(style?: HeadingMenuStyleParam): void {
        HeadingMenuButton.tagStyle({
            buttonColor: style.buttonColor,
            activeColor: style.activeColor
        });
    }

    _editor: Editor;
    _levels: number[] = [1,2,3];
    _updateActiveStatusTimeout: any;

    constructor() {
        super();
        this.render();
    }

    set levels(values: number[]) {
        this._levels = values;
        this.render();
    }

    get levels() {
        return this._levels;
    }

    set editor(editor: Editor) {
        this._editor = editor;
        this.addEventListener('click', (event) => {
            this.onClick(event);
        });
    }

    get editor(): Editor {
        return this._editor;
    }

    render() {
        this.innerHTML = '';
        let headingMenuButtonGroup = new HeadingMenuButtonGroup();
        this.append(headingMenuButtonGroup);
        for (let level of this.levels) {
            let headingMenuButton = new HeadingMenuButton();
            headingMenuButton.querySelector('input').setAttribute('name', 'heading');
            headingMenuButton.querySelector('input').setAttribute('value', level.toString());
            headingMenuButton.querySelector('button').innerHTML = `H${level}`;
            headingMenuButtonGroup.append(headingMenuButton);
        }
    }

    onClick(event: Event) {
        let input: HTMLInputElement = event.target as HTMLInputElement;
        let level = parseInt(input.value) as Level;
        this.editor.chain().focus()
            .toggleHeading({ level: level })
            .run();
        if (!this.editor.isActive('heading', { level: level })) {
            input.checked = false;
        }
    }

    updateActiveStatus() {
        if (!this.editor) { return };
        // Use timeout to prevent repeatly update from silmutanous event:
        // selectionUpdate and Observer
        clearTimeout(this._updateActiveStatusTimeout);
        this._updateActiveStatusTimeout = setTimeout(() => {
            this._updateActiveStatus();
        }, 50)
    }

    _updateActiveStatus() {
        for (let input of this.querySelectorAll('input')) {
            let level = parseInt(input.value) as Level;
            if (this.editor.isActive('heading', { level: level })) {
                input.checked = true;
            } else {
                input.checked = false;
            }
        }
    }
}

export class HTMLEditor extends Adapter {
    static Style = HTMLEditorStyle;
    static define(tagName: string): void {
        FloatingMenu.define(`${tagName}-float-menu`);
        HeadingMenu.define(`${tagName}-heading-menu`);
        super.define(tagName);
    }

    static initStyle(): void {
        super.initStyle();
        FloatingMenu.tagStyle({
            arrow: 'left',
            bgColor: this.Style.default.menuColor
        });
    }

    static tagStyle(style?: string | HTMLEditorStyleParam): void {
        super.tagStyle(style);
        if (style instanceof Object) {
            FloatingMenu.tagStyle({
                bgColor: style.menuColor
            });
            HeadingMenuButton.tagStyle({
                buttonColor: style.menuColor,
                activeColor: style.activeColor
            })
        }
    }

    static classStyle(class_: string, style?: string | HTMLEditorStyleParam): void {
        console.error(`
            Unsupport classStyle for HTMLEditor because floating tools
            is attached outside HTMLEditor element
        `);
    }

    editor: Editor;
    floatingMenu: FloatingMenu;
    headingMenu: HeadingMenu;
    template: any;

    constructor() {
        super();
        this.render();
    };

    render() {
        this.innerHTML = '';
        this.headingMenu = new HeadingMenu();
        this.floatingMenu = new FloatingMenu();
        this.floatingMenu.append(this.headingMenu);
        this.append(this.floatingMenu);

        this.editor = new Editor({
            element: this,
            extensions: [
                StarterKit,
                FloatingMenuExt.configure({
                    element: this.querySelector(FloatingMenu.tagName),
                    shouldShow: ({ editor, view, state, oldState }) => {
                        const { selection } = state
                        const { $anchor, empty } = selection
                        const isRootDepth = $anchor.depth === 1
                        const isEmptyTextBlock = $anchor.parent.isTextblock
                            && !$anchor.parent.type.spec.code
                            && !$anchor.parent.textContent

                        if (
                            !view.hasFocus()
                            || !empty
                            || !isRootDepth
                            || !isEmptyTextBlock
                            || !editor.isEditable
                        ) {
                            return false
                        }
                        return true
                    }
                })
            ],
        });
        this.headingMenu.editor = this.editor;
        this.headingMenu.render();
        this.editor.on('selectionUpdate', () => {
            this.headingMenu.updateActiveStatus();
        })

        new MutationObserver(() => {
            this.headingMenu.updateActiveStatus();
        }).observe(this, {
            attributes: false,
            childList: true,
            subtree: true
        });
    }
};