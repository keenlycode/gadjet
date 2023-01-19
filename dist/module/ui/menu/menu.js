import { Adapter } from "@nitipit/adapter/src/adapter";
import { MenuStyle } from "./menu.style";
export class Menu extends Adapter {
    constructor() {
        super();
        let a_items = this.querySelectorAll('a');
        for (let item of a_items) {
            let innerHTML = item.innerHTML;
            let divContent = document.createElement('div');
            let divArrow = document.createElement('div');
            let caret = document.createElement('i');
            divContent.classList.add('content');
            divArrow.classList.add('arrow');
            item.innerHTML = '';
            divContent.innerHTML = innerHTML;
            item.append(divContent);
            item.append(divArrow);
            if (item.closest('li').querySelector('ul')) {
                divArrow.append(caret);
            }
            ;
            item.addEventListener('click', (event) => {
                this.toggleShow(event.currentTarget);
            });
            if (item.classList.contains('show')) {
                this._show(item.parentElement);
            }
            ;
        }
        ;
    }
    ;
    toggleShow(a) {
        if (a.classList.contains('show')) {
            this._hide(a.parentElement);
        }
        else {
            this._show(a.parentElement);
        }
        ;
    }
    _hide(li) {
        for (let a of li.querySelectorAll('a')) {
            a.classList.remove('show');
            let ul = a.parentElement.querySelector('ul');
            if (!ul) {
                continue;
            }
            ;
            ul.style.height = `${ul.scrollHeight}px`;
            // setTimeout to create height transition.
            setTimeout(function (ul) {
                ul.style.height = '0px';
            }, 0, ul);
        }
    }
    _show(li) {
        let a = li.querySelector('a');
        a.classList.add('show');
        let ul = a.closest(`ul, ${this.tagName}`);
        ul.style.height = 'auto';
        ul = li.querySelector('ul');
        if (!ul) {
            return;
        }
        ;
        ul.style.height = `${ul.scrollHeight}px`;
    }
}
Menu.Style = MenuStyle;
