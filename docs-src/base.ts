import hljs from 'highlight.js/lib/core.js';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript.js';

import { Icon } from '@nitipit/icon/src/icon';

import * as gadjet from 'gadjet/src/gadjet';

import { theme } from './color';

const baseUrl = new URL('./', document.currentScript!.src);

window.addEventListener('load', () => {
    Icon.href = `${baseUrl.href}asset/icon/gadjet/symbol-defs.svg`;
    customElements.define('el-icon', Icon);
});

hljs.registerLanguage('html', xml);
hljs.registerLanguage('javascript', javascript);
hljs.highlightAll();

window.hljs = hljs;
window.gadjet = gadjet;

const Badge = gadjet.Badge;
const Button = gadjet.Button;
const css = gadjet.addStyle;
const fontFluid = gadjet.fontFluid;

Badge.define('el-badge');
Badge.tagStyle({
    color: theme.blueGreen
});

Button.define('button');
Button.tagStyle({color: theme.yellow});

Button.tagStyle(`
    border-radius: 5px;
    align-items: center;
`);
Button.classStyle('violet', {color: theme.violet});
Button.classStyle('big', `font-size: 2em;`);
Button.classStyle('dark', {color: theme.dark});
Button.classStyle('light', {color: theme.light});


css`
@font-face {
    font-family: 'sans';
    font-style: normal;
    font-weight: 400;
    src: local('Fira Sans'),
        url(${baseUrl.href}asset/font/Fira_Sans/FiraSans-Regular.ttf);
}

@font-face {
    font-family: 'mono';
    src: local('Fira Code'),
        url(${baseUrl.href}asset/font/Fira_Code/static/FiraCode-Regular.ttf);
}

html {
    ${fontFluid()}
    font-family: sans;
    line-height: 1.7;
}

body {
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

img {
    width: 100%;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
}

.row {
    width: 100%;
}

.flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.block {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 500px;
    min-width: 280px;
    width: 100%;
    padding: 1rem;
}

.text, p {
    max-width: 45rem;
}

video {
    max-width: 100%;
}

#footer {
    min-height: 20vh;
}
`;