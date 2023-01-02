# Lift

Simple `box-shadow` style to lift element.

## Preview
---
<div class="preview">
    <div class="lift lv-1">level 1</div>
    <div class="lift lv-2">level 2</div>
    <div class="lift lv-3">level 3</div>
    <div class="lift lv-4">level 4</div>
    <div class="lift lv-5">level 5</div>
</div>

## Import
---
<el-code-title>js</el-code-title>
```js
import { lift } from 'gadjet/dist/module/style/lift.js';
```

## Function signature
---
```ts
lift({
    level?: number = 3,
    shadowColor?: string = 'rgb(0, 0, 0, 50%)'
}) => string;
```

<el-code-title>param <code>{ level?: number = 3 }</code></el-code-title>
<blockquote class="fn-detail">
Lifting level from 0 - 5
</blockquote>

<el-code-title>param <code>{ shadowColor?: string = rgb(0, 0, 0, 50%) }</code></el-code-title>
<blockquote class="fn-detail">
CSS color for box-shadow color
</blockquote>

<el-code-title>return</el-code-title>
<blockquote class="fn-detail">
CSS string
</blockquote>

## Usage
---

```js
import { addStyle } from 'gadjet/dist/style.js';
import { lift } from 'gadjet/dist/module/style/lift.js';

addStyle`
div {
    ${lift({
        level: 3,
        shadowColor: 'rgb(0, 0, 0, 50%)'
    })}
}
`;
```