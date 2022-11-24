import { define } from 'gadjet/src/adapter';
import { FileManager } from 'gadjet/src/ui/file-manager/file-manager';

define('el-file-manager', FileManager);
const fm = document.querySelector('el-file-manager') as unknown as FileManager ;
fm.loadFiles(['1.jpg', '2.jpg', '3.jpg']);
