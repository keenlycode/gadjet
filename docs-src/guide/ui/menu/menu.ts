import { Menu } from 'gadjet';

Menu.define('el-menu');
Menu.tagStyle(`
    max-width: 300px;
    width: 100%;
`)

window.Menu = Menu;