/**
 * Mistral Pizza — i18n + меню (рендер у app.js)
 */

const STORAGE_KEY = "mistral_lang";
/** Курс для позиций без зафіксованої пари з меню (PRD / фото має пріоритет). */
const EUR_TO_BGN = 1.96;

const SITE_CONTENT = {
  uk: {
    meta: {
      title: "Mistral Pizza — Світі Влас",
      description:
        "Свіжа піца біля моря у Світи Влас, Болгарія. Тепло гостинності, середземноморська легкість та морський бриз.",
    },
    a11y: {
      skipToContent: "Перейти до основного вмісту",
      langNavLabel: "Мова сайту",
      langToggleGroup: "Оберіть мову",
      siteSections: "Розділи сайту",
    },
    nav: {
      home: "Головна",
      menu: "Меню",
      contact: "Контакт",
    },
    header: {
      tagline: "Світі-Влас • Болгарія",
      langLabelShort: "Мова",
    },
    hero: {
      kicker: "Прибережна піцерія",
      title: "Свіжа з печі — прямо до моря",
      subtitle:
        "Тепло української гостинності й легкий бриз Світого Власу. Завітайте до Mistral Pizza — зручний перегляд меню телефоном у три кліки.",
      ctaPrimary: "Переглянути меню",
      ctaSecondary: "Зв’язатися",
      note: "Працюємо щодня, окрім понеділка · 12:00–20:00 (EET)",
      visualCaption: "Сьогодні в печі — ваш улюблений смак",
      visualSupport: "Натуральні інгредієнти, чесні порції та зручне замовлення дзвінком.",
    },
    menu: {
      eyebrow: "Заклад у Світи Влас",
      title: "Меню Mistral Pizza",
      intro:
        "Піца з печі, чебуреки й страви до моря — з повними складниками та вагою. Ціни в євро та левах відповідно до чинного прайсу; де не вказано окремо — з перерахуванням EUR × 1,96.",
      filterToolbarAria: "Фільтр страв за категорією",
      dualCurrencyFootnote:
        "Формат ціни: сума в євро та левах через розділювач. Для сезонної позиції уточнюйте в залі.",
      categories: {
        all: "Усе меню",
        pizza: "Піца",
        cheburek: "Чебуреки",
        fried: "Жарене",
        pancakes: "Блини",
        salads: "Салати",
      },
      weight: "Вага",
      seasonal: "Ціна сезонна",
      seasonalHint: "Уточнюйте в залі або за телефоном",
      ingredients: "Склад",
    },
    venue: {
      badgeOpenAria: "Ресторан зараз працює",
      badgeClosedAria: "Ресторан зараз не працює",
      openNow: "Зараз працюємо",
      closed: "Зараз закрито",
      openSubtitle: "До закриття о 20:00 · час Софії (EET / EEST)",
      closedNextPrefix: "Відчинить:",
      timezoneNote:
        "Час для статусу: Європа/Софія (зимує UTC+2, влітку UTC+3; як у Болгарії).",
      mapIframeTitle: "Карта: Mistral Pizza, вулиця Бор 2, Святий Влас",
    },
    footer: {
      title: "Приходьте в гості",
      intro: "Приходьте на вулицю Бор у Святому Власі — ми на карті нижче. Замовити можна зателефонувавши.",
      hoursEyebrow: "Час роботи",
      hoursSummary: "Вівторок–неділя: 12:00–20:00 · понеділок — вихідний",
      addressLabel: "Адреса",
      addressStreet: "вул. Бор 2",
      addressCity: "8256 Світи Влас, Болгарія",
      phoneDisplay: "+359 88 426 4643",
      openDirections: "Маршрут у Google Maps",
      copyright: "© Mistral Pizza, Світи Влас",
    },
  },
  en: {
    meta: {
      title: "Mistral Pizza — Sveti Vlas",
      description:
        "Fresh pizza by the sea in Sveti Vlas, Bulgaria. Ukrainian warmth meets the Black Sea breeze.",
    },
    a11y: {
      skipToContent: "Skip to main content",
      langNavLabel: "Site language",
      langToggleGroup: "Choose language",
      siteSections: "Site sections",
    },
    nav: {
      home: "Home",
      menu: "Menu",
      contact: "Contact",
    },
    header: {
      tagline: "Sveti Vlas • Bulgaria",
      langLabelShort: "Language",
    },
    hero: {
      kicker: "Seaside pizzeria",
      title: "Fresh from the oven, straight to the sea.",
      subtitle:
        "Warm Ukrainian hospitality meets the breezy harbour of Sveti Vlas. Browse the essentials fast on your phone — then call to order.",
      ctaPrimary: "View menu",
      ctaSecondary: "Contact",
      note: "Open Tue–Sun · 12:00–20:00 (local time, EET/EEST) · Closed Mondays",
      visualCaption: "Today from the oven — your favourite slice",
      visualSupport:
        "Honest portions, thoughtful ingredients — order quickly with one quick call.",
    },
    menu: {
      eyebrow: "House menu",
      title: "The Mistral Pizza menu",
      intro:
        "Stone-baked pizzas, chebureks, and seaside comfort plates — ingredients and weights spelled out clearly. Euros and leva mirror our board; where only EUR is coded, lev is derived at EUR × 1.96.",
      filterToolbarAria: "Filter dishes by category",
      dualCurrencyFootnote:
        "Every price reads as euro | leva. Seasonal specials are priced at service — please ask.",
      categories: {
        all: "Full menu",
        pizza: "Pizza",
        cheburek: "Chebureks",
        fried: "Fried food",
        pancakes: "Pancakes",
        salads: "Salads",
      },
      weight: "Weight",
      seasonal: "Seasonal pricing",
      seasonalHint: "Ask in venue or phone ahead",
      ingredients: "Ingredients",
    },
    venue: {
      badgeOpenAria: "Restaurant is open right now",
      badgeClosedAria: "Restaurant is closed right now",
      openNow: "Open now",
      closed: "Closed",
      openSubtitle: "Until 20:00 · Sofia (Bulgaria) local time · EET / EEST",
      closedNextPrefix: "Opens:",
      timezoneNote:
        "Status follows Europe/Sofia (UTC+2 in winter, UTC+3 in summer — Bulgaria official time).",
      mapIframeTitle: "Map: Mistral Pizza, ul. Bor 2, Sveti Vlas",
    },
    footer: {
      title: "Visit us by the marina",
      intro: "We’re at ul. Bor 2 — spot us on the map and call ahead for takeaway.",
      hoursEyebrow: "Opening hours",
      hoursSummary: "Tue–Sun · 12:00–20:00 · closed on Mondays",
      addressLabel: "Address",
      addressStreet: "ul. Bor 2",
      addressCity: "8256 Sveti Vlas, Bulgaria",
      phoneDisplay: "+359 88 426 4643",
      openDirections: "Directions in Google Maps",
      copyright: "© Mistral Pizza · Sveti Vlas",
    },
  },
  bg: {
    meta: {
      title: "Mistral Pizza — Свети Влас",
      description:
        "Прясна пица край морето в Свети Влас, България. Украинско гостоприемство и лек полъх на Черно море.",
    },
    a11y: {
      skipToContent: "Към основното съдържание",
      langNavLabel: "Език на сайта",
      langToggleGroup: "Изберете език",
      siteSections: "Раздели на сайта",
    },
    nav: {
      home: "Начало",
      menu: "Меню",
      contact: "Контакт",
    },
    header: {
      tagline: "Свети Влас • България",
      langLabelShort: "Език",
    },
    hero: {
      kicker: "Пицария край морето",
      title: "Прясно от фурната — до морето на една ръка разстояние.",
      subtitle:
        "Топло гостоприемство и лек морски бриз в Свети Влас. Вижте най-важното бързо от телефона си и поръчайте с обаждане.",
      ctaPrimary: "Разгледай менюто",
      ctaSecondary: "Контакт",
      note: "Отворени вт–нд · 12:00–20:00 (местно време, EET/EEST) · Понеделник е почивен ден",
      visualCaption: "От фурна до масата — любимият ви вкус",
      visualSupport:
        "Естествени продукти и честни порции — поръчвайте с бързо обаждане.",
    },
    menu: {
      eyebrow: "Свети Влас",
      title: "Меню Mistral Pizza",
      intro:
        "Пещна пица, чебуреци и топли ястия — описани продукти и тегло за всяко ястие. Цените са в евро и лева като на място; ако няма фиксирана двойка от менюто, използва се EUR × 1,96 към лев.",
      filterToolbarAria: "Филтър по категория",
      dualCurrencyFootnote:
        "Всяка цена е в двоен запис: € | lv. За сезонни предложения попитайте персонала.",
      categories: {
        all: "Цяло меню",
        pizza: "Пица",
        cheburek: "Чебуреци",
        fried: "Пържени",
        pancakes: "Палачинки",
        salads: "Салати",
      },
      weight: "Тегло",
      seasonal: "Сезонна цена",
      seasonalHint: "Попитайте в ресторанта или по телефон",
      ingredients: "Състав",
    },
    venue: {
      badgeOpenAria: "Ресторантът е отворен",
      badgeClosedAria: "Ресторантът е затворен",
      openNow: "Отворени сме",
      closed: "Затворено",
      openSubtitle: "До 20:00 · местно време София (EET / EEST)",
      closedNextPrefix: "Отваряме:",
      timezoneNote:
        "Статусът следва Europe/Sofia (зимно UTC+2, лятно UTC+3 — официалното време в България).",
      mapIframeTitle: "Карта: Mistral Pizza, ул. Бор 2, Свети Влас",
    },
    footer: {
      title: "Заповядайте в ресторанта",
      intro: "ул. Бор 2 в Свети Влас — вижте картата и ни позвънете за поръчка.",
      hoursEyebrow: "Работно време",
      hoursSummary: "Вторник–неделя: 12:00–20:00 · понеделник — почивен ден",
      addressLabel: "Адрес",
      addressStreet: "ул. Бор 2",
      addressCity: "8256 Свети Влас, България",
      phoneDisplay: "+359 88 426 4643",
      openDirections: "Маршрут в Google Maps",
      copyright: "© Mistral Pizza · Свети Влас",
    },
  },
};

