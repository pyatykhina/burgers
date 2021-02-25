export function verticalAccordeon () {
    const items = document.getElementsByClassName('team__content-accordeon-item');
    const triggers = document.getElementsByClassName('team__content-accordeon-item-trigger');

    [].forEach.call(triggers, trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();

            let item = trigger.closest('.team__content-accordeon-item');

            if (!item.classList.contains('team-accordeon-active')) {
                [].forEach.call(items, e => {
                    e.classList.remove('team-accordeon-active');
                    e.lastElementChild.style.height = '0';
                })
                item.classList.add('team-accordeon-active');
                window.screen.width > 768 
                    ? item.lastElementChild.style.height = item.lastElementChild.scrollHeight*2 + 'px'
                    : item.lastElementChild.style.height = item.lastElementChild.scrollHeight + 'px'
            } else {
                item.classList.remove('team-accordeon-active');
                item.lastElementChild.style.height = '0'
            }
        })
    });
}