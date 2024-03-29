import { Switch } from 'gadjet/src/ui/switch/switch';

Switch.define('el-switch');

Switch.classStyle('light', {
    pinColor: '#EFF2F1',
    bgColor: '#deddda',
    activeColor: '#7900FF'
});

Switch.classStyle('yellow', {
    activeColor: '#F4B942'
});

const elSwitch = document.querySelector('el-switch#green');
elSwitch!.addStyle({
    pinColor: '#97D8C4',
    activeColor: '#F4B942'
});