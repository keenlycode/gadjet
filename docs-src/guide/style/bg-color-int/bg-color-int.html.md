# Interactive background color

Set CSS for background, text and and hovering color.

## Preview
---
<div class="preview">
    <div class="bg-theme-violet-int" style="padding: 0.5rem;">Violet</div>
    <div class="bg-theme-blueGreen-int" style="padding: 0.5rem;">Blue Green</div>
</div>

## Module & Import
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
    lighten?: number = 0.2, // Can be -1 to 1
    saturate?: number = 0.2 // Can be -1 to 1
}) => string;
```
<el-code-title>param <code>color?: string = 'blue'</code></el-code-title>
<el-function-detail>
CSS color for background.

- Text color will be white or black depends on background color.
</el-function-detail>

<el-code-title>param <code>lighten?: number = 0.2</code></el-code-title>
<el-function-detail>
Lighten level of background when hovering, range [-1, 1]
</el-function-detail>

<el-code-title>param <code>saturate?: number = 0.2</code></el-code-title>
<el-function-detail>
Saturation level of background when hovering, range [-1, 1]
</el-function-detail>

<el-code-title>return</el-code-title>
<el-function-detail>
CSS string
</el-function-detail>

## Usage
---

<el-code-title>js</el-code-title>
```js
import { addStyle, bgColorInt } from 'gadjet';

addStyle`
div {
    ${bgColorInt({
        color: 'blue',
        lighten: 0.2,
        saturate: 0.2
    })} 
}`;
```