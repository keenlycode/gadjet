import { addStyle } from "../../style";
import { StyledElement } from "../ui";
import { InputStyle } from './input.style';


export class Input extends StyledElement {
    static Style = InputStyle;
}

addStyle`
input {
    ${InputStyle.css()}
}`;