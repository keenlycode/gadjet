const Color = require('color');

import { theme } from '../color';

class CodeTitle extends window.gadjet.Tag {};
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
        ${window.gadjet.bgColor(codeColor)}
    }
`)

window.gadjet.addStyle`
code, .code {
    ${window.gadjet.bgColor(theme.dark)}
    font-family: mono;
    border-radius: 4px;
    vertical-align: middle;
    font-size: 0.85rem;
    padding: 0.2rem;
    line-height: 1.5;
}

code.hljs {
    border-radius: 5px;
    border-top-left-radius: 0;
    display: block;
    padding: 0.5rem;
    overflow: auto;
}
`