const VENUE_TIMEZONE = "Europe/Sofia";
const OPEN_START_MINS = 12 * 60;
const OPEN_END_MINS = 20 * 60;

const WEEKDAY_SHORT_EN = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

function getSofiaWallClock(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: VENUE_TIMEZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = formatter.formatToParts(date);
  const map = {};
  parts.forEach((p) => {
    if (p.type !== "literal") map[p.type] = p.value;
  });
  const dow = WEEKDAY_SHORT_EN[map.weekday];
  const hour = parseInt(map.hour, 10);
  const minute = parseInt(map.minute, 10);
  if (Number.isNaN(hour) || Number.isNaN(minute)) {
    return { dow: 1, mins: 0, hour: 0, minute: 0 };
  }
  return { dow, hour, minute, mins: hour * 60 + minute };
}

function isVenueOpenSofia(s) {
  if (s.dow === 1) return false;
  return s.mins >= OPEN_START_MINS && s.mins < OPEN_END_MINS;
}

function findNextOpenInstantUtc(fromDate) {
  let tMs = fromDate.getTime();
  const max = fromDate.getTime() + 8 * 86400000;
  tMs += 60000;
  while (tMs <= max) {
    if (isVenueOpenSofia(getSofiaWallClock(new Date(tMs)))) return new Date(tMs);
    tMs += 60000;
  }
  return null;
}

