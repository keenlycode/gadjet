import { StyledElement } from "../ui";
import { TagStyle } from "./tag.style";
export class Tag extends StyledElement {
    static tagStyle(style) {
        super.tagStyle(style);
    }
    static classStyle(class_, style) {
        super.classStyle(class_, style);
    }
    addStyle(style) {
        super.addStyle(style);
    }
}
Tag.Style = TagStyle;
