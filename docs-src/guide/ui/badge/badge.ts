import { Badge } from 'gadjet/src/ui/badge/badge';
import { color } from '../../../color';
import { addStyle } from 'gadjet/src/style';
import '../../../_component/code-title';

Badge.define('el-badge');

Badge.classStyle('blue', {
    color: color.blue
})
Badge.classStyle('green', {
    color: color.green
})
Badge.classStyle('yellow', {
    color: color.yellow
})
Badge.classStyle('red', {
    color: color.red
})
Badge.classStyle('purple', {
    color: color.purple
})

addStyle`
.preview {
    el-badge {
        margin: 0.5rem;
    }
}
`