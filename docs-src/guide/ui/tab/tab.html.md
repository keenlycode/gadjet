# Tab

## Preview
---

<div class="preview">
<el-tab>
    <div>Personal Info</div>
    <div>Security</div>
    <div>Payment</div>
</el-tab>
</div>

## Coding
---

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { Tab } from 'gadjet/dist/module/ui/tab/tab.js';
define('el-tab', Tab);
Tab.tagStyle({
    tabColor: '#ccc',
    hoverColor: '#ddd',
    activeColor: 'blue',
    separatorLineColor: 'black',
    separatorLineWidth: '1px',
})
```

<el-tag class="title-block">html</el-tag>
```html
<el-tab>
    <div>Personal Info</div>
    <div>Security</div>
    <div>Payment</div>
</el-tab>
```

## Element API
---
<el-tag class="title-block">fn <code>setupTab(): void</code></el-tag>
<blockquote class="fn-detail">
Setup javascript and event for tabs. Should be called if tab elements has
been modified.
</blockquote>
