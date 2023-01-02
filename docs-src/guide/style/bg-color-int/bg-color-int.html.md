# Interactive background color

Return CSS string from background, proper text color and interactive color
(on hover and press). Auto generate `hoverColor` and `activeColor` if not provided.

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
    hoverColor?: string = null,
    activeColor?: string = null
}) => string;
```
<el-code-title>param <code>{ color?: string = 'blue' }</code></el-code-title>
<blockquote class="fn-detail">
CSS color for background
</blockquote>

<el-code-title>param <code>{ hoverColor?: string = null }</code></el-code-title>
<blockquote class="fn-detail">
CSS color when hover, will be generated according to <code>color</code> if not provided.
</blockquote>


<el-code-title>param <code>{ activeColor?: string = null }</code></el-code-title>
<blockquote class="fn-detail">
CSS color when click / press, will be generated according to <code>color</code> if not provided.
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