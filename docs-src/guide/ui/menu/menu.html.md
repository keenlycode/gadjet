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
</div>

## Coding
---

<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { Menu } from 'gadjet/dist/module/ui/menu/menu.js';
define('el-menu', Menu);
Menu.tagStyle({
    activeColor: 'blue',
    arrowColor: 'blue'
});
```

<el-tag class="title-block">html</el-tag>
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

