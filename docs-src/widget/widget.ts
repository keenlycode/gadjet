import {
    Switch,
    Card,
    InputDate,
    ButtonGroup,
    Button,
    BoxArrow,
    ProgressBar
} from 'gadjet/src/gadjet';

import { theme } from '../color';

import '../global.d';

class WidgetContainer extends Adapter {}
WidgetContainer.define("el-widget-container");
WidgetContainer.tagStyle(`
    display: flex;
    margin-top: 5rem;
    justify-content: center;
    align-items: center;
    el-card {
        margin-right: 0.8em;
    }
`)

Switch.define('el-switch');
Switch.tagStyle({
    activeColor: theme.violet
})
Switch.tagStyle(`font-size: 0.8em;`);

InputDate.define('el-input-date');
InputDate.tagStyle(`
    font-size: 0.9em;
    span[el="display"] {
        min-width: 5em;
    }
`)

ButtonGroup.define('el-button-group');

Button.classStyle('gray', {
    color: theme.light
})

BoxArrow.define('el-box-arrow');
BoxArrow.classStyle('bottom', {
    arrow: 'bottom',
    bgColor: theme.blueGreen,
    borderColor: Color(theme.blueGreen).darken(0.5),
    borderWidth: '2px'
})
BoxArrow.classStyle('bottom', `
    position: absolute;
    bottom: 3.2em;
    left: 1.2em;
    padding-left: 1em;
    padding-right: 1em;
`);

Card.define('el-card');

Card.tagStyle(`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    height: 5em;
    width: 6em;
    .row {
        display: flex;
        justify-content: center;
    }
`)

ProgressBar.define('el-progress-bar');
ProgressBar.tagStyle({
    progressColor: theme.violet
})
ProgressBar.tagStyle(`
    position: absolute;
    top: 3.2em;
`)

addStyle`
.block {
    display: flex;
    flex-wrap: wrap;
    justify-cotent: center;
    align-items: center;
    position: relative;
    max-width: 300px;
}
`