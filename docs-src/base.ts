import hljs from 'highlight.js/lib/core.js';
import xml from 'highlight.js/lib/languages/xml.js';
import javascript from 'highlight.js/lib/languages/javascript.js';
import typescript from 'highlight.js/lib/languages/typescript.js';
import css from 'highlight.js/lib/languages/css.js';
import scss from 'highlight.js/lib/languages/scss.js';
import shell from 'highlight.js/lib/languages/shell.js';
import bash from 'highlight.js/lib/languages/bash.js';
import { addStyle } from 'gadjet/src/adapter';
import { bgColor } from 'gadjet/src/style/bg-color';
import { fontFluid } from 'gadjet/src/style/font-fluid';
import './color.style.ts';
import { theme } from './color';

window.addEventListener('load', () => {
    hljs.registerLanguage('html', xml);
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('scss', scss);
    hljs.registerLanguage('shell', shell);
    hljs.registerLanguage('bash', bash);
    hljs.highlightAll();
});

addStyle`
html {
    ${fontFluid()}
    font-family: sans;
    line-height: 1.7;
}

a {
    color: inherit;
    text-decoration: none;
}

img {
    width: 100%;
}

.row {
    width: 100%;
}

code, .code {
    ${bgColor(theme.dark)}
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

.text, p {
    max-width: 45rem;
}

#footer {
    min-height: 20vh;
}
`;
