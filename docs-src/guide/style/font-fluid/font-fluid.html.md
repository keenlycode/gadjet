# Fluid font

Dynamic font size relative to viewport width.

## Preview
---
<div class="preview">
    <p class="font-fluid">Try resizing your browser to see font size change</p>
</div>

## Import
---

<el-tag class="title-block">js</el-tag>
```js
import { fontFluid } from 'gadjet/dist/module/style/font-fluid.js';
```

## Function signature
---

```ts
fontFluid({
    vwMin: number = 300,
    vwMax: number = 1200,
    fontSizeMin: number = 16,
    fontSizeMax: number = 18
}) => string;
```

<el-tag class="title-block">param <code>{ vwMin: number = 300 }</code></el-tag>
<blockquote class="fn-detail">
Minimum viewport width in px unit to calculate font size ratio.
</blockquote>

<el-tag class="title-block">param <code>{ vwMax: number = 1200 }</code></el-tag>
<blockquote class="fn-detail">
Maximum viewport in px width to calculate font size ratio.
</blockquote>

<el-tag class="title-block">param <code>{ fontSizeMin: number = 16 }</code></el-tag>
<blockquote class="fn-detail">
Minimum font size at vwMin.
</blockquote>

<el-tag class="title-block">param <code>{ fontSizeMax: number = 18 }</code></el-tag>
<blockquote class="fn-detail">
Maximum font size at vwMax.
</blockquote>

<el-tag class="title-block">return</el-tag>
<blockquote class="fn-detail">
CSS string
</blockquote>

## Usage
---

<el-tag class="title-block">js</el-tag>
```js
import { addStyle } from 'gadjet/dist/style.js';
import { fontFluid } from 'gadjet/dist/module/style/font-fluid.js';

addStyle`
html {
    ${fontFluid({
        vwMin: 300,
        vwMax: 1200,
        fontSizeMin: 16,
        fontSizeMax: 18
    })}
}`;
```