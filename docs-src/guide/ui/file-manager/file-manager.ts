import { FileManager } from 'gadjet/dist/module/ui/file-manager/file-manager';

FileManager.define('el-file-manager');
const fm = document.querySelector('el-file-manager') as FileManager;
fm.loadFiles(['1.jpg', '2.jpg', '3.jpg']);