function intlLocaleForLang(lang) {
  if (lang === "uk") return "uk-UA";
  if (lang === "bg") return "bg-BG";
  return "en-GB";
}

function formatOpeningInstant(locale, instant) {
  return new Intl.DateTimeFormat(locale, {
    timeZone: VENUE_TIMEZONE,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(instant);
}

function buildVenueStatusEl(pack, lang, variant) {
  const now = new Date();
  const open = isVenueOpenSofia(getSofiaWallClock(now));
  const locale = intlLocaleForLang(lang);

  const wrap = document.createElement("div");
  wrap.setAttribute("role", "group");

  const card = document.createElement("div");
  card.className =
    variant === "dark"
      ? "max-w-xl rounded-2xl border border-white/20 bg-white/5 px-4 py-3.5 backdrop-blur-sm sm:px-5 sm:py-4"
      : "max-w-xl rounded-2xl border border-mistral-walnut/15 bg-white/95 px-4 py-3.5 shadow-md shadow-mistral-ink/8 backdrop-blur-sm sm:px-5 sm:py-4";

  const row = document.createElement("div");
  row.className = "flex items-start gap-3";

  const dot = document.createElement("span");
  dot.setAttribute("aria-hidden", "true");
  dot.className = open
    ? "mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-mistral-green shadow-[0_0_12px_rgba(45,106,79,0.95)] animate-pulse"
    : "mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-red-500/95";

  const textCol = document.createElement("div");
  textCol.className = "min-w-0 flex-1 space-y-1";

  const h = document.createElement("p");
  h.className =
    variant === "dark"
      ? "font-display text-base font-bold text-white sm:text-lg"
      : "font-display text-base font-bold text-mistral-ink sm:text-lg";
  h.textContent = open ? pack.venue.openNow : pack.venue.closed;

  const sub = document.createElement("p");
  sub.className =
    variant === "dark"
      ? "text-xs leading-snug text-mistral-mint/90 sm:text-sm"
      : "text-xs leading-snug text-mistral-cocoa sm:text-sm";
  if (open) {
    sub.textContent = pack.venue.openSubtitle;
  } else {
    const next = findNextOpenInstantUtc(now);
    sub.textContent = next ? `${pack.venue.closedNextPrefix} ${formatOpeningInstant(locale, next)}` : "";
  }

  row.appendChild(dot);
  textCol.appendChild(h);
  textCol.appendChild(sub);
  row.appendChild(textCol);
  card.appendChild(row);

  const tz = document.createElement("p");
  tz.className =
    variant === "dark"
      ? "mt-2 text-[11px] leading-relaxed text-white/55"
      : "mt-2 text-[11px] leading-relaxed text-mistral-cocoa/80";
  tz.textContent = pack.venue.timezoneNote;

  wrap.setAttribute("aria-label", open ? pack.venue.badgeOpenAria : pack.venue.badgeClosedAria);
  card.appendChild(tz);
  wrap.appendChild(card);
  return wrap;
}

function updateVenueStatus() {
  const pack = SITE_CONTENT[currentLang];
  if (!pack) return;
  const hero = document.getElementById("hero-status-slot");
  const footer = document.getElementById("footer-status-slot");
  if (hero) {
    hero.innerHTML = "";
    hero.appendChild(buildVenueStatusEl(pack, currentLang, "light"));
  }
  if (footer) {
    footer.innerHTML = "";
    footer.appendChild(buildVenueStatusEl(pack, currentLang, "dark"));
  }
}

/**
 * Євро + лева. Якщо lv задано — показуємо як у прайсі/фото, інакше EUR × EUR_TO_BGN.
 */
function formatDualPriceEUR_LV(eur, lvFixed) {
  if (eur == null || Number.isNaN(eur)) return null;
  const eStr = Number(eur).toFixed(2);
  const lvNum = lvFixed != null && !Number.isNaN(lvFixed) ? lvFixed : Math.round(eur * EUR_TO_BGN * 100) / 100;
  const lvStr = Number(lvNum).toFixed(2);
  return `€${eStr}\u00A0|\u00A0${lvStr}\u00A0lv`;
}

/** Каталог страв — назви й склад тримаємо трьома мовами. */
const MENU_ITEMS = [
  {
    category: "pizza",
    weightG: 380,
    eur: 9.5,
    lv: 18.5,
    i18n: {
      uk: { name: "Маргарита", ingredients: "томатний соус, моцарела, базилік." },
      en: { name: "Margherita", ingredients: "Tomato sauce, mozzarella, basil." },
      bg: { name: "Маргарита", ingredients: "доматен сос, моцарела, босилек." },
    },
  },
  {
    category: "pizza",
    weightG: 420,
    eur: 13.5,
    lv: 26.5,
    i18n: {
      uk: {
        name: "Прошуто з персиками",
        ingredients: "прошуто крудо, моцарела, персик, рукола, медова глазур.",
      },
      en: {
        name: "Prosciutto with peaches",
        ingredients: "Prosciutto crudo, mozzarella, fresh peach, arugula, honey glaze.",
      },
      bg: {
        name: "Прокшуто с праскови",
        ingredients: "крудо прошуто, моцарела, праскова, рукола, медена глазура.",
      },
    },
  },
  {
    category: "pizza",
    weightG: 410,
    eur: 14.0,
    lv: 27.5,
    i18n: {
      uk: {
        name: "Груша з горгонзолою й медом",
        ingredients: "горгонзола ДОП, груша, волоські горіхи, мед, моцарела.",
      },
      en: {
        name: "Pear, Gorgonzola & honey",
        ingredients: "Gorgonzola DOP, pear, walnuts, honey, mozzarella.",
      },
      bg: {
        name: "Круша, горгонзола и мед",
        ingredients: "горгонзола DOP, круша, орехи, мед, моцарела.",
      },
    },
  },
  {
    category: "pizza",
    weightG: 400,
    eur: 11.5,
    lv: 22.54,
    i18n: {
      uk: { name: "Чотири сири", ingredients: "моцарела, горгонзола, пармезан, рікота." },
      en: { name: "Four cheese", ingredients: "Mozzarella, Gorgonzola, Parmesan, ricotta." },
      bg: { name: "Четири сирена", ingredients: "моцарела, горгонзола, пармезан, рикота." },
    },
  },
  {
    category: "pizza",
    weightG: 420,
    eur: 11.0,
    lv: 21.56,
    i18n: {
      uk: { name: "Пепероні", ingredients: "пепероні, моцарела, томатний соус." },
      en: { name: "Pepperoni", ingredients: "Pepperoni, mozzarella, tomato sauce." },
      bg: { name: "Пеперони", ingredients: "пеперони, моцарела, доматен сос." },
    },
  },
  {
    category: "pizza",
    weightG: 390,
    eur: 12.5,
    lv: 24.5,
    i18n: {
      uk: { name: "Гриби та трюфель", ingredients: "лісові гриби, олія трюфеля, моцарела, чебрець." },
      en: { name: "Mushroom & truffle", ingredients: "Forest mushrooms, truffle oil, mozzarella, thyme." },
      bg: { name: "Гъби и трюфел", ingredients: "горски гъби, трюфелово масло, моцарела, мащерка." },
    },
  },
  {
    category: "pizza",
    weightG: 410,
    eur: 12.0,
    lv: 23.52,
    i18n: {
      uk: { name: "Діабло", ingredients: "гостра салямі, халапеньйо, чилі-соус, моцарела." },
      en: { name: "Diablo", ingredients: "Spicy salami, jalapeño, chilli sauce, mozzarella." },
      bg: { name: "Диабло", ingredients: "пикантна салам, халапеньо, чили сос, моцарела." },
    },
  },
  {
    category: "pizza",
    weightG: 430,
    eur: 12.5,
    lv: 24.5,
    i18n: {
      uk: {
        name: "Капрічоза",
        ingredients: "шинка, гриби, артишок, оливки, моцарела.",
      },
      en: { name: "Capricciosa", ingredients: "Ham, mushrooms, artichoke, olives, mozzarella." },
      bg: { name: "Капричоза", ingredients: "шунка, гъби, артишок, маслини, моцарела." },
    },
  },
  {
    category: "pizza",
    weightG: 440,
    eur: 13.0,
    lv: 25.48,
    i18n: {
      uk: {
        name: "BBQ курка",
        ingredients: "курка з гриля, BBQ-соус, червона цибуля, моцарела.",
      },
      en: { name: "BBQ chicken", ingredients: "Grilled chicken, BBQ sauce, red onion, mozzarella." },
      bg: { name: "BBQ пиле", ingredients: "печено пиле, BBQ сос, червен лук, моцарела." },
    },
  },
  {
    category: "pizza",
    weightG: 450,
    eur: 15.5,
    lv: 30.38,
    i18n: {
      uk: { name: "Морепродукти", ingredients: "креветки, мідії, томатний соус, часник, моцарела." },
      en: { name: "Seafood", ingredients: "Shrimp, mussels, tomato sauce, garlic, mozzarella." },
      bg: { name: "Морски дарове", ingredients: "скариди, миди, доматен сос, чесън, моцарела." },
    },
  },
  {
    category: "pizza",
    weightG: 380,
    eur: 11.5,
    lv: 22.54,
    i18n: {
      uk: {
        name: "Вегетаріанська",
        ingredients: "цукіні, перець, баклажан, чері, песто, моцарела.",
      },
      en: {
        name: "Vegetarian",
        ingredients: "Grilled zucchini, bell pepper, eggplant, cherry tomato, pesto, mozzarella.",
      },
      bg: {
        name: "Вегетарианска",
        ingredients: "тиквичка, чушка, патладжан, чери, песто, моцарела.",
      },
    },
  },
  {
    category: "pizza",
    weightG: 410,
    eur: 11.0,
    lv: 21.56,
    i18n: {
      uk: { name: "Гавайська", ingredients: "шинка, ананас, моцарела, томатний соус." },
      en: { name: "Hawaii", ingredients: "Ham, pineapple, mozzarella, tomato sauce." },
      bg: { name: "Хавайска", ingredients: "шунка, ананас, моцарела, доматен сос." },
    },
  },
  {
    category: "pizza",
    weightG: 390,
    eur: 12.0,
    lv: 23.52,
    i18n: {
      uk: { name: "Грецька", ingredients: "фета, оливки, томат, червона цибуля, орегано, моцарела." },
      en: { name: "Greek", ingredients: "Feta, olives, tomato, red onion, oregano, mozzarella." },
      bg: { name: "Гръцка", ingredients: "сирене фета, маслини, домат, червен лук, риган, моцарела." },
    },
  },
  {
    category: "pizza",
    weightG: 400,
    eur: 14.5,
    lv: 28.42,
    i18n: {
      uk: {
        name: "З копченим лососем",
        ingredients: "лосось, вершковий сир, каперси, кріп, червона цибуля.",
      },
      en: {
        name: "Smoked salmon",
        ingredients: "Smoked salmon, cream cheese, capers, dill, red onion.",
      },
      bg: {
        name: "С пушена сьомга",
        ingredients: "пушена сьомга, крема сирене, каперси, копър, червен лук.",
      },
    },
  },
  {
    category: "pizza",
    weightG: 380,
    eur: 13.5,
    lv: 26.46,
    i18n: {
      uk: {
        name: "Трюфель б’янка",
        ingredients: "білий соус, трюфельна паста, гриби, пармезан.",
      },
      en: { name: "Truffle bianca", ingredients: "White sauce, truffle paste, mushrooms, Parmesan." },
      bg: { name: "Трюфел бянка", ingredients: "бял сос, трюфелна паста, гъби, пармезан." },
    },
  },
  {
    category: "pizza",
    weightG: 480,
    eur: 14.5,
    lv: 28.42,
    i18n: {
      uk: {
        name: "М’ясне свято",
        ingredients: "пепероні, бекон, яловичий фарш, ковбаски, моцарела.",
      },
      en: { name: "Meat feast", ingredients: "Pepperoni, bacon, ground beef, sausage, mozzarella." },
      bg: { name: "Месна пица", ingredients: "пеперони, бекон, телешка кайма, наденица, моцарела." },
    },
  },
  {
    category: "pizza",
    weightG: 380,
    eur: 15.0,
    lv: 29.4,
    i18n: {
      uk: {
        name: "Сад з бурратою",
        ingredients: "буррата, чері, базилікова олія, прошуто.",
      },
      en: { name: "Burrata garden", ingredients: "Burrata, cherry tomato, basil oil, prosciutto." },
      bg: { name: "Бурата градина", ingredients: "бурата, чери домати, босилеково масло, прокшуто." },
    },
  },
  {
    category: "pizza",
    weightG: null,
    seasonal: true,
    lv: null,
    eur: null,
    i18n: {
      uk: {
        name: "Mistral Special",
        ingredients: "фірмовий рецепт, сезонні інгредієнти — вибір шефа.",
      },
      en: {
        name: "Mistral Special",
        ingredients: "House recipe, seasonal ingredients — chef’s selection.",
      },
      bg: {
        name: "Mistral Special",
        ingredients: "домашна рецептура, сезонни продукти — избор на готвача.",
      },
    },
  },
  {
    category: "cheburek",
    weightG: 220,
    eur: 5.9,
    lv: 11.56,
    i18n: {
      uk: { name: "Чебурек м’ясний", ingredients: "фарш яловичина та свинина, цибуля, зелень." },
      en: { name: "Meat cheburek", ingredients: "Seasoned beef & pork mince, onion, herbs." },
      bg: { name: "Месен чебурек", ingredients: "телешка и свинска кайма, лук, подправки." },
    },
  },
  {
    category: "cheburek",
    weightG: 200,
    eur: 5.5,
    lv: 10.78,
    i18n: {
      uk: { name: "Чебурек сирний", ingredients: "сулугуні, кріп." },
      en: { name: "Cheese cheburek", ingredients: "Sulguni cheese, dill." },
      bg: { name: "Сирен чебурек", ingredients: "сулугуни, копър." },
    },
  },
  {
    category: "cheburek",
    weightG: 210,
    eur: 5.9,
    lv: 11.56,
    i18n: {
      uk: { name: "Чебурек з куркою", ingredients: "курячий фарш, часник, паприка." },
      en: { name: "Chicken cheburek", ingredients: "Minced chicken, garlic, paprika." },
      bg: { name: "Пилешки чебурек", ingredients: "пилешка кайма, чесън, червен пипер." },
    },
  },
  {
    category: "fried",
    weightG: 200,
    eur: 4.5,
    lv: 8.82,
    i18n: {
      uk: { name: "Картопля фрі", ingredients: "морська сіль; за бажання — розмарин." },
      en: { name: "French fries", ingredients: "Sea salt; rosemary on request." },
      bg: { name: "Пържени картофи", ingredients: "морска сол; по желание розмарин." },
    },
  },
  {
    category: "fried",
    weightG: 250,
    eur: 7.5,
    lv: 14.7,
    i18n: {
      uk: { name: "Курячі нагетси", ingredients: "хрустка паніровка, соуси на вибір." },
      en: { name: "Chicken nuggets", ingredients: "Crispy batter, dipping sauces." },
      bg: { name: "Пилешки нагетс", ingredients: "хрупкава панировка, сосове по избор." },
    },
  },
  {
    category: "pancakes",
    weightG: 180,
    eur: 6.5,
    lv: 12.74,
    i18n: {
      uk: { name: "Блин: Nutella та банан", ingredients: "солодкий блин, Nutella, банан." },
      en: { name: "Pancake: Nutella & banana", ingredients: "Sweet pancake, Nutella, banana." },
      bg: { name: "Палачинка: Nutella и банан", ingredients: "сладка палачинка, Nutella, банан." },
    },
  },
  {
    category: "pancakes",
    weightG: 180,
    eur: 6.9,
    lv: 13.52,
    i18n: {
      uk: { name: "Блин: полуниця та вершки", ingredients: "солодкий блин, полуниця, вершки." },
      en: { name: "Pancake: strawberry & cream", ingredients: "Sweet pancake, strawberry, cream." },
      bg: { name: "Палачинка: ягоди и сметана", ingredients: "сладка палачинка, ягоди, сметана." },
    },
  },
  {
    category: "pancakes",
    weightG: 180,
    eur: 6.5,
    lv: 12.74,
    i18n: {
      uk: { name: "Блин: яблуко та кориця", ingredients: "солодкий блин, яблуко, кориця." },
      en: { name: "Pancake: apple & cinnamon", ingredients: "Sweet pancake, apple, cinnamon." },
      bg: { name: "Палачинка: ябълка и канела", ingredients: "сладка палачинка, ябълка, канела." },
    },
  },
  {
    category: "pancakes",
    weightG: 180,
    eur: 6.5,
    lv: 12.74,
    i18n: {
      uk: { name: "Блин: мед та горіхи", ingredients: "солодкий блин, мед, волоські горіхи." },
      en: { name: "Pancake: honey & walnut", ingredients: "Sweet pancake, honey, walnuts." },
      bg: { name: "Палачинка: мед и орехи", ingredients: "сладка палачинка, мед, орехи." },
    },
  },
  {
    category: "pancakes",
    weightG: 180,
    eur: 7.5,
    lv: 14.7,
    i18n: {
      uk: { name: "Блин: гриби та сир", ingredients: "солоний блин, гриби, сир." },
      en: { name: "Pancake: mushroom & cheese", ingredients: "Savory pancake, mushrooms, cheese." },
      bg: { name: "Палачинка: гъби и сирене", ingredients: "солена палачинка, гъби, сирене." },
    },
  },
  {
    category: "pancakes",
    weightG: 180,
    eur: 7.9,
    lv: 15.48,
    i18n: {
      uk: { name: "Блин: курка та зелень", ingredients: "солоний блин, курка, зелень." },
      en: { name: "Pancake: chicken & herbs", ingredients: "Savory pancake, chicken, herbs." },
      bg: { name: "Палачинка: пиле и билки", ingredients: "солена палачинка, пиле, билки." },
    },
  },
  {
    category: "pancakes",
    weightG: 180,
    eur: 9.5,
    lv: 18.62,
    i18n: {
      uk: { name: "Блин: лосось та вершковий сир", ingredients: "солоний блин, лосось, крем-сир." },
      en: { name: "Pancake: salmon & cream cheese", ingredients: "Savory pancake, salmon, cream cheese." },
      bg: { name: "Палачинка: сьомга и крема сирене", ingredients: "солена палачинка, сьомга, крема сирене." },
    },
  },
  {
    category: "salads",
    weightG: 280,
    eur: 9.9,
    lv: 19.4,
    i18n: {
      uk: { name: "Салат Цезар", ingredients: "ромен, грінки, пармезан, соус Цезар." },
      en: { name: "Caesar salad", ingredients: "Romaine, croutons, Parmesan, Caesar dressing." },
      bg: { name: "Салата Цезар", ingredients: "ромен, крутони, пармезан, дресинг Цезар." },
    },
  },
  {
    category: "salads",
    weightG: 260,
    eur: 9.5,
    lv: 18.62,
    i18n: {
      uk: { name: "Грецький салат", ingredients: "томат, огірок, фета, оливки, червона цибуля." },
      en: { name: "Greek salad", ingredients: "Tomato, cucumber, feta, olives, red onion." },
      bg: { name: "Гръцка салата", ingredients: "домат, краставица, сирене, маслини, червен лук." },
    },
  },
  {
    category: "salads",
    weightG: 240,
    eur: 10.5,
    lv: 20.58,
    i18n: {
      uk: {
        name: "Салат Mistral Garden",
        ingredients: "сезонне листя, чері, авокадо, лимонний дресинг.",
      },
      en: {
        name: "Mistral Garden salad",
        ingredients: "Seasonal leaves, cherry tomato, avocado, lemon dressing.",
      },
      bg: {
        name: "Salata Mistral Garden",
        ingredients: "сезонни зелени, чери, авокадо, лимонов дресинг.",
      },
    },
  },
  {
    category: "salads",
    weightG: 300,
    eur: 11.5,
    lv: 22.54,
    i18n: {
      uk: {
        name: "Теплий салат з куркою",
        ingredients: "курка з гриля, рукола, чері, бальзамік.",
      },
      en: { name: "Warm chicken salad", ingredients: "Grilled chicken, arugula, cherry tomato, balsamic." },
      bg: {
        name: "Топла салата с пиле",
        ingredients: "печено пиле, рукола, чери домати, балсамико.",
      },
    },
  },
];

const MENU_CATEGORY_ORDER = ["all", "pizza", "cheburek", "fried", "pancakes", "salads"];

const SUPPORTED_LANGS = ["uk", "en", "bg"];

let currentLang = detectInitialLang();
let menuCategoryFilter = "all";
let menuFiltersDelegated = false;

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

function detectInitialLang() {
  const hashMatch = window.location.hash.match(/lang=(uk|en|bg)/i);
  if (hashMatch) {
    const code = hashMatch[1].toLowerCase();
    if (SUPPORTED_LANGS.includes(code)) {
      localStorage.setItem(STORAGE_KEY, code);
      return code;
    }
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;

  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
  const base = String(nav).toLowerCase().split("-")[0];
  if (base === "uk") return "uk";
  if (base === "bg") return "bg";
  return "en";
}

function setDocumentLang(lang) {
  const map = { uk: "uk", en: "en", bg: "bg" };
  document.documentElement.lang = map[lang] || "en";
}

function updateMeta(lang) {
  const pack = SITE_CONTENT[lang];
  if (!pack) return;
  document.title = pack.meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", pack.meta.description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", pack.meta.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", pack.meta.description);

  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute("content", pack.meta.title);

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute("content", pack.meta.description);

  const localeMap = { uk: "uk_UA", en: "en_GB", bg: "bg_BG" };
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute("content", localeMap[lang] || "en_GB");

  const mapFrame = document.getElementById("map-iframe");
  if (mapFrame && pack.venue && pack.venue.mapIframeTitle)
    mapFrame.setAttribute("title", pack.venue.mapIframeTitle);
}

function bindSiteSectionsNavAria(pack) {
  const nav = document.querySelector("nav[data-i18n-site-nav]");
  if (!nav || !pack) return;
  const key = nav.getAttribute("data-i18n-site-nav");
  const value = key ? getByPath(pack, key) : null;
  if (typeof value === "string") nav.setAttribute("aria-label", value);
}

function formatWeightLabel(lang, grams) {
  if (grams == null || Number.isNaN(grams)) return "—";
  if (lang === "en") return `${grams} g`;
  return `${grams} г`;
}

function createMenuCard(pack, item, lang) {
  const copy = item.i18n[lang] || item.i18n.en;
  const article = document.createElement("article");
  article.className =
    "menu-card-ui group flex transform-gpu flex-col overflow-hidden rounded-2xl border border-mistral-walnut/10 bg-white shadow-[0_12px_40px_-12px_rgba(7,9,12,0.18)] ring-1 ring-black/[0.03] transition-[box-shadow,transform,border-color,ring-color] duration-400 ease-out will-change-transform hover:-translate-y-1 hover:border-mistral-green/35 hover:shadow-[0_24px_55px_-18px_rgba(7,9,12,0.38)] hover:ring-mistral-herb/45 sm:rounded-3xl";
  article.setAttribute("role", "listitem");

  const hero = document.createElement("div");
  hero.className =
    "relative h-32 shrink-0 bg-gradient-to-br from-mistral-mint via-mistral-herb/25 to-mistral-wood/60 transition-opacity duration-400 ease-out group-hover:opacity-[0.97] sm:h-36";
  const stripe = document.createElement("div");
  stripe.className =
    "absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-mistral-green via-mistral-herb to-mistral-pine transition-transform duration-500 ease-out group-hover:scale-x-[1.04]";
  hero.appendChild(stripe);
  const glow = document.createElement("div");
  glow.className =
    "pointer-events-none absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-mistral-green/20 blur-2xl transition-all duration-500 ease-out group-hover:-right-5 group-hover:scale-[1.08] group-hover:bg-mistral-green/38";
  hero.appendChild(glow);
  article.appendChild(hero);

  const body = document.createElement("div");
  body.className =
    "flex flex-1 flex-col p-5 transition-[transform] duration-400 ease-out sm:p-6 sm:group-hover:translate-y-[1px]";

  const h3 = document.createElement("h3");
  h3.className =
    "font-display text-lg font-bold leading-snug text-mistral-ink transition-colors duration-400 ease-out group-hover:text-mistral-green sm:text-xl";
  h3.textContent = copy.name;

  const ingLabel = document.createElement("p");
  ingLabel.className = "mt-1 text-[10px] font-semibold uppercase tracking-wider text-mistral-green/90";
  ingLabel.textContent = pack.menu.ingredients;

  const ing = document.createElement("p");
  ing.className =
    "menu-card-ingredients mt-1 line-clamp-4 text-sm leading-relaxed text-mistral-cocoa transition-colors duration-400 ease-out group-hover:text-mistral-walnut sm:line-clamp-5";
  ing.textContent = copy.ingredients;

  const row = document.createElement("div");
  row.className =
    "mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-mistral-wood/80 pt-4";

  const w = document.createElement("div");
  w.className = "min-w-0";
  const wk = document.createElement("p");
  wk.className = "text-[10px] font-semibold uppercase tracking-wider text-mistral-cocoa/80";
  wk.textContent = pack.menu.weight;
  const wv = document.createElement("p");
  wv.className = "mt-0.5 text-sm font-semibold text-mistral-walnut";
  wv.textContent = formatWeightLabel(lang, item.weightG);
  w.appendChild(wk);
  w.appendChild(wv);

  const priceCol = document.createElement("div");
  priceCol.className = "text-right";
  if (item.seasonal) {
    const p1 = document.createElement("p");
    p1.className = "text-sm font-bold text-mistral-green";
    p1.textContent = pack.menu.seasonal;
    const p2 = document.createElement("p");
    p2.className = "mt-0.5 text-xs text-mistral-cocoa";
    p2.textContent = pack.menu.seasonalHint;
    priceCol.appendChild(p1);
    priceCol.appendChild(p2);
  } else {
    const p = document.createElement("p");
    p.className = "font-mono text-[0.8125rem] font-bold tabular-nums tracking-tight text-mistral-green sm:text-sm";
    p.textContent = formatDualPriceEUR_LV(item.eur, item.lv);
    priceCol.appendChild(p);
  }

  row.appendChild(w);
  row.appendChild(priceCol);

  body.appendChild(h3);
  body.appendChild(ingLabel);
  body.appendChild(ing);
  body.appendChild(row);
  article.appendChild(body);

  return article;
}

function renderMenuFilterToolbar(pack) {
  const host = document.getElementById("menu-filters");
  if (!host) return;

  const aria = getByPath(pack, "menu.filterToolbarAria");
  if (typeof aria === "string") host.setAttribute("aria-label", aria);

  host.innerHTML = "";
  MENU_CATEGORY_ORDER.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.cat = cat;
    const active = menuCategoryFilter === cat;
    btn.setAttribute("aria-pressed", active ? "true" : "false");
    const label = getByPath(pack, `menu.categories.${cat}`) || cat;
    btn.textContent = label;
    btn.className = [
      "snap-start shrink-0 rounded-full border px-4 py-2.5 text-left text-sm font-semibold outline-none transition-[transform,colors,box-shadow,border-color] duration-400 ease-out",
      "hover:scale-[1.03] active:scale-[0.98]",
      "focus-visible:ring-2 focus-visible:ring-mistral-green focus-visible:ring-offset-2 focus-visible:ring-offset-mistral-latte",
      active
        ? "border-mistral-green bg-mistral-green text-white shadow-md shadow-mistral-ink/10"
        : "border-mistral-walnut/15 bg-white/90 text-mistral-walnut hover:border-mistral-green/40 hover:text-mistral-green",
    ].join(" ");
    host.appendChild(btn);
  });

  if (!menuFiltersDelegated) {
    menuFiltersDelegated = true;
    host.addEventListener("click", (e) => {
      const t = e.target.closest("[data-cat]");
      if (!t) return;
      menuCategoryFilter = t.getAttribute("data-cat") || "all";
      renderMenu();
    });
  }
}

function renderMenuGrid(pack, lang) {
  const grid = document.getElementById("menu-grid");
  if (!grid) return;

  grid.innerHTML = "";
  const items = MENU_ITEMS.filter(
    (it) => menuCategoryFilter === "all" || it.category === menuCategoryFilter
  );

  items.forEach((item) => {
    grid.appendChild(createMenuCard(pack, item, lang));
  });

  let foot = document.getElementById("menu-price-footnote");
  if (!foot) {
    foot = document.createElement("p");
    foot.id = "menu-price-footnote";
    foot.className =
      "mt-6 max-w-3xl mx-auto text-center text-xs leading-relaxed text-mistral-cocoa/90 sm:text-sm";
    grid.parentElement.appendChild(foot);
  }
  foot.textContent = getByPath(pack, "menu.dualCurrencyFootnote") || "";
}

function renderMenu() {
  const pack = SITE_CONTENT[currentLang];
  if (!pack) return;
  renderMenuFilterToolbar(pack);
  renderMenuGrid(pack, currentLang);
}

function applyI18n(lang) {
  currentLang = lang;
  const pack = SITE_CONTENT[lang];
  if (!pack) return;

  setDocumentLang(lang);
  updateMeta(lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getByPath(pack, key);
    if (typeof value === "string") el.textContent = value;
  });

  const nav = document.querySelector("nav[data-i18n-nav-label]");
  if (nav) {
    const key = nav.getAttribute("data-i18n-nav-label");
    const value = getByPath(pack, key);
    if (typeof value === "string") nav.setAttribute("aria-label", value);
  }

  const toggleGroup = document.querySelector("[data-i18n-aria]");
  if (toggleGroup) {
    const key = toggleGroup.getAttribute("data-i18n-aria");
    const value = getByPath(pack, key);
    if (typeof value === "string") toggleGroup.setAttribute("aria-label", value);
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const code = btn.getAttribute("data-lang");
    const active = code === lang;
    btn.setAttribute("aria-pressed", active ? "true" : "false");
    btn.classList.toggle("bg-white", active);
    btn.classList.toggle("text-mistral-green", active);
    btn.classList.toggle("text-mistral-walnut", !active);
    btn.classList.toggle("shadow-sm", active);
    btn.classList.toggle("ring-1", active);
    btn.classList.toggle("ring-mistral-herb/40", active);
  });

  renderMenu();
  bindSiteSectionsNavAria(pack);
  updateVenueStatus();
}

function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  localStorage.setItem(STORAGE_KEY, lang);
  try {
    const base = `${window.location.pathname}${window.location.search}`;
    history.replaceState(null, "", `${base}#lang=${lang}`);
  } catch (_) {
    /* file:// або обмежений контекст */
  }
  applyI18n(lang);
}

function initLangSwitcher() {
  const initial = detectInitialLang();
  applyI18n(initial);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLang(lang);
    });
  });

  window.addEventListener("hashchange", () => {
    const m = window.location.hash.match(/lang=(uk|en|bg)/i);
    if (!m) return;
    const code = m[1].toLowerCase();
    if (!SUPPORTED_LANGS.includes(code) || code === currentLang) return;
    localStorage.setItem(STORAGE_KEY, code);
    applyI18n(code);
  });

  setInterval(updateVenueStatus, 60000);
}

initLangSwitcher();
