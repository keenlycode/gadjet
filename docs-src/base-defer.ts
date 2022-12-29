import css from 'highlight.js/lib/languages/css.js';
import scss from 'highlight.js/lib/languages/scss.js';
import shell from 'highlight.js/lib/languages/shell.js';
import bash from 'highlight.js/lib/languages/bash.js';

const Color = require('color');

import { Sidebar } from 'gadjet/src/ui/sidebar/sidebar';
import { ButtonPin } from 'gadjet/src/ui/button/button-pin';

import './global.d';

import './_component/blockquote-title';
import './_component/code-title';
import './_component/paragraph';
import './_component/sidebar';

import { theme } from './color';

hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('bash', bash);

window.sidebar = document.querySelector('el-sidebar') as Sidebar;
window.sidebarButton = document.querySelector('el-sidebar-button') as ButtonPin;
window.Color = Color;

addStyle`
blockquote {
    border-left: 4px solid ${theme.blueGreen};
    margin: 0;
    margin-left: 1rem;
    padding: 0.2rem 1rem 0.2rem 0.8rem;
    ${bgColor(theme.light)}
}
`