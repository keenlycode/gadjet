import { FileManager } from 'gadjet/src/ui/file-manager/file-manager';


FileManager.define('el-file-manager');
const fm = document.querySelector('el-file-manager') as unknown as FileManager ;
fm.loadFiles(['1.jpg', '2.jpg', '3.jpg']);
