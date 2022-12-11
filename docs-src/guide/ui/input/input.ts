import {addStyle} from '@nitipit/adapter/src/adapter';
import {InputDate} from 'gadjet/src/ui/input/input-date';
import {InputNumber} from 'gadjet/src/ui/input/input-number';
import {InputNumberCenter} from 'gadjet/src/ui/input/input-number-center';
import {InputRadio} from 'gadjet/src/ui/input/input-radio';
import {
    InputRadioButton,
    InputRadioButtonGroup
} from 'gadjet/src/ui/input/input-radio-button';
import {InputRange} from 'gadjet/src/ui/input/input-range';
import {InputTag} from 'gadjet/src/ui/input/input-tag';


InputDate.define('el-input-date');
InputNumber.define('el-input-number');
InputNumberCenter.define('el-input-number-center');
InputRadio.define('el-input-radio');
InputRadioButton.define('el-input-radio-button');
InputRadioButtonGroup.define('el-input-radio-button-group');
InputRange.define('el-input-range');
InputTag.define('el-input-tag');

addStyle`
el-input-radio {
    margin: 1rem;
}
`;
