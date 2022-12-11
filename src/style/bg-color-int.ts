const Color = require('color');
import { bgColor } from './bg-color';
import { bgColorIntParam } from './bg-color-int.d';


export const bgColorInt = ({
    color = 'blue',
    hoverColor = null,
    activeColor = null
}: bgColorIntParam): string => {
    if (!hoverColor) {
        hoverColor = Color(color).lighten(0.2).saturate(0.2);
    }
    if (!activeColor) {
        activeColor = Color(color).darken(0.2).desaturate(0.2);
    }

    return `
    ${bgColor(color)}
    &:hover {
        background-color: ${hoverColor};
    }
    &:active {
        background-color: ${activeColor};
    }
    `.trim();
}