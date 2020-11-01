export function popups () {
    const feedbacks = document.getElementsByClassName('feedback__items-item');

    [].forEach.call(feedbacks, feedback => {
        const trigger = feedback.getElementsByClassName('feedback__items-item-content-button')[0];
        const name = feedback.getElementsByClassName('feedback__items-item-content-name')[0].innerHTML;
        const text = feedback.getElementsByClassName('feedback__items-item-content-text')[0].innerHTML;

        trigger.addEventListener('click', function() {
            let popup = document.createElement('div');
    
            popup.classList.add('feedback__popup');
            popup.innerHTML = `<div class="feedback__popup-content">
                <div class="feedback__popup-content-name"> ${name} </div>
                <div class="feedback__popup-content-text"> ${text} </div>
                <div class="feedback__popup-content-close"><img src='images/6/close.png'/></div>
                </div>`

            document.getElementsByTagName('html')[0].appendChild(popup);

            document.addEventListener('mousewheel', function(e) {
                e.preventDefault();
            }, { passive: false });

            document.getElementsByClassName('feedback__popup-content-close')[0].addEventListener('click', function() {
                document.getElementsByTagName('html')[0].removeChild(popup);
            })
        })
    })
}
