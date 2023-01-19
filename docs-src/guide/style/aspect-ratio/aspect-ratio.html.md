# Aspect Ratio

Aspect Ratio Box is essential for multimedia such as videos, movies or
card like contents.

Refer to
<a href="https://css-tricks.com/almanac/properties/a/aspect-ratio/"
        target=_blank>
    css-tricks.com -> almanac -> aspect-ratio
</a>

## Preview
---

<div class="video aspectRatio-21-9">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/WhWc3b3KhnY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Module path
---
<el-code-title>js</el-code-title>
```js
import { aspectRatio } from 'gadjet/dist/module/style/aspect-ratio.js';
```

## Function signature
---
```ts
aspectRatio(ratio?: string = '1/1') => string;
```

<el-code-title>param <code>ratio: string = '1/1'</code></el-code-title>
<el-function-detail>
width/height ratio
</el-function-detail>

<el-code-title>return</el-code-title>
<el-function-detail>
CSS string
</el-function-detail>

## Usage
---

```js
import { addStyle, aspectRatio } from 'gadjet';

addStyle`
div {
    ${aspectRatio('1/1')}
}
`
```