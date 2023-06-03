import { Adapter } from "@nitipit/adapter/src/adapter";
import { MenuStyle } from "./menu.style";


export class Menu extends Adapter {
    static Style = MenuStyle;

    ul_root: HTMLElement;

    constructor() {
        super();
        this.ul_root = this.querySelector('ul');
        for (const li of this.querySelectorAll('li')) {
            const divItem = document.createElement('div');
            const a = li.querySelector('a');
            const divArrow = document.createElement('div');
            const caret = document.createElement('i');
            divItem.classList.add('item')
            divArrow.classList.add('arrow');
            divArrow.append(caret);
            const _ul = li.querySelector('ul');
            divItem.append(a);
            li.insertBefore(divItem, _ul);
            if (_ul) {
                divItem.append(divArrow);
            }
            divArrow.addEventListener('click', (event: Event) => {
                this.toggleShow(_ul as HTMLElement);
            })
        }
    };

    toggleShow(ul: HTMLElement) {
        if (ul.closest('li').classList.contains('show')) {
            this._hide(ul);
        } else {
            this._show(ul);
        };
    }

    _hide(ul: HTMLElement) {
        ul.closest('li').classList.remove('show');

        // set height for transition
        ul.style.height = `${ul.scrollHeight}px`;

        // setTimeout to create height transition.
        setTimeout(function (ul: HTMLElement) {
            ul.style.height = '0px';
        }, 0, ul);

        for (const _ul of ul.querySelectorAll('ul')) {
            this._hide(_ul);
        }
    }

    _show(ul: HTMLElement) {
        const ul_closet = ul.parentElement.closest('ul') as HTMLElement;
        ul_closet.style.height = 'auto';
        ul.closest('li').classList.add('show');

        // set height for transition
        ul.style.height = `${ul.scrollHeight}px`;

        // if (ul_closet === this.ul_root) {
        //     return;
        // }
        // this._show(ul_closet);
    }
}