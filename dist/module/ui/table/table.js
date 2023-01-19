import { Adapter } from "@nitipit/adapter/src/adapter";
import { TableStyle } from './table.style';
export class Table extends Adapter {
    static define(tagName) {
        if (tagName.toLowerCase() === 'table') {
            this.tagName = tagName;
            this.initStyle();
            return;
        }
        ;
        super.define(tagName);
    }
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
Table.Style = TableStyle;
Table.tagName = 'table';
