import { Adapter } from "@nitipit/adapter/src/adapter";
import { MenuStyle } from "./menu.style";


export class Menu extends Adapter {
    static Style = MenuStyle;

    ul_root: HTMLElement;
    selected: HTMLElement;

    constructor() {
        super();
        this.ul_root = this.querySelector('ul');
        for (const li of this.querySelectorAll('li')) {
            const divItem = document.createElement('div');
            const a = li.querySelector('a');
            const divArrow = document.createElement('div');
            const caret = document.createElement('i');
            const divDot = document.createElement('div');
            const dot = document.createElement('div');

            divItem.classList.add('item')
            divArrow.classList.add('barButton', 'arrow');
            divArrow.append(caret);
            divDot.append(dot);
            divDot.classList.add('barButton', 'dot');
            divItem.append(a);
            
            const _ul = li.querySelector('ul');
            li.insertBefore(divItem, _ul);
            if (_ul) {
                divItem.append(divArrow);
            } else {
                divItem.append(divDot);
            }

            divArrow.addEventListener('click', (event: Event) => {
                this.toggleShow(_ul as HTMLElement);
            });
            a.addEventListener('click', (event) => {
                this.select(a);
            });
        }
    };

    select(a: HTMLElement) {
        try {
            this.selected.classList.remove('selected');
        } catch {};
        this.selected = a;
        a.classList.add('selected');
        let el = a.closest('ul');
        if (el === this.ul_root) {
            return;
        };
        if (!(el.closest('li').classList.contains('show'))) {
            this._show(a.closest('ul'));
        }
    }

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
        setTimeout((ul: HTMLElement) => {
            ul.style.height = '0px';
        }, 0, ul);

        for (const _ul of ul.querySelectorAll('ul')) {
            this._hide(_ul);
        }
    }

    _show(ul: HTMLElement) {
        ul.style.height = `0`;
        ul.style.height = `${ul.scrollHeight}px`;
        
        setTimeout((ul: HTMLElement) => {
            ul.style.height = 'auto';
        }, 200, ul);

        while (ul !== this.ul_root) {
            ul.closest('li').classList.add('show');
            ul = ul.parentElement.closest('ul');
            ul.style.height = 'auto';
        }
    }
}