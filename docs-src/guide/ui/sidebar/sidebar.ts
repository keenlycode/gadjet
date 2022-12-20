import '../../../global.d';

const sidebarButton = document.querySelector('#sidebar-button-preview');

sidebarButton?.addEventListener('click', () => {
    sidebar.show();
})