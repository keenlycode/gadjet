import { addStyle, Adapter } from "@nitipit/adapter/src/adapter";
import { InputStyle } from './input.style';


export class Input extends Adapter {
    static Style = InputStyle;
}

addStyle`
input {
    ${InputStyle.css()}
}`;