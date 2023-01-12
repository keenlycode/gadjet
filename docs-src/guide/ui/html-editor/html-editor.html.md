# HTML Editor

Simple html editor based on [tiptap.dev](https://tiptap.dev/)
with it's StarterKit extension.

## Preview
---
<el-html-editor></el-html-editor>

## Bundle
---
```js

```

## Module & Import
---
<el-code-title>js</el-code-title>
```js
import { HTMLEditor } from 'gadjet/dist/module/ui/html-editor/html-editor.js';
```

## Usage
---

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { HTMLEditor } from 'gadjet/dist/module/ui/html-editor/html-editor.js';

define('el-html-editor', HTMLEditor);
```

## Element API
---
Element API is based on [tiptap editor api](https://tiptap.dev/api/editor) which
can be access through `<element>.editor`

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
const htmlEditor = document.querySelector('el-html-editor');
console.log(htmlEditor.editor.getHTML());
```