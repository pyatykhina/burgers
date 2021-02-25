export function dropdownMenu () {
    const menuTriggerOpen = document.getElementById('menuTriggerOpen');
    const menuTriggerClose = document.getElementById('menuTriggerClose');
    const menuContent = document.getElementById('menuContent');
    const menuItems = document.getElementsByClassName('header__menu-item-link');

    menuTriggerOpen.addEventListener('click', function() {
        menuContent.style.display = 'flex';
        menuTriggerOpen.style.display = 'none';
        menuTriggerClose.style.display = 'block';

        [].forEach.call(menuItems, menuItem => {
            menuItem.addEventListener('click', function() {
                menuContent.style.display = 'none';
                menuTriggerClose.style.display = 'none';
                menuTriggerOpen.style.display = 'block';
            })
        });
    })

    menuTriggerClose.addEventListener('click', function() {
        menuContent.style.display = 'none';
        menuTriggerClose.style.display = 'none';
        menuTriggerOpen.style.display = 'block';
    })
}