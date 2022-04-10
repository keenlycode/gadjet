# Card

## Preview
---
<div class="preview">
    <el-card style="width: 90%; max-width: 450px;">
        <h2 class="bg-blue">Dessert</h2>
        <img src="./dessert.jpg">
        <p>
            A whole batch of basic vanilla cupcakes, topped with the best
            buttercream I’ve ever ever. If you don’t know how to make anything
            else in your life, at very least, perfect the vanilla cupcake.
        </p>
    </el-card>
</div>

## Coding
---
<el-tag class="title-block">js <code>\<script defer></code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { Card } from 'gadjet/dist/module/ui/card/card.js';
define('el-card', Card);
Card.tagStyle({
    color: '#eee',
    borderRadius: '4px'
})
```

<el-tag class="title-block">html</el-tag>
```html
<el-card></el-card>
```