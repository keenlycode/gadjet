# Tags

## Tag
---
<div class="preview">
    <my-tag>Tag</my-tag>
</div>

### Coding

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { Tag } from 'gadjet/dist/module/gadjet.bundle.js';

Tag.define('el-tag');
Tag.tagStyle({
    color: 'blue',
    borderRadius: '4px'
})
```

<el-code-title>html</el-code-title>
```html
<el-tag>Tag</el-tag>
```

## TagX
---
<div class="preview">
    <el-tagx>Tag</el-tag>
</div>

### Coding

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { TagX } from 'gadjet/dist/module/gadjet.bundle.js';

TagX.define('el-tagx');
TagX.tagStyle({
    color: 'blue',
    borderRadius: '4px'
})
```

<el-code-title>html</el-code-title>
```html
<el-tagx>Tag</el-tagx>
```

### Element API

<el-code-title>fn<code>remove()</code></el-code-title>
<el-function-detail>
Remove tag.
</el-function-detail>


<el-code-title>event<code>remove</code></el-code-title>
<el-function-detail>
Emitted when tag is removed<br>
<el-code-title>Example</el-code-title>
<pre>
<code class="hljs language-js">document.querySelector('el-tag').addEventListener(
    'remove', (event) => {
        console.log(`${event.target} has been removed`);
    }
)</code>
</pre>
</el-function-detail>