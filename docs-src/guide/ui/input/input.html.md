# Input

## Date
---
<div class="preview">
    <el-input-date>
        <input type="date" value="2022-01-01">
    </el-input-date>
</div>

### Coding
<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { InputDate } from 'gadjet/dist/module/gadjet.bundle.js';

InputDate.define('el-input-date');
```

<el-code-title>html</el-code-title>
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

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { InputNumber } from 'gadjet/dist/module/gadjet.bundle.js';

InputNumber.define('el-input-number');
InputNumber.tagStyle({
    color: 'blue'
});
```

<el-code-title>html</el-code-title>
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
<el-code-title>prop<code>stepIntervalThreshold: string | number = "700"</code></el-code-title>
<el-function-detail>
Threshold time (ms) when press & hold button before trigger step interval.
</el-function-detail>

<el-code-title>prop<code>stepInterval: string | number = "100"</code></el-code-title>
<el-function-detail>
Increase or decrease step interval time (ms). Lesser is faster.
</el-function-detail>

<el-code-title>prop<code>stepChangeDelay: string | number = "1000"</code></el-code-title>
<el-function-detail>
Delay time before emit <b>change</b> event. Can reduce unneccessary change event.
</el-function-detail>

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
<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { InputNumberCenter } from 'gadjet/dist/module/gadjet.bundle.js';

InputNumberCenter.define('el-input-number-center');
```

<el-code-title>html</el-code-title>
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
<el-code-title>prop<code>stepIntervalThreshold: string | number = "700"</code></el-code-title>
<el-function-detail>
Threshold time (ms) when press & hold button before trigger step interval.
</el-function-detail>

<el-code-title>prop<code>stepInterval: string | number = "100"</code></el-code-title>
<el-function-detail>
Increase or decrease step interval time (ms). Lesser is faster.
</el-function-detail>

<el-code-title>prop<code>stepChangeDelay: string | number = "1000"</code></el-code-title>
<el-function-detail>
Delay time before emit <b>change</b> event. Can reduce unneccessary change event.
</el-function-detail>

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

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { InputRadio } from 'gadjet/dist/module/gadjet.bundle.js';

InputRadio.define('el-input-radio');
InputRadio.tagStyle({
    color: '#ccc',
    boxShadowColor: '#777',
    activeColor: 'blue'
});
```

<el-code-title>html</el-code-title>
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
<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { InputRadioButton, InputRadioButtonGroup } from 'gadjet/dist/module/gadjet.bundle.js';

InputRadioButton.define('el-input-radio-button');
InputRadioButtonGroup.define('el-input-radio-button-group');

InputRadioButton.tagStyle({
    activeColor: 'blue',
    buttonColor: '#ccc'
});
```

<el-code-title>html</el-code-title>
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

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { InputRange } from 'gadjet/dist/module/gadjet.bundle.js';

InputRage.define('el-input-range');
InputRange.tagStyle({
    trackColor: '#ccc',
    fillColor: 'blue',
    pinColor: '#ccc',
    pinHoverColor: 'blue'
});
```

<el-code-title>html</el-code-title>
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

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { InputTag } from 'gadjet/dist/module/gadjet.bundle.js';

InputTag.define('el-input-tag');
InputTag.tagStyle({
    tagColor: 'blue',
    tagBorderRadius: '4px'
});
```

<el-code-title>html</el-code-title>
```html
<el-input-tag>
    <el-input-tag-tagx>tag</el-input-tag-tagx>
</el-input-tag>
```

### Element API

<el-code-title>prop<code>tags: Array = []<string></code></el-code-title>
<el-function-detail>
Get/set tags.
</el-function-detail>

<el-code-title>fn<code>addTag(tag: string)</code></el-code-title>
<el-function-detail>
Add a tag.
</el-function-detail>

<el-code-title>fn<code>addTags(tag: Array\<string>)</code></el-code-title>
<el-function-detail>
Add tags.
</el-function-detail>

<el-code-title>fn<code>clearTags()</code></el-code-title>
<el-function-detail>
Clear all tags.
</el-function-detail>