import Color from 'color';
import { bgColor } from './bg-color';


export interface bgColorIntParam {
    color: string,
    lighten?: number,
    saturate?: number
}


export const bgColorInt = (param: bgColorIntParam = {
        color:'blue',
        lighten: 0.2,
        saturate: 0.2
    }): string => {

    const color_ = new Color(param.color);

    return `
    ${bgColor(color_.toString())}
    &:hover {
        background-color: ${
            color_.lighten(param.lighten).saturate(param.saturate).toString()
        };
    }
    &:active {
        background-color: ${
            color_.lighten(-param.lighten).saturate(param.saturate).toString()
        };
    }`.trim();
}