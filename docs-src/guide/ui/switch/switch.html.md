# Switch

## Preview
---
<div class="preview">
    <el-switch></el-switch>
    <el-switch style="margin-left: 2rem;">
        <input type="checkbox" checked>
        <div el="label">
            <span>✔</span>
            <span></span>
        </div>
    </el-switch>
</div>

## Coding
---

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { Switch } from 'gadjet/dist/module/ui/switch/switch.js';

Switch.define('el-switch');
Switch.tagStyle({
    pinColor: '#f6f5f4',
    bgColor: '#deddda',
    activeColor: 'blue'
})
```

<el-code-title>html</el-code-title>
```html
<el-switch>
    <input type="checkbox" checked>
    <div el="label">
        <span>✔</span>
        <span>OFF</span>
    </div>
</el-switch>
```