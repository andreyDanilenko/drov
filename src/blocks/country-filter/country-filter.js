//Список континентов
const continents = [
  { continets: 'Европа', type: 'europe' },
  { continets: 'Азия', type: 'asia' },
  { continets: 'Америка', type: 'america' },
  { continets: 'Осторова', type: 'islands' },
  { continets: 'Африка', type: 'africa' },
];

const listCountryContinents = document.querySelector('.country-filter__list-continent');

continents.forEach(item => {
  const itemCountryContinents = document.createElement("li");
  itemCountryContinents.classList.add('country-filter__item-continent');

  const buttonCountryContinents = document.createElement("button");
  buttonCountryContinents.innerHTML = item.continets;
  buttonCountryContinents.classList.add('country-filter__item-continent-button');
  itemCountryContinents.appendChild(buttonCountryContinents);

  listCountryContinents.appendChild(itemCountryContinents);
});
//Список букв
const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ч', 'ш', 'э', 'ю', 'я'];

const listCountryLetter = document.querySelector('.country-filter__list-letter');

alphabet.forEach(item => {
  const itemCountryLetter = document.createElement("li");
  itemCountryLetter.classList.add('country-filter__item-letter');

  const linkCountryLetter = document.createElement("a");
  linkCountryLetter.innerHTML = item;
  linkCountryLetter.classList.add('country-filter__link-letter');
  linkCountryLetter.setAttribute('href', '#');
  itemCountryLetter.appendChild(linkCountryLetter);

  listCountryLetter.appendChild(itemCountryLetter);
});

