export function onePageScroll () {
    const body = document.getElementsByTagName('body')[0];
    const container = document.getElementsByClassName('maincontent')[0];
    const sections = document.getElementsByClassName('section');
    let activeSection = document.getElementsByClassName('activeSection')[0];
    let reqSection = Array.prototype.indexOf.call(sections, activeSection);
    let inScroll = false;
    let dots;

    (function generateDots() {
        [].forEach.call(sections, function() {
            let dot = document.createElement('li');

            dot.classList.add('nav-dots__item');
            dot.innerHTML = '<div class="nav-dots__item-round"></div>';
            document.getElementsByClassName('nav-dots')[0].append(dot);
        })
        dots = document.querySelectorAll('.nav-dots__item');
        dots[0].classList.add('activeDot');
    })();

    const switchActiveClass = (activeSectionIndex) => {
        [].forEach.call(sections, section => {
            section.classList.remove('activeSection');
        });
        [].forEach.call(dots, dot => {
            dot.classList.remove('activeDot');
        });
        sections[activeSectionIndex].classList.add('activeSection');
        dots[activeSectionIndex].classList.add('activeDot');
    }

    const makeScroll = (reqSection) => {
        inScroll = true;
        container.style.top = - (reqSection)*100 + '%';
        setTimeout(() => {
            inScroll = false;
            switchActiveClass(reqSection);
        }, 1300);
    }

    const scrollDown = () => {
        if (window.screen.width <= 992 && document.getElementById('menuContent').style.display == 'flex') {
            return;
        }
        if (reqSection < sections.length-1) {
            reqSection+=1;
            makeScroll(reqSection);
        }
    }
    const scrollUp = () => {
        if (reqSection > 0) {
            reqSection-=1;
            makeScroll(reqSection);
        }
    }

    // scroll
    body.addEventListener('mousewheel', function(e) {
        if (inScroll) {
            return;
        }
        if (e.deltaY >= 0) {
            scrollDown();
        } else {
            scrollUp();
        }
    });

    // keyboard
    body.addEventListener('keydown', function(e) {
        if (e.key == 'ArrowDown') {
            scrollDown();
        } else if (e.key == 'ArrowUp') {
            scrollUp();
        }
    });

    // header menu
    document.querySelectorAll('[data-goto]').forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            reqSection = item.getAttribute('data-goto') - 0;
            makeScroll(reqSection)
        })
    })

    // dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            reqSection = Array.prototype.indexOf.call(dots, dot);
            makeScroll(reqSection);
        })
    })
}