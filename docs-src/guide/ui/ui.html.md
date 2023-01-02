# User Interfaces

## UI definition
---

**gadjet**'s user-interfaces are based on **\<web-component/>**. By designed,
user-interfaces must be defined after elements have been loaded on HTML page.
This can be done by using `<script defer>` or define it when `window.onload`
has been emitted.

<el-blockquote-title>Note</el-blockquote-title>
> `<script defer>` is recommended because we can control loading order of
> scripts or components.

### Method 1: `<script defer>` (recommended)

<el-code-title>html</el-code-title>
```html
<script defer src="user-interface.js"></script>
<el-switch></el-switch>
```

<el-code-title>js</el-code-title>
```js
// user-interface.js
import {Switch} from 'gadjet/dist/module/ui/switch/switch.js';
Switch.define('el-switch');
```

### Method 2: `window.onload` (not recommened)

<el-code-title>js</el-code-title>
```html
<script src="window.onload.js"></script>
<el-switch></el-switch>
```

```js
// window.onload.js
import {define} from 'gadjet/dist/module/ui/ui.js';
import {Switch} from 'gadjet/dist/module/ui/switch/switch.js';

window.addEventListener('load', () => {
   Switch.define('el-switch');
});
```

### Result:

<el-switch></el-switch>

## UI Styling
---

After UI has been loaded and defined, we can customize UI style in 3 ways.
1. **\<class>.tagStyle** : inject style to tag's name.
2. **\<class>.classStyle** : inject style to tag's class.
3. **\<element>.addStyle** : inject style to an element (unique generated class).

```js
Switch.tagStyle({
   pinColor: '#EFF2F1',
   bgColor: '#deddda',
   activeColor: '#7900FF'
});

Switch.classStyle('yellow', {
    activeColor: '#F4B942'
});

const elSwitch = document.querySelector('el-switch#green');
elSwitch.addStyle({
   pinColor: '#97D8C4',
   activeColor: '#F4B942'
});
```
<el-switch class="light"></el-switch>
<el-switch class="yellow"></el-switch>
<el-switch id="green"></el-switch>

## UI Customization
---

Some UI can be customized by setting HTML elements inside. For example,
we can customize `Switch` label and pin by providing `<div el="label">` and `<div el="pin">`

<el-code-title>html</el-code-title>
```html
<el-switch>
   <input type="checkbox" checked>
   <div el="label">
      <span>ON</span>
      <span>OFF</span>
   </div>
   <div el="pin" style="padding-top: 0.1em;">::</div>
</el-switch>
```

<el-switch>
   <input type="checkbox" checked>
   <div el="label">
      <span>ON</span>
      <span>OFF</span>
   </div>
   <div el="pin" style="padding-top: 0.1em;">::</div>
</el-switch>