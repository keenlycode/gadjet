import css from 'highlight.js/lib/languages/css.js';
import scss from 'highlight.js/lib/languages/scss.js';
import shell from 'highlight.js/lib/languages/shell.js';
import bash from 'highlight.js/lib/languages/bash.js';

import './_component/block-title';
import './_component/code-title';
import './_component/paragraph';
import './_component/sidebar';

hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('bash', bash);