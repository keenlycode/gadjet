import { Adapter } from "@nitipit/adapter/src/adapter";
import { OverlayStyle } from './overlay.style';
export class Overlay extends Adapter {
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
Overlay.Style = OverlayStyle;
