import { Adapter } from "@nitipit/adapter/src/adapter";
import { OverlayStyle, OverlayStyleParam } from './overlay.style';

export class Overlay extends Adapter {
    
    static Style = OverlayStyle;

    static tagStyle(style?: string | OverlayStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | OverlayStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | OverlayStyleParam): void {
        super.addStyle(style);
    }
}