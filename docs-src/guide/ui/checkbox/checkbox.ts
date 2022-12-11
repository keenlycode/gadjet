import { addStyle } from '@nitipit/adapter/src/adapter';
import { Checkbox } from 'gadjet/src/ui/checkbox/checkbox';
import { color } from '../../../color';

Checkbox.define('el-checkbox');

Checkbox.classStyle('blue', {
    activeColor: color.blue
});
Checkbox.classStyle('green', {
    activeColor: color.green
});
Checkbox.classStyle('yellow', {
    activeColor: color.yellow
});
Checkbox.classStyle('orange', {
    activeColor: color.orange
});

addStyle`
.preview {
    align-items: flex-end;
    .size-1 {
        font-size: 1em;
    }
    .size-2 {
        font-size: 2em;
    }
    .size-3 {
        font-size: 3em;
    }
    .size-4 {
        font-size: 4em;
    }
}
`;