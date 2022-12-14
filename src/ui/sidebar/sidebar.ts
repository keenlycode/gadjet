import { Adapter } from "@nitipit/adapter/src/adapter";
import { Hole, html, render } from 'uhtml';
import { SidebarStyle, SidebarStyleParam } from './sidebar.style';


interface SidebarChildElement {
    content: Element | HTMLElement | Hole;
    overlay: Element | HTMLElement | Hole;
}

interface showParam {
    overlay?: boolean;
}

export class Sidebar extends Adapter {
    static Style = SidebarStyle;

    static tagStyle(style?: string | SidebarStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | SidebarStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | SidebarStyleParam): void {
        super.addStyle(style);
    }

    el: SidebarChildElement = {
        content: null,
        overlay: null
    };
    _showAt: string | null = "1000px";
    mediaQuery: MediaQueryList;

    set showAt(value: string | null) {
        this._showAt = value;
        if (!this._showAt) { return };
        this.mediaQuery = window.matchMedia(`(min-width: ${this.showAt})`);
    }

    get showAt(): string {
        return this._showAt;
    }

    constructor() {
        super();
        this.showAt = this.getAttribute('showAt') || this._showAt;
        this.el.content = this.querySelector('[el="content"]')
            || html`<div el="content">`;
        this.el.overlay = this.querySelector('[el="overlay"]')
            || html`<div el="overlay">`;

        this.render();
        this.mediaChange();
        this.mediaQuery.addEventListener("change", () => {
            this.mediaChange();
        });
    }

    render() {            
        render(this, html`
            ${this.el.content}
            ${this.el.overlay}
        `);

        this.el.content = this.querySelector('[el="content"]');
        this.el.overlay = this.querySelector('[el="overlay"]');
        this.el.overlay.addEventListener('click', () => {
            this.hide();
        })
    }

    mediaChange() {
        if (this.mediaQuery.matches) {
            this.show({overlay: false});
        } else {
            this.hide();
        }
    }

    show({overlay=true}: showParam = {}) {
        (this.el.content as HTMLElement).classList.add('show');
        if (overlay) {
            (this.el.overlay as HTMLElement).classList.add('show');
        }
    }

    hide() {
        (this.el.content as HTMLElement).classList.remove('show');
        (this.el.overlay as HTMLElement).classList.remove('show');
    }
}