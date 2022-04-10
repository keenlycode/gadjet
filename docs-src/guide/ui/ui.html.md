# User Interfaces

## Defining with `<script defer>`
---

**gadjet**'s user-interfaces are based on **\<web-component/>**. By designed,
user-interfaces must be defined after elements have been loaded on HTML page.
This can be done by using `<script defer>` or define it when `window.onload`
has been emitted.

### Method 1 (recommended): `<script defer>`

```html
<script defer src="user-interface.js"></script>
<el-switch></el-switch>
```

```js
// user-interface.js
import {define} from 'gadjet/dist/module/ui/ui.js';
import {Switch} from 'gadjet/dist/module/ui/switch/switch.js';

define('el-switch', Switch);
```

### Method 2: `window.onload`

```html
<script src="window.onload.js"></script>
<el-switch></el-switch>
```

```js
// window.onload.js
import {define} from 'gadjet/dist/module/ui/ui.js';
import {Switch} from 'gadjet/dist/module/ui/switch/switch.js';

window.addEventListener('load', () => {
   define('el-switch', Switch);
});
```

### Result:

<el-switch></el-switch>

## UI Styling
---

After UI has been loaded and defined, we can customize UI style in 3 ways.
1. **\<class>.tagStyle** : define style for `tag` and inject to HTML page.
2. **\<class>.classStyle** : define style for `tag.class` and inject to HTML page.
3. **\<element>.addStyle** : define style for generated class, inject to HTML page
   and add generated class to the element.

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

<el-tag class="title-blockquote">note</el-tag>
> As you can see above, using `<class>.classStyle()` always override
> `<element>.addStyle()`. It's recomended to avoid using them on the same element.


## UI Customization
---

Some UI can be customized by setting HTML elements inside. For example,
we can customize `Switch` label and pin by providing `<div el="label">` and `<div el="pin">`

```html
<el-switch>
   <input type="checkbox" checked>
   <div el="label">
      <span>ON</span>
      <span>OFF</span>
   </div>
   <div el="pin">::</div>
</el-switch>
```

<el-switch>
   <input type="checkbox" checked>
   <div el="label">
      <span>ON</span>
      <span>OFF</span>
   </div>
   <div el="pin">::</div>
</el-switch>