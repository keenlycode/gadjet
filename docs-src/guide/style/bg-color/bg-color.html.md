# Background color

Background color with proper text color (black or white);

## Preview
---
<div class="preview">
    <div class="bg-theme-blueGreen" style="padding: 0.5rem;">#97D8C4</div>
    <div class="bg-theme-violet" style="padding: 0.5rem;">#7900FF</div>
</div>

## Module path
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
<el-function-detail>
CSS color for background
</el-function-detail>

<el-code-title>return</el-code-title>
<el-function-detail>
CSS string
</el-function-detail>

## Usage
---

<el-code-title>js</el-code-title>
```js
import { addStyle, bgColor } from 'gadjet/dist/bundle/gadjet.js';

addStyle`
div {
    ${bgColor('blue')}
}`;
```