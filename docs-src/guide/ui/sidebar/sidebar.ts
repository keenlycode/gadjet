import { Sidebar } from 'gadjet/src/ui/sidebar/sidebar';

const sidebarButton = document.querySelector('#sidebar-button-preview');
const sidebar = document.querySelector('#sidebar') as unknown as Sidebar;

sidebarButton?.addEventListener('click', () => {
    sidebar.show();
})