import { Tag } from 'gadjet/src/ui/tag/tag';
import { bgColor } from '../../src/style';
const Color = require('color');

import { theme } from '../color';

class CodeTitle extends Tag {};
CodeTitle.define('el-code-title');

CodeTitle.tagStyle({
    color: theme.yellow
})

const codeColor = Color(theme.yellow).lighten(0.5);

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