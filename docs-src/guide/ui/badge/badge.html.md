# Badge

## Preview
---
<div class="preview">
    <el-badge class="bg-blue">1</el-badge>
    <el-badge class="bg-green" style="font-size: 1.5em;">10</el-badge>
    <el-badge class="bg-yellow" style="font-size: 2em;">100</el-badge>
    <el-badge class="bg-red" style="font-size: 1.5em;">+</el-badge>
    <el-badge class="bg-purple">-</el-badge>
</div>

## Coding
---
<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { Badge } from 'gadjet/dist/module/ui/badge/badge.js';
define('el-badge', Badge);
Badge.tagStyle({
    color: 'blue'
});
```

<el-tag class="title-block">html</el-tag>
```html
<el-badge>1</el-badge>
```