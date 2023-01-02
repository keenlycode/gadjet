import Color from 'color';
import { bgColor } from './bg-color';


export const bgColorInt = (color='blue'): string => {
    const color_ = new Color(color);
    let hoverColor: Color;

    if (color_.isDark()) {
        hoverColor = color_.lighten(0.2).saturate(0.2);
    } else {
        hoverColor = color_.darken(0.2).saturate(0.2);
    }

    return `
    ${bgColor(color_.toString())}
    &:hover {
        background-color: ${hoverColor.toString()};
    }`.trim();
}