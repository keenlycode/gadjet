import {
    addStyle,
    Tag,
    TagX
} from 'gadjet/src/gadjet';

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