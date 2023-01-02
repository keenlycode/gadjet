import { html, render } from 'uhtml';

import { Sidebar as Sidebar_} from 'gadjet/src/ui/sidebar/sidebar';
import { ButtonPin } from 'gadjet/src/ui/button/button-pin';
import { ButtonSquare } from 'gadjet/src/ui/button/button-square';
import { bgColor } from 'gadjet/src/style/bg-color';
import { bgColorInt } from 'gadjet/src/style/bg-color-int';

import { theme } from '../color';

class SidebarButton extends ButtonPin {
    constructor() {
        super();
        this.render();
    }

    render() {
        render(this, html`<el-icon name="menu"></el-icon>`);
    }
};
SidebarButton.define('el-sidebar-button');
SidebarButton.tagStyle(`
    position: fixed;
    top: 1.5rem;
    left: 1.5rem;
    font-size: 1.25rem;
    z-index: 100;
`);
SidebarButton.tagStyle({
    color: theme.yellow
})

class SidebarCloseButton extends ButtonSquare {};
SidebarCloseButton.define('el-sidebar-close-button');

class Sidebar extends Sidebar_ {
    
    constructor() {
        super();
    }

    render() {
        super.render();
        const sidebarButton = new SidebarButton();
        document.body.appendChild(sidebarButton);
        sidebarButton.addEventListener('click', () => {
            this.show();
        });

        const sidebarCloseButton = this.querySelector('el-sidebar-close-button');
        sidebarCloseButton?.addEventListener('click', () => {
            this.hide();
        })
    }
}

Sidebar.define('el-sidebar');
Sidebar.tagStyle(`
    [el="content"] {
        width: 260px;
    }
    [el="title"] {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        margin-bottom: 0.5rem;
        a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            width: 100%;
            text-decoration: none;
            ${bgColorInt(theme.violet)}
        }

        el-sidebar-close-button {
            font-size: 1.5rem;
            border-radius: 0;
            ${bgColorInt(theme.yellow)}
        }
    }

    [el="menu"] {
        padding-bottom: 5rem;
        .h {
            font-size: 1.25rem;
            font-weight: bold;
            padding-left: 0.5rem;
        }
        div.list {
            padding-left: 0.5rem;
        }
        a {
            display: block;
            width: 100%;
            font-size: 1em;
            padding: 0.25rem 0.5rem;
            &:hover {
                ${bgColor(theme.blueGreen)}
            }
        }
    }
`)