import { addStyle } from 'gadjet/src/style/add-style';
import { Badge } from 'gadjet/src/ui/badge/badge';
import { color } from '../../../color';


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
    ${Badge.tagName} {
        margin: 0.5rem;
    }
}
`;