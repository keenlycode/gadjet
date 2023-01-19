# Sidebar

## Preview
---
<div class="preview">
    <el-button-pin id="sidebar-button-preview" style="font-size: 3rem;">
        <el-icon name="menu"></el-icon>
    </el-button-pin>
</div>

## Coding
---

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { Sidebar } from 'gadjet/dist/module/gadjet.bundle.js';

Sidebar.define('el-sidebar');
Sidebar.tagStyle({
    bgColor: '#eee',
    overlayColor: 'rgba(0,0,0,0.7)'
});
```

<el-code-title>html</el-code-title>
```html
<el-sidebar showAt="1000px">
    <div el="content">
    <!-- Sidebar content -->
    </div>
    <div el="overlay">
    <!-- Overlay when show sidebar -->
    </div>
</el-sidebar>
```

## Element API
---

<el-code-title>prop<code>showAt: string = "1000px"</code></el-code-title>
<el-function-detail>
Viewport width to show sidebar.
</el-function-detail>

<el-code-title>fn<code>show()</code></el-code-title>
<el-function-detail>
Show sidebar.
</el-function-detail>

<el-code-title>fn<code>hide()</code></el-code-title>
<el-function-detail>
Hide sidebar.
</el-function-detail>