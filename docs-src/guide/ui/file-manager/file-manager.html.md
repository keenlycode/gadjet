# File Manager

## Preview
---
<el-file-manager></el-file-manager>

## Coding
---

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { FileManager } from 'gadjet/dist/module/ui/file-manager/file-manager.js';

FileManager.define('el-file-manager');
FileManager.tagStyle({
    buttonColor: 'blue',
    deleteButtonColor: 'red',
    progressColor: 'blue',
    completeColor: 'green',
    errorColor: 'red'
})
const fm = document.createElement('el-file-manager');
document.body.append(fm);
fm.loadFiles(['1.jpg', '2.jpg', '3.jpg']);
```

<el-code-title>html</el-code-title>
```html
<el-file-manager uploadUrl="./"></el-file-manager>
```

## Element API
---
<el-code-title>prop<code>uploadURL: string = './'</code></el-code-title>
<el-function-detail>
URL for upload with <b>HTTP POST</b>
</el-function-detail>

<el-code-title>fn<code>loadFile(url: string): void</code></el-code-title>
<el-function-detail>
Load file from a URL to File object and display thumbnail.
</el-function-detail>

<el-code-title>fn<code>loadFiles(urls: Array\<string>): void</code></el-code-title>
<el-function-detail>
Load files from list of URL and display thumbnails.
</el-function-detail>

<el-code-title>fn<code>openFileSelector(): void</code></el-code-title>
<el-function-detail>
Open files selector
</el-function-detail>

<el-code-title>fn<code>send(): void</code></el-code-title>
<el-function-detail>
Upload all files separately to <code>uploadURL</code> by <b>HTTP POST</b>.
</el-function-detail>

<el-code-title>fn<code>delete(): void</code></el-code-title>
<el-function-detail>
Remove all files and send <b>HTTP DELETE</b> to each file's url.
</el-function-detail>