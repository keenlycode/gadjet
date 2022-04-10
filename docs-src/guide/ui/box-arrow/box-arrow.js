import { BoxArrow } from 'gadjet/src/ui/box-arrow/box-arrow';
import { define } from 'gadjet/src/ui/ui';
import { color } from '../../../color';

define('el-box-arrow', BoxArrow);
BoxArrow.classStyle("top", {arrow: "top"});
BoxArrow.classStyle("right", {arrow: "right"});
BoxArrow.classStyle("bottom", {arrow: "bottom"});
BoxArrow.classStyle("left", {arrow: "left"});

BoxArrow.classStyle("blue", {bgColor: color.blue});
BoxArrow.classStyle("green", {bgColor: color.green});
BoxArrow.classStyle("yellow", {bgColor: color.yellow});
BoxArrow.classStyle("orange", {bgColor: color.orange});