const countries = [
  { country: 'Австралия', continent: 'europe' },
  { country: 'Австрия', continent: 'asia' },
  { country: 'Азербайджан', continent: 'asia' },
  { country: 'Албания', continent: 'europe' },
  { country: 'Алжир', continent: 'africa' },
  { country: 'Ангола', continent: 'africa' },
  { country: 'Андорра', continent: 'europe' },
  { country: 'Антигуа и Барбуда', continent: 'islands' },
  { country: 'Аргентина', continent: 'america' },
  { country: 'Армения', continent: 'asia' },
  { country: 'Афганистан', continent: 'asia' },
  { country: 'Багамские Острова', continent: 'islands' },
  { country: 'Бангладеш', continent: 'asia' },
  { country: 'Барбадос', continent: 'islands' },
  { country: 'Бахрейн', continent: 'asia' },
  { country: 'Белоруссия', continent: 'europe' },
  { country: 'Белиз', continent: 'america' },
  { country: 'Бельгия', continent: 'europe' },
  { country: 'Бенин', continent: 'africa' },
  { country: 'Болгария', continent: 'europe' },
  { country: 'Боливия', continent: 'america' },
  { country: 'Босния и Герцеговина', continent: 'europe' },
  { country: 'Ботсвана', continent: 'africa' },
  { country: 'Бразилия', continent: 'america' },
  { country: 'Бруней', continent: 'asia' },
  { country: 'Буркина-Фасо', continent: 'africa' },
  { country: 'Бурунди', continent: 'africa' },
  { country: 'Бутан', continent: 'asia' },
  { country: 'Вануату', continent: 'islands' },
  { country: 'Великобритания', continent: 'europe' },
  { country: 'Венгрия', continent: 'europe' },
  { country: 'Венесуэла', continent: 'america' },
  { country: 'Восточный Тимор', continent: 'asia' },
  { country: 'Вьетнам', continent: 'asia' },
  { country: 'Габон', continent: 'africa' },
  { country: 'Гаити', continent: 'islands' },
  { country: 'Гайана', continent: 'america' },
  { country: 'Гамбия', continent: 'africa' },
  { country: 'Гана', continent: 'africa' },
  { country: 'Гватемала', continent: 'africa' },
  { country: 'Гвинея', continent: 'africa' },
  { country: 'Гвинея-Бисау', continent: 'africa' },
  { country: 'Германия', continent: 'europe' },
  { country: 'Гондурас', continent: 'america' },
  { country: 'Гренада', continent: 'islands' },
  { country: 'Греция', continent: 'europe' },
  { country: 'Грузия', continent: 'asia' },
  { country: 'Дания', continent: 'europe' },
  { country: 'Джибути', continent: 'africa' },
  { country: 'Доминика', continent: 'islands' },
  { country: 'Доминикана', continent: 'islands' },
  { country: 'Египет', continent: 'africa' },
  { country: 'Замбия', continent: 'africa' },
  { country: 'Зимбабве', continent: 'africa' },
  { country: 'Израиль', continent: 'europe' },
  { country: 'Индия', continent: 'asia' },
  { country: 'Индонезия', continent: 'asia' },
  { country: 'Иордания', continent: 'asia' },
  { country: 'Ирак', continent: 'asia' },
  { country: 'Иран', continent: 'asia' },
  { country: 'Ирландия', continent: 'europe' },
  { country: 'Исландия', continent: 'europe' },
  { country: 'Испания', continent: 'europe' },
  { country: 'Италия', continent: 'europe' },
  { country: 'Кабо-Верде', continent: 'africa' },
  { country: 'Казахстан', continent: 'asia' },
  { country: 'Камбоджа', continent: 'asia' },
  { country: 'Камерун', continent: 'africa' },
  { country: 'Канада', continent: 'america' },
  { country: 'Катар', continent: 'asia' },
  { country: 'Кения', continent: 'africa' },
  { country: 'Кипр', continent: 'europe' },
  { country: 'Киргизия', continent: 'asia' },
  { country: 'Кирибати', continent: 'islands' },
  { country: 'Китай', continent: 'asia' },
  { country: 'Колумбия', continent: 'america' },
  { country: 'Лаос', continent: 'asia' },
  { country: 'Латвия', continent: 'europe' },
  { country: 'Лесото', continent: 'africa' },
  { country: 'Либерия', continent: 'africa' },
  { country: 'Ливан', continent: 'asia' },
  { country: 'Ливия', continent: 'africa' },
  { country: 'Литва', continent: 'europe' },
  { country: 'Лихтенштейн', continent: 'europe' },
  { country: 'Люксембург', continent: 'europe' },
  { country: 'Маврикий', continent: 'africa' },
  { country: 'Мавритания', continent: 'africa' },
  { country: 'Мадагаскар', continent: 'africa' },
  { country: 'Малави', continent: 'africa' },
  { country: 'Малайзия', continent: 'asia' },
  { country: 'Мали', continent: 'africa' },
  { country: 'Мальдивы', continent: 'asia' },
  { country: 'Мальта', continent: 'europe' },
  { country: 'Марокко', continent: 'africa' },
  { country: 'Намибия', continent: 'africa' },
  { country: 'Науру', continent: 'islands' },
  { country: 'Непал', continent: 'asia' },
  { country: 'Нигер', continent: 'africa' },
  { country: 'Нигерия', continent: 'africa' },
  { country: 'Нидерланды', continent: 'europe' },
  { country: 'Никарагуа', continent: 'america' },
  { country: 'Новая Зеландия', continent: 'islands' },
  { country: 'Норвегия', continent: 'europe' },
  { country: 'ОАЭ', continent: 'asia' },
  { country: 'Оман', continent: 'asia' },
  { country: 'Пакистан', continent: 'asia' },
  { country: 'Палау', continent: 'islands' },
  { country: 'Панама', continent: 'america' },
  { country: 'Папуа - Новая Гвинея', continent: 'islands' },
  { country: 'Парагвай', continent: 'america' },
  { country: 'Перу', continent: 'america' },
  { country: 'Польша', continent: 'europe' },
  { country: 'Португалия', continent: 'europe' },
  { country: 'Руанда', continent: 'africa' },
  { country: 'Румыния', continent: 'europe' },
  { country: 'Россия', continent: 'europa' },
  { country: 'Сальвадор', continent: 'africa' },
  { country: 'Самоа', continent: 'islands' },
  { country: 'Сан-Марино', continent: 'europe' },
  { country: 'Саудовская Аравия', continent: 'asia' },
  { country: 'Сейшелы', continent: 'africa' },
  { country: 'Сенегал', continent: 'africa' },
  { country: 'Сербия', continent: 'europe' },
  { country: 'Сингапур', continent: 'asia' },
  { country: 'Сирия', continent: 'asia' },
  { country: 'Словакия', continent: 'europe' },
  { country: 'Словения', continent: 'europe' },
  { country: 'США', continent: 'america' },
  { country: 'Таджикистан', continent: 'asia' },
  { country: 'Таиланд', continent: 'asia' },
  { country: 'Танзания', continent: 'africa' },
  { country: 'Того', continent: 'africa' },
  { country: 'Тонга', continent: 'islands' },
  { country: 'Тринидад и Тобаго', continent: 'america' },
  { country: 'Тувалу', continent: 'islands' },
  { country: 'Тунис', continent: 'africa' },
  { country: 'Туркмения', continent: 'asia' },
  { country: 'Турция', continent: 'asia' },
  { country: 'Уганда', continent: 'africa' },
  { country: 'Узбекистан', continent: 'asia' },
  { country: 'Украина', continent: 'europe' },
  { country: 'Уругвай', continent: 'america' },
  { country: 'Фиджи', continent: 'islands' },
  { country: 'Филиппины', continent: 'asia' },
  { country: 'Финляндия', continent: 'europe' },
  { country: 'Франция', continent: 'europe' },
  { country: 'Хорватия', continent: 'europe' },
  { country: 'Чад', continent: 'africa' },
  { country: 'Черногория', continent: 'europe' },
  { country: 'Чехия', continent: 'europe' },
  { country: 'Чили', continent: 'africa' },
  { country: 'Швейцария', continent: 'europe' },
  { country: 'Швеция', continent: 'europe' },
  { country: 'Шри-Ланка', continent: 'asia' },
  { country: 'Эквадор', continent: 'africa' },
  { country: 'Эритрея', continent: 'africa' },
  { country: 'Эсватини', continent: 'africa' },
  { country: 'Эстония', continent: 'europe' },
  { country: 'Эфиопия', continent: 'africa' },
  { country: 'ЮАР', continent: 'africa' },
  { country: 'Южный Судан', continent: 'africa' },
  { country: 'Ямайка', continent: 'island' },
  { country: 'Япония', continent: 'asia' }
];

