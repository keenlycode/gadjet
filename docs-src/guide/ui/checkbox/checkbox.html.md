# Checkbox

## Preview
---
<div class="preview">
    <el-checkbox class="blue size-1">
        <input type="checkbox" checked>
    </el-checkbox>
    <el-checkbox class="green size-2">
        <input type="checkbox" checked>
    </el-checkbox>
    <el-checkbox class="yellow size-3">
        <input type="checkbox" checked>
    </el-checkbox>
    <el-checkbox class="orange size-4">
        <input type="checkbox" checked>
    </el-checkbox>
    <el-checkbox class="yellow size-3">
        <input type="checkbox" checked>
    </el-checkbox>
    <el-checkbox class="green size-2">
        <input type="checkbox" checked>
    </el-checkbox>
    <el-checkbox class="blue size-1">
        <input type="checkbox" checked>
    </el-checkbox>
</div>

## Coding
---

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { Checkbox } from 'gadjet/dist/bundle/gadjet.js';

Checkbox.define('el-checkbox');
Checkbox.tagStyle({
    bgColor: '#ccc',
    activeColor: 'blue'
})
```

<el-code-title>html</el-code-title>
```html
<el-checkbox>
    <input type="checkbox" checked>
</el-checkbox>
```