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
<el-tag class="title-block">js</el-tag>
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
<el-tag class="title-block">param <code>{ color?: string = 'blue' }</code></el-tag>
<blockquote class="fn-detail">
CSS color for background
</blockquote>

<el-tag class="title-block">param <code>{ hoverColor?: string = null }</code></el-tag>
<blockquote class="fn-detail">
CSS color when hover, will be generated according to <code>color</code> if not provided.
</blockquote>


<el-tag class="title-block">param <code>{ activeColor?: string = null }</code></el-tag>
<blockquote class="fn-detail">
CSS color when click / press, will be generated according to <code>color</code> if not provided.
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