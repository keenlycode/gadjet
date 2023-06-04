# Menu

## Preview
---
<div class="preview">
<el-menu>
<ul>
    <li>
        <a>1</a>
        <ul>
            <li>
                <a href="#">1-1</a>
                <ul>
                    <li><a>1-1-1</a></li>
                    <li><a>1-1-2</a></li>
                </ul>
            </li>
            <li>
                <a>1-2</a>
                <ul id="test">
                    <li><a>1-2-1</a></li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <a>2</a>
        <ul>
            <li>
                <a>2-1</a>
                <ul>
                    <li><a>2-1-1</a></li>
                </ul>
            </li>
            <li>
                <a>2-2</a>
            </li>
        </ul>
    </li>
</ul>
</el-menu>
</div>

## Coding
---

<el-code-title>js <code>\<script defer></code></el-code-title>
```js
import { Menu } from 'gadjet/dist/module/gadjet.bundle.js';

Menu.define('el-menu');
Menu.tagStyle({
    bgColor: '#3584e4'
});
```

<el-code-title>html</el-code-title>
```html
<el-menu>
<ul>
    <li>
        <a>1</a>
        <ul>
            <li>
                <a>1-1</a>
                <ul>
                    <li><a>1-1-1</a></li>
                    <li><a>1-1-2</a></li>
                </ul>
            </li>
            <li>
                <a>1-2</a>
                <ul>
                    <li><a>1-2-1</a></li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <a>2</a>
        <ul>
            <li>
                <a>2-1</a>
                <ul>
                    <li><a>2-1-1</a></li>
                </ul>
            </li>
            <li>
                <a>2-2</a>
            </li>
        </ul>
    </li>
</ul>
</el-menu>
```

