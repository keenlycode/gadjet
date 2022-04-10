# File Manager

## Preview
---
<el-file-manager></el-file-manager>

## Coding
---

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { FileManager } from 'gadjet/dist/module/ui/file-manager/file-manager.js';

define('el-file-manager', FileManager);
FileManager.tagStyle({
    buttonColor: 'blue',
    deleteButtonColor: 'red',
    progressColor: 'blue',
    completeColor: 'green',
    errorColor: 'red'
})
const fm = document.querySelector('el-file-manager');
fm.loadFiles(['1.jpg', '2.jpg', '3.jpg']);
```

<el-tag class="title-block">html</el-tag>
```html
<el-file-manager uploadUrl="./"></el-file-manager>
```

## Element API
---
<el-tag class="title-block">prop<code>uploadURL: string = './'</code></el-tag>
<blockquote class="fn-detail">
URL for upload with <b>HTTP POST</b>
</blockquote>

<el-tag class="title-block">fn<code>loadFile(url: string): void</code></el-tag>
<blockquote class="fn-detail">
Load file from a URL to File object and display thumbnail.
</blockquote>

<el-tag class="title-block">fn<code>loadFiles(urls: Array\<string>): void</code></el-tag>
<blockquote class="fn-detail">
Load files from list of URL and display thumbnails.
</blockquote>

<el-tag class="title-block">fn<code>openFileSelector(): void</code></el-tag>
<blockquote class="fn-detail">
Open files selector
</blockquote>

<el-tag class="title-block">fn<code>send(): void</code></el-tag>
<blockquote class="fn-detail">
Upload all files separately to <code>uploadURL</code> by <b>HTTP POST</b>.
</blockquote>

<el-tag class="title-block">fn<code>delete(): void</code></el-tag>
<blockquote class="fn-detail">
Remove all files and send <b>HTTP DELETE</b> to each file's url.
</blockquote>