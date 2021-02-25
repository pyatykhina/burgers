export function horizontalAccordeon () {
    const items = document.getElementsByClassName('menu__content-accordeon-item');
    const triggers = document.getElementsByClassName('menu__content-accordeon-item-trigger');

    [].forEach.call(triggers, trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();

            let item = trigger.closest('.menu__content-accordeon-item');

            if (!item.classList.contains('menu-accordeon-active')) {
                [].forEach.call(items, e => {
                    e.classList.remove('menu-accordeon-active');
                    e.lastElementChild.style.width = '0';
                });
                [].forEach.call(triggers, e => {
                    e.style.color = '#fff'
                });
                item.classList.add('menu-accordeon-active');
                window.screen.width > 768 
                    ? item.lastElementChild.style.width = '33.75rem'
                    : item.lastElementChild.style.width = 'calc(100vw - 15rem)'
                trigger.style.color = '#f8b43a';
            } else {
                item.classList.remove('menu-accordeon-active');
                item.lastElementChild.style.width = '0'
                trigger.style.color = '#fff';
            }
        })
    });
}