# Badge

## Preview
---
<div class="preview">
    <el-badge class="blue">1</el-badge>
    <el-badge class="green" style="font-size: 1.5em;">10</el-badge>
    <el-badge class="yellow" style="font-size: 2em;">100</el-badge>
    <el-badge class="red" style="font-size: 1.5em;">+</el-badge>
    <el-badge class="purple">-</el-badge>
</div>

## Coding
---

<el-code-title>ES6 module</el-code-title>

<el-code-title>js `<script defer>`</el-code-title>
```js
import { Badge } from 'gadjet/dist/bundle/gadjet.js';

Badge.define('el-badge');
Badge.tagStyle({
    color: 'blue'
});
```

<el-code-title>html</el-code-title>
```html
<el-badge>1</el-badge>
```