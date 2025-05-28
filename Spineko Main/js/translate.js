const translations = {
  "RU": {
    "bonus_title": "Бонус до 100% на депозит",
    "bonus_subtitle": "Крути и выигрывай",
    "brand": "бренд",
    "commissions": "Комиссии",
    "advantages": "Преимущества",
    "contacts": "Контакты",
    "Вход": "Вход",
    "entrance": "Регистрация",
    "OUR_BRAND": "НАШ БРЕНД",
    "Welcome_to_online_casino": "Добро пожаловать в онлайн-казино Money Spineko — идеальное место для азартных приключений!",
    "immersion_excitement_luck": "Spineko affiliates — азарт, который превращается в прибыль",
    "include_our_company": "Присоединяйтесь к нашей партнерской программе и начните зарабатывать вместе с нами!",
    "year_founded": "Год основания",
    "name": "Название",
    "Spineko_Money": "Spineko Money",
    "game_catalog": "Игровой каталог",
    "2000_slots": "2000+ слотов",
    "help_desk": "Служба поддержки",
    "fast_response": "Круглосуточно 24/7 Быстрое реагирование Дружелюбный саппорт",
    "welcome_bonuses": "Приветственные бонусы",
    "1st_deposit": "1-й депозит: 100% + 100 FS <br> 2-й депозит: 150% + 75 FS <br> 3-й депозит: 200% + 50 FS",
    "Providers": "Провайдеры",
    "More_30_providers": "Более 30 провайдеров, включая Evolution, Play, Pragmatic, Belatra, Endorphina",
    "PAYMENT_MODELS": "МОДЕЛИ ОПЛАТЫ",
    "OUR_STRENGTHS": "НАШИ СИЛЬНЫЕ СТОРОНЫ",
    "CONTACTS": "КОНТАКТЫ",
    "become_partner": "Стать партнером",
    "Register_write_manager_directly": "Регистрируйся или напиши менеджеру напрямую:",
  },
  "EN": {
    "bonus_title": "Up to 100% deposit bonus",
    "bonus_subtitle": "Spin and win",
    "brand": "brand",
    "commissions": "Commissions",
    "advantages": "Advantages",
    "contacts": "Contacts",
    "Вход": "Login",
    "entrance": "Registration",
    "OUR_BRAND": "OUR BRAND",
    "Welcome_to_online_casino": "Welcome to Money Spineko online casino — the perfect place for gambling adventures!",
    "immersion_excitement_luck": "With our casino, players will immerse themselves in a world of excitement and luck!",
    "include_our_company": "Join our affiliate program and start earning with us!",
    "year_founded": "Year founded",
    "name": "Name",
    "Spineko_Money": "Spineko Money",
    "game_catalog": "Game catalog",
    "2000_slots": "2000+ slots",
    "help_desk": "Help desk",
    "fast_response": "24/7 support Fast response Friendly support",
    "welcome_bonuses": "Welcome bonuses",
    "1st_deposit": "1st deposit: 100% + 100 FS <br> 2nd deposit: 150% + 75 FS <br> 3rd deposit: 200% + 50 FS",
    "Providers": "Providers",
    "More_30_providers": "More than 30 providers, including Evolution, Play, Pragmatic, Belatra, Endorphina",
    "PAYMENT_MODELS": "PAYMENT MODELS",
    "OUR_STRENGTHS": "OUR STRENGTHS",
    "CONTACTS": "CONTACTS",
    "become_partner": "Become a partner",
    "Register_write_manager_directly": "Register or contact the manager directly:",
  },
  "TR": {
    "bonus_title": "Yatırıma kadar %100 bonus",
    "bonus_subtitle": "Döndür ve kazan",
    "brand": "marka",
    "commissions": "Komisyonlar",
    "advantages": "Avantajlar",
    "contacts": "İletişim",
    "Вход": "Giriş",
    "entrance": "Kayıt",
    "OUR_BRAND": "MARKAMIZ",
    "Welcome_to_online_casino": "Money Spineko online casinoya hoş geldiniz — şans maceraları için mükemmel yer!",
    "immersion_excitement_luck": "Kumarhanemizle oyuncular heyecan ve şans dünyasına dalacak!",
    "include_our_company": "Ortaklık programımıza katılın ve bizimle birlikte kazanmaya başlayın!",
    "year_founded": "Kuruluş yılı",
    "name": "Ad",
    "Spineko_Money": "Spineko Money",
    "game_catalog": "Oyun kataloğu",
    "2000_slots": "2000+ slot",
    "help_desk": "Yardım masası",
    "fast_response": "7/24 destek Hızlı yanıt Dostça destek",
    "welcome_bonuses": "Hoş geldin bonusları",
    "1st_deposit": "1. yatırım: %100 + 100 FS <br> 2. yatırım: %150 + 75 FS <br> 3. yatırım: %200 + 50 FS",
    "Providers": "Sağlayıcılar",
    "More_30_providers": "Evolution, Play, Pragmatic, Belatra, Endorphina dahil 30'dan fazla sağlayıcı",
    "PAYMENT_MODELS": "ÖDEME MODELLERİ",
    "OUR_STRENGTHS": "GÜÇLÜ YÖNLERİMİZ",
    "CONTACTS": "İLETİŞİM",
    "become_partner": "Ortak olun",
    "Register_write_manager_directly": "Kaydolun veya doğrudan yöneticiye yazın:",
  }
};

