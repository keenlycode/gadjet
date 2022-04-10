# Box Arrow

## Preview
---
<div class="preview">
    <el-box-arrow class="top blue">
        Top Arrow
    </el-box-arrow>
    <el-box-arrow class="right green">
        Right Arrow
    </el-box-arrow>
    <el-box-arrow class="bottom yellow">
        Bottom Arrow
    </el-box-arrow>
    <el-box-arrow class="left orange">
        Left Arrow
    </el-box-arrow>
</div>

## Coding
---
<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { BoxArrow } from 'gadjet/dist/module/ui/box-arrow/box-arrow.js';
define('el-box-arrow', BoxArrow);
BoxArrow.tagStyle({
    arrow: 'top', // arrow direction: top, right, bottom or left
    arrowSize: '8px',
    position: '50%', // arrow position on it's side.
    bgColor: '#ccc',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: '4px'
})

BoxArrow.classStyle('right', {arrow: 'left'});

```
<el-tag class="title-block">html</el-tag>
```html
<el-box-arrow>Top Arow</el-box-arrow>
<el-box-arrow class="right">Right Arrow</el-box-arrow>
```