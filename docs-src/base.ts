import hljs from 'highlight.js/lib/core.js';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript.js';
import typescript from 'highlight.js/lib/languages/typescript.js';
import { theme } from './color';

import { addStyle, aspectRatio, bgColor, fontFluid, lift } from 'gadjet/src/style';
import { Adapter } from 'gadjet/src/adapter';

window.addStyle = addStyle;
window.aspectRatio = aspectRatio;
window.bgColor = bgColor;
window.fontFluid = fontFluid;
window.lift = lift;
window.Adapter = Adapter;
window.hljs = hljs;

hljs.registerLanguage('html', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.highlightAll();

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
