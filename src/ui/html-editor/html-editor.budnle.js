import { HTMLEditor } from '../ui/html-editor/html-editor';

const srcUrl = new URL(document.currentScript.src);
const importAs = srcUrl.searchParams.get('as') || 'HTMLEditor';

window[importAs] = HTMLEditor;