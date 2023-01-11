import { FileManager } from 'gadjet/src/ui/file-manager/file-manager';


const srcUrl = new URL(document.currentScript.src);
const importAs = srcUrl.searchParams.get('as') || 'FileManager';

window[importAs] = FileManager;