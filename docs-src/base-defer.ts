import './global.d';

import css from 'highlight.js/lib/languages/css.js';
import scss from 'highlight.js/lib/languages/scss.js';
import shell from 'highlight.js/lib/languages/shell.js';
import bash from 'highlight.js/lib/languages/bash.js';

import * as gadjet from 'gadjet/src/gadjet';

import './_component/block-title';
import './_component/code-title';
import './_component/paragraph';
import './_component/sidebar';

window.hljs.registerLanguage('css', css);
window.hljs.registerLanguage('scss', scss);
window.hljs.registerLanguage('shell', shell);
window.hljs.registerLanguage('bash', bash);

window.gadjet = gadjet;