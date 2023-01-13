import css from 'highlight.js/lib/languages/css.js';
import scss from 'highlight.js/lib/languages/scss.js';
import shell from 'highlight.js/lib/languages/shell.js';
import bash from 'highlight.js/lib/languages/bash.js';
import typescript from 'highlight.js/lib/languages/typescript.js';

const Color = require('color');

import './_component/blockquote';
import './_component/code';
import './_component/paragraph';
import './_component/sidebar';
import './_component/function-detail';

window.hljs.registerLanguage('css', css);
window.hljs.registerLanguage('scss', scss);
window.hljs.registerLanguage('shell', shell);
window.hljs.registerLanguage('bash', bash);
window.hljs.registerLanguage('typescript', typescript);

window.sidebar = document.querySelector('el-sidebar')
window.sidebarButton = document.querySelector('el-sidebar-button');
window.Color = Color;