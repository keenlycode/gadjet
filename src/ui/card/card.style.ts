import { lift, bgColor } from '../../style';
import { StyleClass } from '../ui';

export interface CardStyleParam {
    color?: string;
    borderRadius?: string;
}

export class CardStyle extends StyleClass {
    static readonly default: CardStyleParam = {
        color: '#eee',
        borderRadius: '4px'
    }
    static css(style?: CardStyleParam) {
        style = {...this.default, ...style};
        let css = `
        display: block;
        ${lift({ level: 3 })}
        ${this.style(style)}
        `.trim();

        return css;
    }

    static style(style: CardStyleParam = {}): string {
        let css = `
        ${this._color(style)}
        ${this._borderRadius(style)}
        `.trim();

        return css;
    }

    static _color(style: CardStyleParam = {}): string {
        if (style.color == undefined) { return '' };
        return `
        ${bgColor(style.color)}
        `.trim()
    }

    static _borderRadius(style: CardStyleParam = {}): string {
        if (style.borderRadius == undefined) { return '' };
        return `
        border-radius: ${style.borderRadius};
        `.trim()
    }
}