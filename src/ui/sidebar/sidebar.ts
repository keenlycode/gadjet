import { Hole, html, render } from 'uhtml';
import { Adapter } from "../../adapter";
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

    static tagStyle(style?: SidebarStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: SidebarStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: SidebarStyleParam): void {
        super.addStyle(style);
    }

    el: SidebarChildElement = {
        content: null,
        overlay: null
    };
    showAt: string = "1000px";
    mediaQuery: MediaQueryList;

    constructor() {
        super();
        this.showAt = this.getAttribute('showAt') || this.showAt;
        this.el.content = this.querySelector('[el="content"]')
            || html`<div el="content">`;
        this.el.overlay = this.querySelector('[el="overlay"]')
            || html`<div el="overlay">`;

        this.render();
        this.mediaQuery = window.matchMedia(`(min-width: ${this.showAt})`);
        if (this.mediaQuery.matches) {
            setTimeout(() => {
                this.show({overlay: false})
            }, 0)
        }
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