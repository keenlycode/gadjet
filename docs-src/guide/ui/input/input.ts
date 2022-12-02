import {define, addStyle} from 'gadjet/src/adapter';
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

define('el-input-date', InputDate);
define('el-input-number', InputNumber);
define('el-input-number-center', InputNumberCenter);
define('el-input-radio', InputRadio);

define('el-input-radio-button', InputRadioButton);
define('el-input-radio-button-group', InputRadioButtonGroup);
define('el-input-range', InputRange);
define('el-input-tag', InputTag);

addStyle`
el-input-radio {
    margin: 1rem;
}
`;
