# Table

## Preview
---
<div class="preview">
<table class="table">
    <thead>
        <tr>
            <th></th>
            <th scope="col">Mon</th>
            <th scope="col">Tue</th>
            <th scope="col">Wed</th>
            <th scope="col">Thu</th>
            <th scope="col">Fri</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">8:00 - 10:00</th>
            <td>Education Swim</td>
            <td>Education Swim</td>
            <td>Education Swim</td>
            <td>Education Swim</td>
            <td>Education Swim</td>
        </tr>
        <tr>
            <th scope="row">10:00 - 12:00</th>
            <td>Kids Lesson</td>
            <td>Kids Lesson</td>
            <td>Kids Lesson</td>
            <td>Kids Lesson</td>
            <td>Kids Lesson</td>
        </tr>
        <tr>
            <th scope="row">12:00 - 15:00</th>
            <td>Lane Swim</td>
            <td>Lane Swim</td>
            <td>Lane Swim</td>
            <td>Lane Swim</td>
            <td>Lane Swim</td>
        </tr>
        <tr>
            <th scope="row">15:00 - 17:00</th>
            <td>Public Swim</td>
            <td>Public Swim</td>
            <td>Public Swim</td>
            <td>Public Swim</td>
            <td>Public Swim</td>
        </tr>
    </tbody>
</table>
</div>


## Coding
---

<el-code-title>js <code>\<script defer></code></el-code-title>

```js
import { Table } from 'gadjet/dist/module/gadjet.bundle.js';

Table.define('table');
Table.tagStyle({
    theadBgColor: '#ccc',
    activeColor: 'blue',
    horizontalLine: true,
    verticalLine: true,
})
```

<el-code-title>html</el-code-title>
```html
<table class="table">
    <thead>
        <tr>
            <th scope="col">Time</th>
            <th scope="col">Mon</th>
            <th scope="col">Tue</th>
            <th scope="col">Wed</th>
            <th scope="col">Thu</th>
            <th scope="col">Fri</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">8:00 - 10:00</th>
            <td>Education Swim</td>
            <td>Education Swim</td>
            <td>Education Swim</td>
            <td>Education Swim</td>
            <td>Education Swim</td>
        </tr>
        <tr>
            <th scope="row">10:00 - 12:00</th>
            <td>Kids Lesson</td>
            <td>Kids Lesson</td>
            <td>Kids Lesson</td>
            <td>Kids Lesson</td>
            <td>Kids Lesson</td>
        </tr>
        <tr>
            <th scope="row">12:00 - 15:00</th>
            <td>Lane Swim</td>
            <td>Lane Swim</td>
            <td>Lane Swim</td>
            <td>Lane Swim</td>
            <td>Lane Swim</td>
        </tr>
        <tr>
            <th scope="row">15:00 - 17:00</th>
            <td>Public Swim</td>
            <td>Public Swim</td>
            <td>Public Swim</td>
            <td>Public Swim</td>
            <td>Public Swim</td>
        </tr>
    </tbody>
</table>
```