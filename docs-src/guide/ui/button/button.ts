import { addStyle } from 'gadjet/src/style/add-style';
import { Button } from 'gadjet/src/ui/button/button'
import { ButtonGroup } from 'gadjet/src/ui/button/button-group';
import { ButtonPin } from 'gadjet/src/ui/button/button-pin';
import { ButtonSquare } from 'gadjet/src/ui/button/button-square';

Button.tagStyle({color: 'blue'});
ButtonPin.define('el-button-pin');
ButtonSquare.define('el-button-square');
ButtonGroup.define('el-button-group');

addStyle`
.row > * {
    margin: 1rem;
}

#preview ${ButtonGroup.tagName} > button {
    width: 100%;
}
`;