const linkCountryLetter = document.querySelectorAll('.country-filter__link-letter');
const listCountryName = document.querySelector('.country-filter__list-name');
const itemContinentButton = document.querySelectorAll('.country-filter__item-continent-button');

function createCountryItem(obj) {
  const itemCountryName = document.createElement("li");
  itemCountryName.classList.add('country-filter__item-name');

  const linkCountryName = document.createElement("a");
  linkCountryName.innerHTML = obj;
  linkCountryName.classList.add('country-filter__link-name');
  linkCountryName.setAttribute('href', '#')
  itemCountryName.appendChild(linkCountryName);

  listCountryName.appendChild(itemCountryName);
};

linkCountryLetter.forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault()

    const itemCountryName = document.querySelectorAll('.country-filter__item-name');
    const itemCountryLetter = document.querySelectorAll('.country-filter__link-letter');

    itemCountryLetter.forEach(b => {
      if (b.classList.contains('country-filter__link-letter--active')) {
        b.classList.remove('country-filter__link-letter--active')
      }
    });

    countries.forEach(item => {
      if (item.country[0] === btn.textContent.toUpperCase()) {
        btn.classList.add('country-filter__link-letter--active')
        createCountryItem(item.country);
      }
    });

    if (itemCountryName.length > 0) {
      itemCountryName.forEach(item => {
        item.remove();
      });
    }
  });
});