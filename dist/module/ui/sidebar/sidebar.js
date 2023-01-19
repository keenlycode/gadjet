import { Adapter } from "@nitipit/adapter/src/adapter";
import { html, render } from 'uhtml';
import { SidebarStyle } from './sidebar.style';
export class Sidebar extends Adapter {
    static tagStyle(style) {
        super.tagStyle(style);
    }
    static classStyle(class_, style) {
        super.classStyle(class_, style);
    }
    addStyle(style) {
        super.addStyle(style);
    }
    set showAt(value) {
        this._showAt = value;
        this.setAttribute('showAt', value);
        this.mediaQuery = window.matchMedia(`(min-width: ${this.showAt})`);
    }
    get showAt() {
        return this._showAt;
    }
    constructor() {
        super();
        this.el = {
            content: null,
            overlay: null
        };
        this._showAt = "1000px";
        this.showAt = this.getAttribute('showAt') || this._showAt;
        this.el.content = this.querySelector('[el="content"]')
            || html `<div el="content">`;
        this.el.overlay = this.querySelector('[el="overlay"]')
            || html `<div el="overlay">`;
        this.render();
        this.mediaChange();
        this.mediaQuery.addEventListener("change", () => {
            this.mediaChange();
        });
    }
    render() {
        render(this, html `
            ${this.el.content}
            ${this.el.overlay}
        `);
        this.el.content = this.querySelector('[el="content"]');
        this.el.overlay = this.querySelector('[el="overlay"]');
        this.el.overlay.addEventListener('click', () => {
            this.hide();
        });
    }
    mediaChange() {
        if (this.mediaQuery.matches) {
            this.show({ overlay: false });
        }
        else {
            this.hide();
        }
    }
    show({ overlay = true } = {}) {
        this.el.content.classList.add('show');
        if (overlay) {
            this.el.overlay.classList.add('show');
        }
    }
    hide() {
        this.el.content.classList.remove('show');
        this.el.overlay.classList.remove('show');
    }
}
Sidebar.Style = SidebarStyle;
