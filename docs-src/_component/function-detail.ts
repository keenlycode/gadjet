import { theme } from '../color';
import '../global.d';

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

