import { Adapter } from "@nitipit/adapter/src/adapter";
import { MenuStyle } from "./menu.style";


export class Menu extends Adapter {
    static Style = MenuStyle;

    constructor() {
        super();
        // let a_items = this.querySelectorAll('a');
        // for (let item of a_items) {
        //     let innerHTML = item.innerHTML;
        //     let divContent = document.createElement('div');
        //     let divArrow = document.createElement('div');
        //     let caret = document.createElement('i');

        //     divContent.classList.add('content');
        //     divArrow.classList.add('arrow');
        //     item.innerHTML = '';
        //     divContent.innerHTML = innerHTML;
        //     item.append(divContent);
        //     item.append(divArrow);
        //     if (item.closest('li').querySelector('ul')) {
        //         divArrow.append(caret);
        //     };

        //     item.addEventListener('click', (event: Event) => {
        //         this.toggleShow(event.currentTarget as HTMLElement)
        //     });

        //     if (item.classList.contains('show')) {
        //         this._show(item.parentElement);
        //     };
        // };

        const li_items = this.querySelectorAll('li');
        for (const li of li_items) {
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
        ul_closet.classList.add('show');
        ul.closest('li').classList.add('show');
        ul.style.height = `${ul.scrollHeight}px`;
    }
}