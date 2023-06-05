import Color from 'color';
import { bgColor } from './bg-color';


export interface BGColorIntParam {
    color: string,
    lighten?: number,
    saturate?: number
}

const paramDefault: BGColorIntParam = {
    color:'blue',
    lighten: 0.2,
    saturate: 0.2
}


export const bgColorInt = (param: BGColorIntParam | string): string => {
    if (typeof(param) === "string") {
        param = {color: param};
    }
    param = param as BGColorIntParam;
    param = {...paramDefault, ...param};
    const color = new Color(param.color);

    return `
    ${bgColor(color.toString())}
    &:hover {
        background-color: ${
            color.lighten(param.lighten).saturate(param.saturate).toString()
        };
    }
    &:active {
        background-color: ${
            color.lighten(-param.lighten).saturate(param.saturate).toString()
        };
    }`.trim();
}