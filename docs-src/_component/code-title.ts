import { Tag } from 'gadjet/src/ui/tag/tag';
import { bgColor } from 'gadjet/src/style/bg-color';
const Color = require('color');

import { theme } from '../color';

class CodeTitle extends Tag {};
CodeTitle.define('el-code-title');

CodeTitle.tagStyle({
    color: theme.blueGreen
})

const codeColor = Color(theme.blueGreen).lighten(0.3);

CodeTitle.tagStyle(`
    margin-bottom: -1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: none;
    code {
        margin-left: 0.5rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        ${bgColor(codeColor)}
    }
`)