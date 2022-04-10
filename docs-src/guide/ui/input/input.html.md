# Input

## Date
---
<div class="preview">
    <el-input-date>
        <input type="date" value="2022-01-01">
    </el-input-date>
</div>

### Coding
<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { InputDate } from 'gadjet/dist/module/ui/input/input-date.js';
define('el-input-date', InputDate);
```

<el-tag class="title-block">html</el-tag>
```html
<el-input-date>
    <input type="date">
</el-input-date>
```

## Number
---
<div class="preview">
    <el-input-number>
        <input type="number"
            value="0"
            min="-100"
            max="100"
            stepIntervalThreshold="700"
            stepInterval="100"
            stepChangeDelay="1000">
    </el-input-number>
</div>

### Coding

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { InputNumber } from 'gadjet/dist/module/ui/input/input-number.js';
define('el-input-number', InputNumber);
InputNumber.tagStyle({
    color: 'blue'
});
```

<el-tag class="title-block">html</el-tag>
```html
<el-input-number>
    <input type="number"
        value="0"
        step="1"
        min="-100"
        max="100"
        stepIntervalThreshold="700"
        stepInterval="100"
        stepChangeDelay="1000">
</el-input-number>
```

### Element API
<el-tag class="title-block">prop<code>stepIntervalThreshold: string | number = "700"</code></el-tag>
<blockquote class="fn-detail">
Threshold time (ms) when press & hold button before trigger step interval.
</blockquote>

<el-tag class="title-block">prop<code>stepInterval: string | number = "100"</code></el-tag>
<blockquote class="fn-detail">
Increase or decrease step interval time (ms). Lesser is faster.
</blockquote>

<el-tag class="title-block">prop<code>stepChangeDelay: string | number = "1000"</code></el-tag>
<blockquote class="fn-detail">
Delay time before emit <b>change</b> event. Can reduce unneccessary change event.
</blockquote>

## Number Center
---
<div class="preview">
    <el-input-number-center>
        <input type="number" value="0"
            min="-100"
            max="100"
            stepIntervalThreshold="700"
            stepInterval="100"
            stepChangeDelay="1000">
    </el-input-number-center>
</div>

### Coding
<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { InputNumberCenter } from 'gadjet/dist/module/ui/input/input-number-center.js';
define('el-input-number-center', InputNumberCenter);
```

<el-tag class="title-block">html</el-tag>
```html
<el-input-number-center>
    <input type="number" value="0"
        min="-100"
        max="100"
        stepIntervalThreshold="700"
        stepInterval="100"
        stepChangeDelay="1000">
</el-input-number-center>
```

### Element API
<el-tag class="title-block">prop<code>stepIntervalThreshold: string | number = "700"</code></el-tag>
<blockquote class="fn-detail">
Threshold time (ms) when press & hold button before trigger step interval.
</blockquote>

<el-tag class="title-block">prop<code>stepInterval: string | number = "100"</code></el-tag>
<blockquote class="fn-detail">
Increase or decrease step interval time (ms). Lesser is faster.
</blockquote>

<el-tag class="title-block">prop<code>stepChangeDelay: string | number = "1000"</code></el-tag>
<blockquote class="fn-detail">
Delay time before emit <b>change</b> event. Can reduce unneccessary change event.
</blockquote>

## Radio
---
<div class="preview">
    <el-input-radio>
        <input type="radio" name="color" value="red" checked>
    </el-input-radio>
    Red
    <el-input-radio>
        <input type="radio" name="color" value="blue">
    </el-input-radio>
    Blue
    <el-input-radio>
        <input type="radio" name="color" value="green">
    </el-input-radio>
    Green
</div>

### Coding
<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { InputRadio } from 'gadjet/dist/module/ui/input/input-radio.js';
define('el-input-radio', InputRadio);
InputRadio.tagStyle({
    color: '#ccc',
    boxShadowColor: '#777',
    activeColor: 'blue'
});
```

<el-tag class="title-block">html</el-tag>
```html
<el-input-number-radio>
    <input type="radio" name="color" value="red" checked>
</el-input-number-radio>
Red

<el-input-number-radio>
    <input type="radio" name="color" value="blue">
</el-input-number-radio>
Blue

<el-input-number-radio>
    <input type="radio" name="color" value="green">
</el-input-number-radio>
Green
```

## Radio Button & Grouping
---
<div class="preview">
    <el-input-radio-button-group>
        <el-input-radio-button>
            <input type="radio" name="color" value="red">
            Red
        </el-input-radio-button>
        <el-input-radio-button>
            <input type="radio" name="color" value="blue">
            Blue
        </el-input-radio-button>
        <el-input-radio-button>
            <input type="radio" name="color" value="green">
            Green
        </el-input-radio-button>
    </el-input-radio-button-group>
</div>

### Coding

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { InputRadioButton, InputRadioButtonGroup } from 'gadjet/dist/module/ui/input/input-radio.js';
define('el-input-radio-button', InputRadioButton);
define('el-input-radio-button-group', InputRadioButtonGroup);
InputRadioButton.tagStyle({
    activeColor: 'blue',
    buttonColor: '#ccc'
});
```

<el-tag class="title-block">html</el-tag>
```html
<el-input-radio-button-group>
    <el-input-radio-button>
        <input type="radio" name="color" value="red">
        Red
    </el-input-radio-button>
    <el-input-radio-button>
        <input type="radio" name="color" value="blue">
        Blue
    </el-input-radio-button>
    <el-input-radio-button>
        <input type="radio" name="color" value="green">
        Green
    </el-input-radio-button>
</el-input-radio-button-group>
```

## Range
---
<div class="preview">
    <el-input-range></el-input-range>
</div>

### Coding

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { InputRange } from 'gadjet/dist/module/ui/input/input-range.js';

define('el-input-range', InputRange);
InputRange.tagStyle({
    trackColor: '#ccc',
    fillColor: 'blue',
    pinColor: '#ccc',
    pinHoverColor: 'blue'
});
```

<el-tag class="title-block">html</el-tag>
```html
<el-input-range></el-input-range>
```

## Tag Input
---
<div class="preview">
    <el-input-tag>
        <el-input-tag-tagx>tag</el-input-tag-tagx>
    </el-input-tag>
</div>

### Coding

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { InputTag } from 'gadjet/dist/module/ui/input/input-tag.js';
define('el-input-tag', InputTag);
InputTag.tagStyle({
    tagColor: 'blue',
    tagBorderRadius: '4px'
});
```

<el-tag class="title-block">html</el-tag>
```html
<el-input-tag>
    <el-input-tag-tagx>tag</el-input-tag-tagx>
</el-input-tag>
```

### Element API

<el-tag class="title-block">prop<code>tags: Array = []<string></code></el-tag>
<blockquote class="fn-detail">
Get/set tags.
</blockquote>

<el-tag class="title-block">fn<code>addTag(tag: string)</code></el-tag>
<blockquote class="fn-detail">
Add a tag.
</blockquote>

<el-tag class="title-block">fn<code>addTags(tag: Array\<string>)</code></el-tag>
<blockquote class="fn-detail">
Add tags.
</blockquote>

<el-tag class="title-block">fn<code>clearTags()</code></el-tag>
<blockquote class="fn-detail">
Clear all tags.
</blockquote>