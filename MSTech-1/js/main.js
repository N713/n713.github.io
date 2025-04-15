'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const INTERVAL = 4000;

    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const links = document.querySelectorAll('.menu a');
    const header = document.querySelector('.header');

    const rightImages = document.querySelectorAll('.about__images-right .about__images-image');
    const leftImages = document.querySelectorAll('.about__images-left .about__images-image');

    const dateElement = document.querySelector('.date');
    const currentYear = new Date().getFullYear();

    let currentRight = 1;
    let currentLeft = 1;

    dateElement.textContent = currentYear;

    setInterval(() => {
        rightImages.forEach(image => {
            image.classList.remove('about__images--active');
        });
        rightImages[currentRight].classList.add('about__images--active');
        currentRight++;
        if (currentRight >= rightImages.length) {
            currentRight = 0;
        }
    }, INTERVAL);

    setInterval(() => {
        leftImages.forEach(image => {
            image.classList.remove('about__images--active');
        });
        leftImages[currentLeft].classList.add('about__images--active');
        currentLeft++;
        if (currentLeft >= leftImages.length) {
            currentLeft = 0;
        }
    }, INTERVAL);

    links.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.toggle('burger--active');
            menu.classList.toggle('menu--hidden');
        });
    });

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger--active');
        menu.classList.toggle('menu--hidden');
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 0) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');    
        }
    });
});
