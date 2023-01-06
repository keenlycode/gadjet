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
<el-code-title>js <code>\<script defer></code></el-code-title>

```js
import { Card } from 'gadjet/dist/module/ui/card/card.js';

Card.define('el-card');
Card.tagStyle({
    color: '#eee',
    borderRadius: '4px'
})
```

<el-code-title>html</el-code-title>

```html
<el-card></el-card>
```