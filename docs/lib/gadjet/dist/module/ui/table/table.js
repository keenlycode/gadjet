import { StyledElement } from "../ui";
import { TableStyle } from './table.style';
export class Table extends StyledElement {
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
Table.initStyle();
