import { addStyle } from "../../style";
import { Gadjet } from "../ui";
import { InputStyle } from './input.style';


export class Input extends Gadjet {
    static Style = InputStyle;
}

addStyle`
input {
    ${InputStyle.css()}
}`;