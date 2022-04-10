import { svg, html, render } from 'uhtml';
import { InputDateStyle } from "./input-date.style";
import { StyledElement } from '../ui';
export class InputDate extends StyledElement {
    constructor() {
        super();
        this.icon = svg `
    <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16" style="width: 1em; height: 1em;">
        <g fill="currentColor">
            <path d="M2.969 1.01c-1.053 0-2 .846-2 1.938v10.115c0 1.092.947 1.937 2 1.937H13c1.052 0 2-.845 2-1.937V2.948c0-1.092-.948-1.937-2-1.937zm0 3.99H5v2H2.969zM6 5h3v2H6zm4 0h3v2h-3zM2.969 8H5v2H2.969zM6 8h3v2H6zm4 0h3v2h-3zm-7.031 3H5v2H2.969zM6 11h3v2H6zm4 0h3v2h-3z" overflow="visible" />
            <path d="M10 8h3v2h-3z" overflow="visible" opacity=".35" />
        </g>
    </svg>
    `;
        this.el = {
            input: null,
            display: null
        };
        this.el.input = this.querySelector('input[type="date"]')
            || html `<input type="date">`;
        this.render();
    }
    onChange(event) {
        let inputDate = event.target;
        this.el.display.innerText = inputDate.value;
    }
    render() {
        render(this, html `
            <div el="icon">${this.icon}</div>
            ${this.el.input}
            <span el="display"></span>
        `);
        this.el.input = this.querySelector('input');
        this.el.input.addEventListener('change', (event) => {
            this.onChange(event);
        });
        this.el.display = this.querySelector('span[el="display"]');
        this.el.display.innerText = this.el.input.value;
    }
}
InputDate.Style = InputDateStyle;
