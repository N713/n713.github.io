'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const GAP = 350;

    const advantages = document.querySelectorAll('.js-advantage');
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.land__header-main-item');
    const menuItems = document.querySelectorAll('.land__header_menu-item a');

    const section1 = document.querySelector('.land__section_1');
    const section2 = document.querySelector('.land__section_2');
    const section3 = document.querySelector('.land__section_3');
    const section4 = document.querySelector('.land__section_4');
    const section5 = document.querySelector('.land__section_5');
    const footer = document.querySelector('.land__footer');

    advantages.forEach((advantage) => {
        advantage.addEventListener('mouseover', (evt) => {
            const img = advantage.querySelector('img');
            img.setAttribute('src', `${evt.currentTarget.dataset.srcin}`);
        });

        advantage.addEventListener('focusin', (evt) => {
            const img = advantage.querySelector('img');
            img.setAttribute('src', `${evt.currentTarget.dataset.srcin}`);
        });

        advantage.addEventListener('mouseout', (evt) => {
            const img = advantage.querySelector('img');
            img.setAttribute('src', `${evt.currentTarget.dataset.srcout}`);
        });

        advantage.addEventListener('focusout', (evt) => {
            const img = advantage.querySelector('img');
            img.setAttribute('src', `${evt.currentTarget.dataset.srcout}`);
        });
    });

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('hidden');
    });

    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            menu.classList.add('hidden');
            burger.classList.remove('active');
        });
    });

    setTimeout(() => {
        const elems = section1.querySelectorAll('.animate__animated');

        for (let i = 0; i < elems.length; i++) {
            setTimeout(() => {
                elems[i].classList.remove('hidden');
                elems[i].classList.add('animate__slideInRight');
            }, i * 50);
        }
    }, 500);

    const setAnimations = (elems, delay, anim) => {
        for (let i = 0; i < elems.length; i++) {
            setTimeout(() => {
                elems[i].classList.remove('hidden');

                if (elems[i].classList.contains('land__main_title')) {
                    elems[i].classList.add('animate__slideInDown');
                } else {
                    elems[i].classList.add(`${anim}`);
                }
            }, i * delay);
        }
    }

    window.addEventListener('scroll', (evt) => {
        if (window.scrollY > section2.offsetTop - GAP) {
            const elems = section2.querySelectorAll('.animate__animated');
            setAnimations(elems, 50, 'animate__slideInLeft');
        }

        if (window.scrollY > section3.offsetTop - GAP) {
            const elems = section3.querySelectorAll('.animate__animated');
            setAnimations(elems, 100, 'animate__fadeIn');
        }

        if (window.scrollY > section4.offsetTop - GAP) {
            const elems = section4.querySelectorAll('.animate__animated');
            setAnimations(elems, 0, 'animate__rotateIn');
        }

        if (window.scrollY > section5.offsetTop - GAP) {
            const elems = section5.querySelectorAll('.animate__animated');
            setAnimations(elems, 0, 'animate__rotateIn');
        }

        if (window.scrollY > footer.offsetTop - GAP * 2) {
            const elems = footer.querySelectorAll('.animate__animated');
            setAnimations(elems, 50, 'animate__slideInDown');
        }
    });
});