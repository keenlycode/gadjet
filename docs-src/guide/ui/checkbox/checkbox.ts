import { define } from 'gadjet/src/adapter';
import { Checkbox } from 'gadjet/src/ui/checkbox/checkbox';
import { color } from '../../../color';

define('el-checkbox', Checkbox);

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
