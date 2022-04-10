# Tags

## Tag
---
<div class="preview">
    <my-tag>Tag</my-tag>
</div>

### Coding

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { Tag } from 'gadjet/dist/module/ui/tag/tag.js';
define('el-tag', Tag);
Tag.tagStyle({
    color: 'blue',
    borderRadius: '4px'
})
```

<el-tag class="title-block">html</el-tag>
```html
<el-tag>Tag</el-tag>
```

## TagX
---
<div class="preview">
    <el-tagx>Tag</el-tag>
</div>

### Coding

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { TagX } from 'gadjet/dist/module/ui/tag/tagx.js';
define('el-tagx', TagX);
TagX.tagStyle({
    color: 'blue',
    borderRadius: '4px'
})
```

<el-tag class="title-block">html</el-tag>
```html
<el-tagx>Tag</el-tagx>
```

### Element API

<el-tag class="title-block">fn<code>remove()</code></el-tag>
<blockquote class="fn-detail">
Remove tag.
</blockquote>


<el-tag class="title-block">event<code>remove</code></el-tag>
<blockquote class="fn-detail">
Emitted when tag is removed<br>
<el-tag class="title-block">Example</el-tag>
<pre>
<code class="hljs language-js">document.querySelector('el-tag').addEventListener(
    'remove', (event) => {
        console.log(`${event.target} has been removed`);
    }
)</code>
</pre>
</blockquote>