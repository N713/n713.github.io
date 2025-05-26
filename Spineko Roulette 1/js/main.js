'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const translations = {
        "RU": {
            "bonus_title": "Бонус до 100% на депозит",
            "bonus_subtitle": "Крути и выигрывай",
            "login": "Вход",
            "registration": "Регистрация",
            "button": "Крутить",
        },
        "EN": {
            "bonus_title": "100% deposit bonus",
            "bonus_subtitle": "Spin and win",
            "login": "Login",
            "registration": "Sign Up",
            "button": "Spin",
        },
        "TR": {
            "bonus_title": "Depozito üzerine %100 bonus",
            "bonus_subtitle": "Döndür ve kazan",
            "login": "Giriş",
            "registration": "Kayıt Ol",
            "button": "Döndürmek",
        }
    }

    // установки языка
    function setLanguage(lang) {
        document.querySelector('.land__header-item-title').textContent = translations[lang].bonus_title;
        document.querySelector('.land__header-item-desc').textContent = translations[lang].bonus_subtitle;
        document.querySelector('.land__btn_sing_up').textContent = translations[lang].login;
        document.querySelector('.land__btn_reg').textContent = translations[lang].registration;
        document.querySelector('.roulette__button button').textContent = translations[lang].button;
    }

    document.querySelector('.land__main_section .land_main-item').classList.add('loaded');

    setTimeout(() => {
        document.querySelector('.roulette__out').classList.remove('rotated');
        document.querySelector('.roulette button').classList.remove('rotated');
    }, 500);

    document.querySelector('.roulette button').addEventListener('click', () => {
        document.querySelector('.roulette__in img').classList.toggle('rotated');
        setTimeout(() => {
            document.location.replace('https://spnk8.com/?authModal=reg');
        }, 3000);
    });

    const langButton = document.querySelector('.land__glob_img');
    const langMenu = document.querySelector('.header__languages');
    const langs = langMenu.querySelectorAll('li button');

    langButton.addEventListener('click', () => {
        langMenu.classList.toggle('hidden');
    });

    langs.forEach((lang) => {
        lang.addEventListener('click', (e) => {
            setLanguage(`${e.target.textContent.toUpperCase()}`);
        });
    });
});
