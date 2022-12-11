import { addStyle } from '@nitipit/adapter/src/adapter';
import { Tag } from 'gadjet/src/ui/tag/tag';
import { TagX } from 'gadjet/src/ui/tag/tagx';


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