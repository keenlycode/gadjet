import { define, Adapter } from "../../adapter";
import { InputTagStyle } from "./input-tag.style";
import { TagX } from '../tag/tagx';
import { addStyle } from "@nitipit/adapter/src/adapter";
import { InputTagStyleParam } from './input-tag.style';


class InputTagX extends TagX {};

interface InputTagChildElement {
    input: HTMLInputElement | any;
}

export class InputTag extends Adapter {
    static Style = InputTagStyle;

    static define(tagName: string) {
        define(`${tagName}-tagx`, InputTagX);
        addStyle`
        ${InputTagX.tagName} {
            margin: 0.3em 0.2em;
        }
        `;
        super.define(tagName);
    }

    static tagStyle(style?: InputTagStyleParam): void {
        super.tagStyle(style);
        InputTagX.tagStyle({
            color: style.tagColor,
            borderRadius: style.tagBorderRadius
        });
    }

    static classStyle(class_: string, style?: InputTagStyleParam): void {
        super.classStyle(class_, style);
        InputTagX.classStyle(class_, {
            color: style.tagColor,
            borderRadius: style.tagBorderRadius
        });
    }

    addStyle(style?: InputTagStyleParam): void {
        super.addStyle(style);
        for ( let tagx of this.querySelectorAll(InputTagX.tagName) ) {
            (tagx as InputTagX).addStyle({
                color: style.tagColor,
                borderRadius: style.tagBorderRadius
            });
        }
    }
    
    el: InputTagChildElement = {
        input: null
    }

    get tags() {
        let tags = [];
        let tag: any;
        for (tag of this.querySelectorAll(`${this.tagName}-tagx`)) {
            tags.push(tag.text.trim());
        }
        return tags;
    }

    set tags(tags: Array<string>) {
        this.clearTags();
        this.addTags(tags);
    }

    constructor() {
        super();
        this.el.input = document.createElement('div');
        this.el.input.setAttribute('contenteditable', true);
        this.appendChild(this.el.input);
        this.addEventListener('click', () => {
            this.el.input.focus();
        })
        this.el.input.addEventListener('keydown', (event: KeyboardEvent) => {
            this.keydown(event);
        })
        this.el.input.addEventListener('blur', (event: Event) => {
            this.blur();
        })
    }

    keydown(event: KeyboardEvent) {
        if (event.key === ("Enter")) {
            this.addTag(this.el.input.innerText.trim());
            this.el.input.innerText = '';
        } else if (event.key === "Backspace") {
            if (this.el.input.innerText.trim() === '') {
                this.el.input.previousSibling.remove();
            }
        }
    }

    blur() {
        this.addTag(this.el.input.innerText.trim());
        this.el.input.innerText = '';
    }

    addTag(value: string) {
        if (value == '') { return };
        let el: any;
        for (el of this.querySelectorAll(`${this.tagName}-tagx`)) {
            el = el as HTMLElement;
            if (el.text.trim() == value) { return }
        }

        let tagx = new InputTagX;
        this.insertBefore(tagx, this.el.input);
        tagx.text = value;
        tagx.addEventListener('remove', (event) => {
            this.dispatchEvent(new CustomEvent('remove', {
                detail: { tagx: event.target }
            }))
        })
    }

    addTags(values: Array<string>) {
        for (let value of values) {
            this.addTag(value);
        }
    }

    clearTags() {
        for ( let tagx of this.querySelectorAll(InputTagX.tagName) ) {
            tagx.remove();
        }
    }
}