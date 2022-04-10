# Switch

## Preview
---
<div class="preview">
    <el-switch></el-switch>
    <el-switch style="margin-left: 2rem;">
        <input type="checkbox" checked>
        <div el="label">
            <span>ON</span>
            <span>OFF</span>
        </div>
    </el-switch>
</div>

## Coding
---

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { Switch } from 'gadjet/dist/module/ui/switch/switch.js';
define('el-switch', Switch);
Switch.tagStyle({
    pinColor: '#f6f5f4',
    bgColor: '#deddda',
    activeColor: 'blue'
})
```

<el-tag class="title-block">html</el-tag>
```html
<el-switch>
    <input type="checkbox" checked>
    <div el="label">
        <span>ON</span>
        <span>OFF</span>
    </div>
</el-switch>
```