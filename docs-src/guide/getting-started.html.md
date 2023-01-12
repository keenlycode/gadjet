# Getting Started

## Installation
---

```shell
$ npm install gadjet
```

## Usage
---
### 1. Use bundle script

Just copy `node_modules/gadjet/dist/module/gadjet.bundle.js` and place to directory
which can be access by web browser, then every functions and modules will be
ready to import.

```js
import { Button, Badge } from 'gadjet/dist/module/gadjet.bundle.js';
```

### 2. Use Javascript modules

This method require javascript building tools. In this example use Parcel v2

```shell
$ npm install parcel
```

<el-code-title>html<code>index.html</code></el-code-title>
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

<el-code-title>js<code>index.js</code></el-tag>
```js
import { InputTag } from 'gadjet';

InputTag.define('el-input-tag);
```

Then run `parcel`

<el-code-title>shell</el-code-title>
```shell
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
(Parcel v2 is recommended). The import path will start with `gadjet/src/ui/`

<el-blockquote-title>Note</el-blockquote-title>

> Using **Typescript** with coding tools (VS Code) will provide you a better coding environment
> such as autocomplete, suggestion or variable type check.

<el-code-title>ts</el-code-title>
```ts
import { InputTag } from 'gadjet/src/ui/input/input-tag';
```

## Style, Class and Element API
---

Style functions and UI have thier own API. You can learn
more at their documentation page.