import { Tag } from "./tag";
import { TagXStyle } from "./tagx.style";
import { render, html } from 'uhtml';
export class TagX extends Tag {
    static tagStyle(style) {
        super.tagStyle(style);
    }
    static classStyle(class_, style) {
        super.classStyle(class_, style);
    }
    addStyle(style) {
        super.addStyle(style);
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
        this.el.text.innerText = value;
    }
    constructor() {
        super();
        this.el = {
            text: null
        };
        this._text = this.innerText;
        this.render();
    }
    render() {
        render(this, html `
            <span el="text">${this.text}</span>
            <span el="remove" @click=${() => { this.remove(); }}>x</span>
        `);
        this.el.text = this.querySelector('span[el="text"]');
    }
    remove() {
        this.dispatchEvent(new Event('remove'));
        super.remove();
    }
}
TagX.Style = TagXStyle;