function setLanguage(lang) {
  const langData = translations[lang] || translations['RU']; // По умолчанию русский

  // Шапка
  const menuItems = document.querySelectorAll('.land__header_menu-item a');
  if (menuItems.length >= 4) {
    menuItems[0].textContent = langData.brand;
    menuItems[1].textContent = langData.commissions;
    menuItems[2].textContent = langData.advantages;
    menuItems[3].textContent = langData.contacts;
  }

  // Кнопки входа/регистрации
  document.querySelector('.land__btn_sing_up').textContent = langData.Вход;
  document.querySelector('.land__btn_reg').textContent = langData.entrance;

  // Секция 1
  document.querySelector('.land__title').textContent = "Spineko affiliates — " + langData.immersion_excitement_luck;
  document.querySelector('.land__subtitle').textContent = langData.include_our_company;
  document.querySelector('.land__super-btn').textContent = langData.become_partner;

  // Секция 2
  document.querySelector('.land__main_title').textContent = langData.OUR_BRAND;
  const section2Titles = document.querySelectorAll('.land__sectin_2_block_item .land__title');
  const section2Subtitles = document.querySelectorAll('.land__sectin_2_block_item .land__subtitle');

  if (section2Titles.length > 0) {
    section2Titles[0].textContent = langData.Welcome_to_online_casino;
  }
  if (section2Subtitles.length > 0) {
    section2Subtitles[0].textContent = langData.immersion_excitement_luck;
  }

  // Секция 3
  const textTitles = document.querySelectorAll('.land__text_title');
  const textSubtitles = document.querySelectorAll('.land__text_subtitle');

  if (textTitles.length >= 6 && textSubtitles.length >= 6) {
    textTitles[0].textContent = langData.year_founded;
    textTitles[1].textContent = langData.name;
    textSubtitles[1].textContent = langData.Spineko_Money;
    textTitles[2].textContent = langData.game_catalog;
    textSubtitles[2].textContent = langData["2000_slots"];

    textTitles[3].textContent = langData.help_desk;
    textSubtitles[3].textContent = langData.fast_response;
    textTitles[4].textContent = langData.welcome_bonuses;
    textSubtitles[4].innerHTML = langData["1st_deposit"];
    textTitles[5].textContent = langData.Providers;
    textSubtitles[5].textContent = langData.More_30_providers;
  }

  // Секция 4
  const section4Title = document.querySelector('.land__section_4 .land__main_title');
  if (section4Title) {
    section4Title.textContent = langData.PAYMENT_MODELS;
  }

  // Секция 5
  const section5Title = document.querySelector('.land__section_5 .land__main_title');
  if (section5Title) {
    section5Title.textContent = langData.OUR_STRENGTHS;
  }

  // Футер
  const footerTitle = document.querySelector('.land__footer .land__main_title');
  const footerBtn = document.querySelector('.land__footer .land__super-btn');
  const contactText = document.querySelector('.land__contact_text');

  if (footerTitle) footerTitle.textContent = langData.CONTACTS;
  if (footerBtn) footerBtn.textContent = langData.become_partner;
  if (contactText) contactText.textContent = langData.Register_write_manager_directly;
}

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
