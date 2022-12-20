import { ButtonPin } from 'gadjet/src/ui/button/button-pin';

import '../../../global.d';
import { theme } from '../../../color';

ButtonPin.define('el-button-pin');

const sidebarButton = document.querySelector('#sidebar-button-preview') as ButtonPin;
sidebarButton!.addStyle({
    color: theme.yellow
});

sidebarButton?.addEventListener('click', () => {
    sidebar.show();
})