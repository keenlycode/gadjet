import {
    Switch,
    Card,
    InputDate,
    ButtonGroup,
    Button,
    BoxArrow
} from 'gadjet/src/gadjet';

import { color, theme } from '../color';

import '../global.d';

Switch.define('el-switch');
Switch.tagStyle({
    activeColor: theme.violet
})

InputDate.define('el-input-date');

ButtonGroup.define('el-button-group');

Button.classStyle('gray', {
    color: theme.light
})

BoxArrow.define('el-box-arrow');
BoxArrow.classStyle('bottom', {
    arrow: 'bottom',
    bgColor: theme.blueGreen
})
BoxArrow.classStyle('bottom', `
    position: absolute;
    bottom: 3.2rem;
    left: 2.8rem;
    padding-left: 1rem;
    padding-right: 1rem;
`);

Card.define('el-card');

Card.tagStyle(`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    height: 7rem;
    width: 8rem;
    .row {
        display: flex;
        justify-content: center;
    }
`)

addStyle`
.container {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    el-card {
        margin: 1rem;
    }
}
.block {
    display: flex;
    flex-wrap: wrap;
    justify-cotent: center;
    align-items: center;
    position: relative;
}
`