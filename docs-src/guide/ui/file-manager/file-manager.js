import { define } from 'gadjet/src/ui/ui';
import { FileManager } from 'gadjet/src/ui/file-manager/file-manager';

define('el-file-manager', FileManager);
const fm = document.querySelector('el-file-manager');
fm.loadFiles(['1.jpg', '2.jpg', '3.jpg']);
