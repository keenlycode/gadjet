import { lift, bgColor } from '../../style';
import { StyleClass } from '../ui';
export class CardStyle extends StyleClass {
    static css(style) {
        style = Object.assign(Object.assign({}, this.default), style);
        let css = `
        display: block;
        ${lift({ level: 3 })}
        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {}) {
        let css = `
        ${this._color(style)}
        ${this._borderRadius(style)}
        `.trim();
        return css;
    }
    static _color(style = {}) {
        if (style.color == undefined) {
            return '';
        }
        ;
        return `
        ${bgColor(style.color)}
        `.trim();
    }
    static _borderRadius(style = {}) {
        if (style.borderRadius == undefined) {
            return '';
        }
        ;
        return `
        border-radius: ${style.borderRadius};
        `.trim();
    }
}
CardStyle.default = {
    color: '#eee',
    borderRadius: '4px'
};
