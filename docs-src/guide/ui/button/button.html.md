# Buttons

## Button
---
<div class="preview">
    <button class="blue">Button</button>
</div>

### Coding

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { Button } from 'gadjet/dist/module/ui/button/button.js';
Button.tagStyle({
    color: 'blue'
})
```

<el-tag class="title-block">html</el-tag>
```html
<button>Button</button>
```


## Pin Button
---
<div class="preview">
    <el-button-pin>+</el-button-pin>
</div>

### Coding

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { ButtonPin } from 'gadjet/dist/module/ui/button/button-pin.js';
define('el-button-pin', ButtonPin);
ButtonPin.tagStyle({
    color: 'blue'
})
```

<el-tag class="title-block">html</el-tag>
```html
<el-button-pin>+</el-button-pin>
```

## Square Button
---
<div class="preview">
    <el-button-square>✕</el-button-square>
</div>

### Coding
<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { ButtonSquare } from 'gadjet/dist/module/ui/button/button-square.js';
define('el-button-square', ButtonSquare);
ButtonSquare.tagStyle({
    color: 'blue',
    borderRadius: '4px'
});
```

<el-tag class="title-block">html</el-tag>
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

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { ButtonGroup } from 'gadjet/dist/module/ui/button/button-group.js';
define('el-button-group', ButtonGroup);
ButtonGroup.tagStyle({
    borderRadius: '4px'
});
```

<el-tag class="title-block">html</el-tag>
```html
<el-button-group style="width: 10rem;">
    <button>OK</button>
    <button>Cancel</button>
</el-button-group>
```