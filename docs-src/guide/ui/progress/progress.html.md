# Progress

## Progress Bar
---
<div class="preview">
    <div style="width: 200px;">
        <div class="row">
            <el-progress-bar></el-progress-bar>
        </div>
        <div class="row" style="margin-top: 1rem;">
            <el-progress-bar value="0"></el-progress-bar>
        </div>
        <div class="row" style="margin-top: 1rem;">
            <el-progress-bar value="50"></el-progress-bar>
        </div>
        <div class="row" style="margin-top: 1rem;">
            <el-progress-bar value="100"></el-progress-bar>
        </div>
    </div>
</div>

### Coding

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import {ProgressBar} from 'gadjet/dist/module/gadjet.bundle.js';

ProgressBar.define('el-progress-bar');
ProgressBar.tagStyle({
    progressColor: 'blue',
    barColor: '#ccc',
    thickness: '5px',
    borderRadius: '5px'
})
```

<el-code-title>html</el-code-title>
```html
<el-progress-bar></el-progress-bar>
<el-progress-bar value="0" max="100"></el-progress-bar>
<el-progress-bar value="50" max="100"></el-progress-bar>
<el-progress-bar value="100" max="100"></el-progress-bar>
```

### Element API

<el-code-title>prop<code>value</code></el-code-title>
<el-function-detail>
Progress value, will change to loop if set to <code>null</code>
</el-function-detail>

<el-code-title>prop<code>max</code></el-code-title>
<el-function-detail>
Get/set progress max value.
</el-function-detail>

## Progress Circle
---
<div class="preview">
    <el-progress-circle style="width: 3em;"></el-progress-circle>
</div>

### Coding

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { ProgressCircle } from 'gadjet/dist/module/gadjet.bundle.js';

ProgressCircle.define('el-progress-circle');
ProgressCircle.tagStyle({
    radius: 75,
    trackWidth: 25,
    trackColor: '#ccc',
    progressColor: 'blue'
})
```

<el-code-title>html</el-code-title>
```html
<el-progress-circle></el-progress-circle>
```

### Element API

<el-code-title>prop<code>value</code></el-code-title>
<el-function-detail>
Get/set progress value, will change to loop if set to <code>null</code>
</el-function-detail>

<el-code-title>prop<code>max</code></el-code-title>
<el-function-detail>
Get/set progress max value.
</el-function-detail>