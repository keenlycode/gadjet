import Color from 'color';
import { bgColor } from './bg-color';


export const bgColorInt = ({
        color = 'blue',
        lighten = 0.2,
        saturate = 0.2
    }): string => {

    const color_ = new Color(color);

    return `
    ${bgColor(color_.toString())}
    &:hover {
        background-color: ${
            color_.lighten(lighten).saturate(saturate).toString()
        };
    }
    &:active {
        background-color: ${
            color_.lighten(-lighten).saturate(saturate).toString()
        };
    }`.trim();
}