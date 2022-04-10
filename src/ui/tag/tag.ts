import { StyledElement } from "../ui";
import { TagStyle, TagStyleParam } from "./tag.style";

export class Tag extends StyledElement {
    static Style = TagStyle;

    static tagStyle(style?: TagStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: TagStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: TagStyleParam): void {
        super.addStyle(style);
    }
}