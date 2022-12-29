# Background color

Background color with proper text color (black or white);

## Preview
---
<div class="preview">
    <div class="bg-theme-blueGreen" style="padding: 0.5rem;">#97D8C4</div>
    <div class="bg-theme-violet" style="padding: 0.5rem;">#7900FF</div>
</div>

## Import
---
<el-code-title>js</el-code-title>
```js
import { bgColor } from 'gadjet/dist/module/style/bg-color.js';
```

## Function signature
---
```ts
bgColor(color: string = 'blue') => string;
```

<el-code-title>param <code>color: string = 'blue'</code></el-code-title>
<blockquote class="fn-detail">
CSS color for background
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
import { bgColor } from 'gadjet/dist/module/style/bg-color.js';

addStyle`
div {
    ${bgColor('blue')}
}`;
```