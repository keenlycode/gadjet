# Style

**gadjet** provide useful style portion which can be used with HTML elements and
can be injected to HTML page by tag template <code>addStyle</code>.

```js
import * as style from from 'gadjet/dist/module/style.js';

/* Add interactive background color to <button> element by inject CSS
into HTML Page */

style.addStyle`
button {
    ${style.bgColorInt('blue')}
}
`;
```
<el-tag class="title-blockquote">note</el-tag> 
> **gadjet** implement **CSS-in-JS** by using feature from `@emotion/css`.
> If you look into the <a href="https://github.com/nitipit/gadjet/blob/main/src/style.ts" target=_blank>
> source code</a>, you will see that `addStyle`
> is just a function that point to `injectGlobal` from
> <a href="https://emotion.sh/docs/@emotion/css" target=_blank>@emotion/css</a>.

## Import & Export
---
`style.ts` or `style.js` is just a collection of style functions for convinient
use as you can see below.


```js
// javascript
export { addStyle } from './style/add-style';
export { aspectRatio } from './style/aspect-ratio';
export { bgColor } from './style/bg-color';
export { bgColorInt } from './style/bg-color-int';
export { fontFluid } from './style/font-fluid';
export { lift } from './style/lift';
```

You can import each function individually to make code more compact.
for example,

```js
import { addStyle } from 'gadjet/dist/module/style/add-style.js';
import { aspectRatio } from 'gadjet/dist/module/style/aspect-ratio.js';
```

## Style portions
---
<a href="./aspect-ratio/aspect-ratio.html">
    <el-tag>aspectRatio</el-tag>
</a>
<a href="./bg-color/bg-color.html">
    <el-tag>bgColor</el-tag>
</a>
<a href="./bg-color-int/bg-color-int.html">
    <el-tag>bgColorInt</el-tag>
</a>
<a href="./font-fluid/font-fluid.html">
    <el-tag>fontFluid</el-tag>
</a>
<a href="./lift/lift.html">
    <el-tag>lift</el-tag>
</a>