import { define, Adapter } from "@nitipit/adapter/src/adapter";
import { InputTagStyle } from "./input-tag.style";
import { TagX } from '../tag/tagx';
import { addStyle } from "@nitipit/adapter/src/adapter";
class InputTagX extends TagX {
}
;
export class InputTag extends Adapter {
    static define(tagName) {
        define(`${tagName}-tagx`, InputTagX);
        addStyle `
        ${InputTagX.tagName} {
            margin: 0.3em 0.2em;
        }
        `;
        super.define(tagName);
    }
    static tagStyle(style) {
        super.tagStyle(style);
        InputTagX.tagStyle({
            color: style.tagColor,
            borderRadius: style.tagBorderRadius
        });
    }
    static classStyle(class_, style) {
        super.classStyle(class_, style);
        InputTagX.classStyle(class_, {
            color: style.tagColor,
            borderRadius: style.tagBorderRadius
        });
    }
    addStyle(style) {
        super.addStyle(style);
        for (let tagx of this.querySelectorAll(InputTagX.tagName)) {
            tagx.addStyle({
                color: style.tagColor,
                borderRadius: style.tagBorderRadius
            });
        }
    }
    get tags() {
        let tags = [];
        let tag;
        for (tag of this.querySelectorAll(`${this.tagName}-tagx`)) {
            tags.push(tag.text.trim());
        }
        return tags;
    }
    set tags(tags) {
        this.clearTags();
        this.addTags(tags);
    }
    constructor() {
        super();
        this.el = {
            input: null
        };
        this.el.input = document.createElement('div');
        this.el.input.setAttribute('contenteditable', true);
        this.appendChild(this.el.input);
        this.addEventListener('click', () => {
            this.el.input.focus();
        });
        this.el.input.addEventListener('keydown', (event) => {
            this.keydown(event);
        });
        this.el.input.addEventListener('blur', (event) => {
            this.blur();
        });
    }
    keydown(event) {
        if (event.key === ("Enter")) {
            this.addTag(this.el.input.innerText.trim());
            this.el.input.innerText = '';
        }
        else if (event.key === "Backspace") {
            if (this.el.input.innerText.trim() === '') {
                this.el.input.previousSibling.remove();
            }
        }
    }
    blur() {
        this.addTag(this.el.input.innerText.trim());
        this.el.input.innerText = '';
    }
    addTag(value) {
        if (value == '') {
            return;
        }
        ;
        let el;
        for (el of this.querySelectorAll(`${this.tagName}-tagx`)) {
            el = el;
            if (el.text.trim() == value) {
                return;
            }
        }
        let tagx = new InputTagX;
        this.insertBefore(tagx, this.el.input);
        tagx.text = value;
        tagx.addEventListener('remove', (event) => {
            this.dispatchEvent(new CustomEvent('remove', {
                detail: { tagx: event.target }
            }));
        });
    }
    addTags(values) {
        for (let value of values) {
            this.addTag(value);
        }
    }
    clearTags() {
        for (let tagx of this.querySelectorAll(InputTagX.tagName)) {
            tagx.remove();
        }
    }
}
InputTag.Style = InputTagStyle;
