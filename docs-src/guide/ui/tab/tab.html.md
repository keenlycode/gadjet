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

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { Tab } from 'gadjet/dist/module/gadjet.bundle.js';

Tab.define('el-tab');
Tab.tagStyle({
    tabColor: '#ccc',
    hoverColor: '#ddd',
    activeColor: 'blue',
    separatorLineColor: 'black',
    separatorLineWidth: '1px',
})
```

<el-code-title>html</el-code-title>
```html
<el-tab>
    <div>Personal Info</div>
    <div>Security</div>
    <div>Payment</div>
</el-tab>
```

## Element API
---
<el-code-title>fn <code>setupTab(): void</code></el-code-title>
<el-function-detail>
Setup javascript and event for tabs. Should be called if tab elements has
been modified.
</el-function-detail>
