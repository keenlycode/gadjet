import { Adapter } from "@nitipit/adapter/src/adapter";
import { TagStyle, TagStyleParam } from "./tag.style";


export class Tag extends Adapter {
    static Style = TagStyle;

    static tagStyle(style?: string | TagStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | TagStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: TagStyleParam): void {
        super.addStyle(style);
    }
}