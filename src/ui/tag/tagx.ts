import { Tag } from "./tag";
import { TagXStyle, TagXStyleParam } from "./tagx.style";
import { render, html } from 'uhtml';

interface TagXChildElement {
    text: HTMLElement;
}

export class TagX extends Tag {
    static Style = TagXStyle;

    static tagStyle(style?: TagXStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: TagXStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: TagXStyleParam): void {
        super.addStyle(style);
    }

    el: TagXChildElement = {
        text: null
    }

    _text: string;
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
        this.el.text.innerText = value;
    }

    constructor() {
        super();
        this._text = this.innerText;
        this.render();
    }

    render() {
        render(this, html`
            <span el="text">${this.text}</span>
            <span el="remove" @click=${() => { this.remove() }}>x</span>
        `);
        this.el.text = this.querySelector('span[el="text"]');
    }

    remove() {
        this.dispatchEvent(new Event('remove'))
        super.remove();
    }
}