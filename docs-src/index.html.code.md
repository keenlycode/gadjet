```js
// Javascript
import {Button} from 'gadjet.js';
Button.tagStyle({color: '#F4B942'});
Button.classStyle('violet', {color: '#7900FF'});
Button.classStyle('dark', {color: '#444'});
Button.classStyle('big', `font-size: 2em;`); // Inject plain CSS
```

```html
<!-- html -->
<button>Button</button>
<button class="violet">Violet</button>
<button class="big dark">Big Dark</button>
```

<div class="row" style="display: flex; justify-content: center;">
    <button class="yellow">Button</button>
    <button class="violet" style="margin-left: 1rem;">Violet</button>
</div>
<div class="row" style="display: flex; justify-content: center;">
    <button class="big dark" style="margin-top: 1rem;">Big Dark</button>
</div>