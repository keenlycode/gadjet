import {
    addStyle,
    Tag,
    TagX
} from 'gadjet/dist/module/gadjet.bundle.js';

class MyTag extends Tag {};
MyTag.define('my-tag');
TagX.define('el-tagx');

addStyle`
.preview {
    > * {
        margin: 1rem;
        font-size: 1.5rem;
    }
}
`