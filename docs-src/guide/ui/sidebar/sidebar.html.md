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

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { Sidebar } from 'gadjet/dist/module/ui/sidebar/sidebar.js';
define('el-sidebar', Sidebar);
Sidebar.tagStyle({
    bgColor: '#eee',
    overlayColor: 'rgba(0,0,0,0.7)'
});
```

<el-tag class="title-block">html</el-tag>
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

<el-tag class="title-block">prop<code>showAt: string = "1000px"</code></el-tag>
<blockquote class="fn-detail">
Viewport width to show sidebar.
</blockquote>

<el-tag class="title-block">fn<code>show()</code></el-tag>
<blockquote class="fn-detail">
Show sidebar.
</blockquote>

<el-tag class="title-block">fn<code>hide()</code></el-tag>
<blockquote class="fn-detail">
Hide sidebar.
</blockquote>