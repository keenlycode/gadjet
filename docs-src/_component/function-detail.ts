import { Adapter } from '@nitipit/adapter/src/adapter';
import { bgColor } from 'gadjet/src/gadjet';

import { theme } from '../color';

class FunctionDetail extends Adapter {};
FunctionDetail.define('el-function-detail');

FunctionDetail.tagStyle(`
    display: block;
    border: 0;
    border-left: 4px solid ${theme.blueGreen};
    padding: 0.8rem 0.5rem;
    ${bgColor(theme.light)}
    ul {
        margin-top: 0;
        margin-bottom: 0;
    }
`)

