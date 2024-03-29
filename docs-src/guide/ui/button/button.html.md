# Buttons

## Button
---
<div class="preview">
    <button>Button</button>
</div>

### Module & Import
---
<el-code-title>js</el-code-title>
```js
import { Button } from 'gadjet/dist/module/gadjet.bundle.js';
```

### Usage

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { Button } from 'gadjet/dist/module/gadjet.bundle.js';
Button.tagStyle({
    color: 'blue'
})
```

<el-blockquote-title>Note</el-blockquote-title>
> After import `Button` class, it will automatically apply style
> on standard \<button\> element. However, you can extend `Button` and
> define to a custom tag name.

<el-code-title>html</el-code-title>
```html
<button>Button</button>
```


## Pin Button
---
<div class="preview">
    <el-button-pin>+</el-button-pin>
</div>

### Module & Import
---
<el-code-title>js</el-code-title>
```js
import { ButtonPin } from 'gadjet/dist/module/ui/button/button-pin.js';
```

### Usage

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { ButtonPin } from 'gadjet';

ButtonPin.define('el-button-pin');
ButtonPin.tagStyle({
    color: 'blue'
})
```

<el-code-title>html</el-code-title>
```html
<el-button-pin>+</el-button-pin>
```

## Square Button
---
<div class="preview">
    <el-button-square>✕</el-button-square>
</div>

### Module & Import
---
<el-code-title>js</el-code-title>
```js
import { Button } from 'gadjet/dist/module/ui/button/button-square.js';
```

### Usage
<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { ButtonSquare } from 'gadjet';

ButtonSquare.define('el-button-square');
ButtonSquare.tagStyle({
    color: 'blue',
    borderRadius: '4px'
});
```

<el-code-title>html</el-code-title>
```html
<el-button-square>✕</el-button-square>
```

## Button Grouping
---
<div class="preview">
    <el-button-group style="width: 10rem;">
        <button>OK</button>
        <button>Cancel</button>
    </el-button-group>
    <el-button-group style="margin-left: 2rem;">
        <el-button-square>▶</el-button-square>
        <el-button-square>⏸</el-button-square>
        <el-button-square>⏮</el-button-square>
        <el-button-square>⏭</el-button-square>
    </el-button-group>
</div>

### Module & Import
---
<el-code-title>js</el-code-title>
```js
import { ButtonGroup } from 'gadjet/dist/module/ui/button/button-group.js';
```

### Usage

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { ButtonGroup } from 'gadjet';

ButtonGroup.define('el-button-group');
ButtonGroup.tagStyle({
    borderRadius: '4px'
});
```

<el-code-title>html</el-code-title>
```html
<el-button-group style="width: 10rem;">
    <button>OK</button>
    <button>Cancel</button>
</el-button-group>
```