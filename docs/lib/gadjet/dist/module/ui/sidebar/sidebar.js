import { html, render } from 'uhtml';
import { StyledElement } from '../ui';
import { SidebarStyle } from './sidebar.style';
export class Sidebar extends StyledElement {
    constructor() {
        super();
        this.el = {
            content: null,
            overlay: null
        };
        this.showAt = "1000px";
        this.showAt = this.getAttribute('showAt') || this.showAt;
        this.el.content = this.querySelector('[el="content"]')
            || html `<div el="content">`;
        this.el.overlay = this.querySelector('[el="overlay"]')
            || html `<div el="overlay">`;
        this.render();
        this.mediaQuery = window.matchMedia(`(min-width: ${this.showAt})`);
        if (this.mediaQuery.matches) {
            setTimeout(() => {
                this.show({ overlay: false });
            }, 0);
        }
        this.mediaQuery.addEventListener("change", () => {
            this.mediaChange();
        });
    }
    static tagStyle(style) {
        super.tagStyle(style);
    }
    static classStyle(class_, style) {
        super.classStyle(class_, style);
    }
    addStyle(style) {
        super.addStyle(style);
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
