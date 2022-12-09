import { addStyle } from 'gadjet/src/style/add-style';
import { BoxArrow } from 'gadjet/src/ui/box-arrow/box-arrow';
import { color } from '../../../color';


BoxArrow.define('el-box-arrow');
BoxArrow.classStyle("top", {arrow: "top"});
BoxArrow.classStyle("right", {arrow: "right"});
BoxArrow.classStyle("bottom", {arrow: "bottom"});
BoxArrow.classStyle("left", {arrow: "left"});

BoxArrow.classStyle("blue", {bgColor: color.blue});
BoxArrow.classStyle("green", {bgColor: color.green});
BoxArrow.classStyle("yellow", {bgColor: color.yellow});
BoxArrow.classStyle("orange", {bgColor: color.orange});

addStyle`
.preview {
    el-box-arrow {
        padding: 0.5rem;
        margin: 0.5rem;
    }
}
`;