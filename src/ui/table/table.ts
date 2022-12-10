import { Adapter } from "@nitipit/adapter/src/adapter";
import { TableStyle, TableStyleParam } from './table.style';


export class Table extends Adapter {
    static Style = TableStyle;
    static tagName: string = 'table';
    static tagStyle(style?: string | TableStyleParam): void {
        super.tagStyle(style);
    }
    static classStyle(class_: string, style?: string | TableStyleParam): void {
        super.classStyle(class_, style);
    }
    addStyle(style?: string | TableStyleParam): void {
        super.addStyle(style);
    }
}

Table.initStyle();