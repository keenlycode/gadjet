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

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { Checkbox } from 'gadjet/dist/module/ui/checkbox/checkbox.js';
define('el-checkbox', Checkbox);
Checkbox.tagStyle({
    bgColor: '#ccc',
    activeColor: 'blue'
})
```

<el-tag class="title-block">html</el-tag>
```html
<el-checkbox>
    <input type="checkbox" checked>
</el-checkbox>
```