import {
    Switch,
    Card,
    InputDate,
    ButtonGroup,
    Button,
    BoxArrow,
    ProgressBar
} from 'gadjet/dist/module/gadjet';

import { theme } from '../color';

class WidgetContainer extends Adapter {}
WidgetContainer.define("el-widget-container");
WidgetContainer.tagStyle(`
    display: flex;
    justify-content: center;
    align-items: center;
    el-card {
        margin-right: 0.8em;
    }
    ${fontFluid({
        vwMin: 300, vwMax: 800,
        fontSizeMin: 14, fontSizeMax: 20
    })}

    .block {
        all: unset;
        display: flex;
        flex-wrap: wrap;
        justify-cotent: center;
        align-items: center;
        position: relative;
        max-width: 400px;
    }
`)

Switch.define('el-switch');
Switch.tagStyle({
    activeColor: theme.violet
})

InputDate.define('el-input-date');
InputDate.tagStyle(`
    span[el="display"] {
        min-width: 3em;
        width: 5em;
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
    left: 1.8em;
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