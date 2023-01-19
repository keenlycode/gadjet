# Font fluid

Dynamic font size relative to viewport width.

## Preview
---
<div class="preview">
    <p class="font-fluid">Try resizing your browser to see font size change</p>
</div>

## Module & Import
---

<el-code-title>js</el-code-title>
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

<el-code-title>param <code>{ vwMin: number = 300 }</code></el-code-title>
<el-function-detail>
Minimum viewport width in px unit to calculate font size ratio.
</el-function-detail>

<el-code-title>param <code>{ vwMax: number = 1200 }</code></el-code-title>
<el-function-detail>
Maximum viewport in px width to calculate font size ratio.
</el-function-detail>

<el-code-title>param <code>{ fontSizeMin: number = 16 }</code></el-code-title>
<el-function-detail>
Minimum font size at vwMin.
</el-function-detail>

<el-code-title>param <code>{ fontSizeMax: number = 18 }</code></el-code-title>
<el-function-detail>
Maximum font size at vwMax.
</el-function-detail>

<el-code-title>return</el-code-title>
<el-function-detail>
CSS string
</el-function-detail>

## Usage
---

<el-code-title>js</el-code-title>
```js
import { addStyle, fontFluid } from 'gadjet';

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