import 'gadjet/dist/bundle/ui/file-manager/file-manager.bundle.js';

FileManager.define('el-file-manager');
const fm = document.querySelector('el-file-manager');
fm.loadFiles(['1.jpg', '2.jpg', '3.jpg']);
