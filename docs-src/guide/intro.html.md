<h1>Introduction</h1>

**gadjet** is a user interface library based on HTML5
and Javascript (ES6). It relies on **\<web-component/\>**
and **CSS-in-JS** to acheive it's goals to be **adaptive**, **extensible**
and **modular** as much as possible.

**gadjet** establish it's core concept on `StyledElement` class which
provides dynamic style methods to apply **CSS-in-JS** with **\<web-component/>**
as described in class structure below.

<el-tag class="title-block">ts</el-tag>
```ts
class StyledElement extends HTMLElement {
   static tagStyle(style: string|object): void;
   static classStyle(className: string, style: string|object): void;
   addStyle(style: string|object): void;
}
```

This simple implementation bring CSS coding to OOP world! Moreover, it complies
with **\<web-component/>** and **CSS** standard which make it very easy
to extend and use. For example, let's see how we define and use badge in Javascript.

<el-tag class="title-block">js<code>\<script defer></code></el-tag>
```js
// filename: script.js
import { define, Badge } from 'gadjet.js';

// define custom element, register tag name `el-badge` to class `Badge`
// and also add CSS style to defined tag.
define('el-badge', Badge);

Badge.tagStyle({color: '#444'}); // Add more style for <el-badge> tag
Badge.classStyle('blue', {color: 'blue'}); // Add more style for <el-badge class="blue">
```

<el-tag class="title-block">html</el-tag>
```html
<script defer src="script.js"></script>
<el-badge>d</el-badge>
<el-badge class="blue">b</el-badge>
```

<el-badge class="bg-theme-dark">d</el-badge>
<el-badge class="bg-blue">b</el-badge>

<el-tag class="title-blockquote">important !</el-tag> 
> Load javascript with `<script defer>` is a must to make all components work correctly.


Or you can create `<el-badge>` and modify it's style by javascript.

<el-tag class="title-block">js<code>\<script defer></code></el-tag>
```js
const badge = document.createElement('el-badge');
badge.addStyle({color: '#f6d32d'});
badge.innerHTML = 'y';
document.body.append(badge);
```

<el-badge class="bg-yellow">y</el-badge> (Text color change due to contrast)