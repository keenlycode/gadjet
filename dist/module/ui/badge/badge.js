import { Adapter } from "@nitipit/adapter/src/adapter";
import { BadgeStyle } from './badge.style';
export class Badge extends Adapter {
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
Badge.Style = BadgeStyle;
