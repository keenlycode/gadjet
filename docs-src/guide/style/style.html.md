# Style Portion

**gadjet** provide useful style portion which can be used with HTML elements and
can be injected to HTML page by tag template <code>addStyle</code>.

<el-code-title>js</el-code-title>
```js
import { addStyle, bgColorInt } from 'gadjet/dist/bundle/gadjet.js';

// Add interactive background color to <button> element
addStyle`
button {
    ${bgColorInt('blue')}
}`;
```
<el-blockquote-title>note</el-blockquote-title> 
> **gadjet** implement **CSS-in-JS** by using feature from `@emotion/css`.
> If you look into the <a href="https://github.com/nitipit/gadjet/blob/main/src/style.ts" target=_blank>
> source code</a>, you will see that `addStyle`
> is just a function that point to `injectGlobal` from
> <a href="https://emotion.sh/docs/@emotion/css" target=_blank>@emotion/css</a>.


## Style portions
---
<a href="./aspect-ratio/aspect-ratio.html">
    aspectRatio
</a>|
<a href="./bg-color/bg-color.html">
    bgColor
</a>|
<a href="./bg-color-int/bg-color-int.html">
    bgColorInt
</a>|
<a href="./font-fluid/font-fluid.html">
    fontFluid
</a>|
<a href="./lift/lift.html">
    lift
</a>