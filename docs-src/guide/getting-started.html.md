# Getting Started

## Installation
---

```bash
$ npm install gadjet
```

## Usage
---
### 1. Use bundle script

Just copy `node_modules/gadjet/dist/gadjet.js` and place to directory
which can be access by web browser, then every functions and modules will be
ready to import.

```js
import { define, addStyle, StyledElement, Button, Badge } from 'gadjet.js';
```

### 2. Use Javascript modules

This method require javascript building tools. In this example use Parcel v2

```
npm install parcel
```

<el-tag class="title-block"><code>index.html</code></el-tag>
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>My Webpage</title>
    <script defer type="module" src="index.js"></script>
</head>
<body>
    <el-input-tag>
        <el-input-tag-tagx>tag</el-input-tag-tagx>
    </el-input-tag>
</body>
</html>
```

<el-tag class="title-block"><code>index.js</code></el-tag>
```js
import { define } from 'gadjet/dist/module/ui/ui.js';
import { InputTag } from 'gadjet/dist/module/ui/input/input-tag.js';

define('el-input-tag', InputTag);
```

Then run `parcel`

<el-tag class="title-block">bash</el-tag>
```bash
$ parcel webpage.html
Server running at http://localhost:1234
✨ Built in 48ms
```

Will give you the result on webpage at [](http://localhost:1234).

<el-input-tag>
    <el-input-tag-tagx>tag</el-input-tag-tagx>
</el-input-tag>

### 3. Use Typescript modules

This require Javascript building tools which support typescript
(Parcel v2 is recommended). Everthing is the same as using Javascript modules
except the import path which start with `gadjet/src/` instead of
`gadjet/dist/module/`. For example

<el-tag class="title-block">ts</el-tag>
```ts
import { define } from 'gadjet/src/ui/ui';
import { InputTag } from 'gadjet/src/ui/input/input-tag';
```

## Style, Class and Element API
---

Style functions, component classes and elements have thier own API. You can learn
more at their documentation page.