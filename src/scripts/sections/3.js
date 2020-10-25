export function slider () {
    const buttons = document.getElementsByClassName('burgers__scroll');
    const container = document.getElementsByClassName('burgers__list')[0];
    const items = document.getElementsByClassName('burgers__list-item');
    let activeItem = document.getElementsByClassName('activeItem')[0];
    let reqIndex = Array.prototype.indexOf.call(items, activeItem);

    [].forEach.call(buttons, button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            if (button.classList.contains('burgers__scroll-left')) {
                reqIndex-=1;
                if (reqIndex < 0) {
                    reqIndex = items.length-1;
                }
            }
            if (button.classList.contains('burgers__scroll-right')) {
                reqIndex+=1;
                if (reqIndex > items.length-1) {
                    reqIndex = 0;
                }
            }
            container.style.left = - reqIndex*100 + '%';
        })
    })
}