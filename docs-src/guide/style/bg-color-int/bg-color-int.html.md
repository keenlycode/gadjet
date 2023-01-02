# Interactive background color

Set CSS for background, text and and hovering color.

## Preview
---
<div class="preview">
    <div class="bg-theme-violet-int" style="padding: 0.5rem;">Violet</div>
    <div class="bg-theme-blueGreen-int" style="padding: 0.5rem;">Blue Green</div>
</div>

## Import
---
<el-code-title>js</el-code-title>
```js
import { bgColorInt } from 'gadjet/dist/module/style/bg-color-int.js';
```

## Function signature
---
```ts
bgColorInt({
    color?: string = 'blue',
    lighten?: number = 0.2, // Can be 0 - 1
    saturate?: number = 0.2 // Can be 0 - 1
}) => string;
```
<el-code-title>param <code>color?: string = 'blue'</code></el-code-title>
<blockquote class="fn-detail">
CSS color for background.

- Text color will be white or black depends on background color.
</blockquote>

<el-code-title>return</el-code-title>
<blockquote class="fn-detail">
CSS string
</blockquote>

## Usage
---

<el-code-title>js</el-code-title>
```js
import { addStyle } from 'gadjet/dist/style.js';
import { BgColorInt } from 'gadjet/dist/module/style/bg-color-int.js';

addStyle`
div {
    ${bgColorInt({
        color: 'blue',
        hoverColor: null,
        activeColor: null
    })} 
}`;
```