const sidebarButton = document.querySelector('#sidebar-button-preview');
const sidebar = document.querySelector('#sidebar');

sidebarButton.addEventListener('click', () => {
    sidebar.show();
})