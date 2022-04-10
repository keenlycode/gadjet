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

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import {define} from 'gadjet/dist/module/ui/ui.js';
import {ProgressBar} from 'gadjet/dist/module/ui/progress/progress-bar.js';
define('el-progress-bar', ProgressBar);
ProgressBar.tagStyle({
    progressColor: 'blue',
    barColor: '#ccc',
    thickness: '5px',
    borderRadius: '5px'
})
```

<el-tag class="title-block">html</el-tag>
```html
<el-progress-bar></el-progress-bar>
<el-progress-bar value="0" max="100"></el-progress-bar>
<el-progress-bar value="50" max="100"></el-progress-bar>
<el-progress-bar value="100" max="100"></el-progress-bar>
```

### Element API

<el-tag class="title-block">prop<code>value</code></el-tag>
<blockquote class="fn-detail">
Progress value, will change to loop if set to <code>null</code>
</blockquote>

<el-tag class="title-block">prop<code>max</code></el-tag>
<blockquote class="fn-detail">
Get/set progress max value.
</blockquote>

## Progress Circle
---
<div class="preview">
    <el-progress-circle style="width: 3em;"></el-progress-circle>
</div>

### Coding

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { ProgressCircle } from 'gadjet/dist/module/ui/progress/progress-circle.js';
define('el-progress-circle', ProgressCircle);
ProgressCircle.tagStyle({
    radius: 75,
    trackWidth: 25,
    trackColor: '#ccc',
    progressColor: 'blue'
})
```

<el-tag class="title-block">html</el-tag>
```html
<el-progress-circle></el-progress-circle>
```

### Element API

<el-tag class="title-block">prop<code>value</code></el-tag>
<blockquote class="fn-detail">
Get/set progress value, will change to loop if set to <code>null</code>
</blockquote>

<el-tag class="title-block">prop<code>max</code></el-tag>
<blockquote class="fn-detail">
Get/set progress max value.
</blockquote>