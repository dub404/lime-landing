import { getCookie } from './cookie.js';
export const languages = {
  ru: 'Русский',
  en: 'English',
  kk: 'қазақ',
  ro: 'română',
  be: 'Беларуский',
  de: 'Deutsche',
  hy: 'հայերէն',
  fr: 'Français',
  tr: 'Türk',
  it: 'Italiano',
  uk: 'Український',
  ar: 'العربية',
  az: 'Azərbaycan',
};

const language = getCookie('language') ?? 'ru';

$(function () {
  i18next
    .init({
        debug: true,
        fallbackLng: language,
        resources: {
          ru: {
            translation: {
              header: {
                logo: "Международная онлайн-платформа авторских курсов",
                navbar: {
                  courses: "Курсы",
                  authors: "Авторы",
                  about_platform: "О платформе",
                  partners_program: "Партнерская программа",
                  successful_stories: "Истории успеха",
                  own_course: "Свой курс",
                  answers: "Ответы на вопросы"
                }
              },
              button: {
                sign_in: "Войти",
                sign_up: "Регистрация",
                register: "Зарегистрируйтесь и узнайте подробнее",
                start_free: "Начать бесплатно",
                find_out_more: "Узнать подробнее",
                download: "Скачать"
              },
              main: {
                title: "Современное <br/> образование <br/> <span>без</span> ограничений",
                description: "с возможностью получения дохода",
                list_info: {
                  any_age: "Для любого <br> возраста",
                  unlimited_access: "Неограниченный <br> доступ",
                  areas_of_study: "8 направлений <br> обучения"
                }
              },
              become: {
                title: "Стань современным <br> и востребованным <br><span class=\"text-stroke\">специалистом</span>",
                description: "Приглашаем в <span>уникальное сообщество профессионалов своего дела, начинающих специалистов и просто увлеченных людей</span><br />из разных сфер деятельности по всему миру",
                main: {
                  intro: "В «Lime Academy» <span>можно приобрести актуальные знания и необходимые навыки</span> для освоения новых интернет-профессий и успешной реализации своего потенциала",
                  info: "Мы <span>объединили теорию и практику в систему,</span> благодаря которой пользователи нашей платформы начинают зарабатывать уже во время обучения!",
                  mission: "Наша миссия - объединить людей </strong> всего мира в партнёрское сообщество, создать условия для раскрытия их творческого потенциала и научить каждого человека зарабатывать с помощью современных технологий"
                },
                about: {
                  programs: "<div class=\"become-circle__title\">80<span>+</span></div> <div class=\"become-circle__text\">обучающих программ</div>",
                  trainers: "<div class=\"become-circle__title\">50<span>+</span></div> <div class=\"become-circle__text\">тренеров экспертов</div>",
                  members: "<div class=\"become-circle__text\">более</div> <div class=\"become-circle__title become-circle__title-small\">300<span>к</span></div> <div class=\"become-circle__text\">человек в нашем сообществе </div>"
                }
              },
              direction: {
                header: {
                  title: "Выбери лучшее <span class=\"text-stroke text-stroke__green\">направление</span> для себя",
                  text: "<p><span>Курсы для любого уровня знаний и целей</span> </p> <p>Высшее образование или какая-либо предварительная подготовка <span>не требуется</span></p>"
                },
                buttons: [
                  "Личностный рост",
                  "Маркетинг",
                  "Общеобразовательные",
                  "Иностранные языки",
                  "Финансы",
                  "Цифровая грамотность",
                  "Специальные",
                  "Все направления"
                ],
                slider: {
                  title: [
                    "Ресурс",
                    "Самоанализ",
                    "Самопрезентация",
                    "Личный бренд в интернете",
                    "Мотивация",
                    "Установки",
                    "Воздействие на покупателя",
                    "Как рассказать о своей компании в интернете",
                    "Люди, процессы, технологии",
                    "Продажи через ценности",
                    "Распаковка личности",
                    "Поведение покупателя",
                    "Развитие личного бренда",
                    "Разработка стратегии развития бизнеса онлайн",
                    "Как повысить эффективность кампаний в поисковой сети"
                  ],
                  descriptions: [
                    "Вы узнаете, как Ваше состояние влияет на продажи и что мешает Вам и Вашим покупателям быть в ресурсе. Познакомитесь с каналами восприятия, через которые люди получают информацию.",
                    "Клиент - это отражение вас. Поэтому в первую очередь вы должны понять не как продать клиенту, а как продать себе. Загляните в себя поглубже и проанализируйте то, как вы подаете себя, и как вас воспринимают.",
                    "Самопрезентация - это умение составить о себе положительный образ, заинтересовать своего клиента или аудиторию. Навык самопрезентации - ключевой навык, с которого начинается развитие личного бренда.",
                    "Развитие личного бренда не представляется возможным в овременном мире без соцсетей. На курсе вы узнаете, как найти свою нишу в социальных сетях, не затеряться среди конкурентов и монетизировать свой блог.",
                    "Бывало у вас такое, что чего-то очень хочется, но вы откладываете это на “потом”, которое не настаёт никогда? Причина - недостаток мотивации. На курсе разберём: откуда берётся мотивация и как самостоятельно повышать для себя её уровень.",
                    "Чем отличается мышление «бедных» и «богатых»? Почему кто-то идёт по жизни с лёгкостью и ему всё удаётся, а другие бесконечно сомневаются в собственных способностях и силах?",
                    "Главное правило хорошего менеджера - клиент всегда на первом месте. Самое важное - его самочувствие и благополучие.",
                    "Выберите свою траекторию обучения: бизнес, личный бренд или маркетинг. Узнайте, как привлекать больше клиентов и подписчиков в Instagram",
                    "Мы покупаем не товар или услугу, а то состояние, которое нам дают эти товары услуги или люди, которые их продают. Это называется “Эффект заражения”.",
                    "Вы узнаете, что такое ценности в продажах и как использовать их в качестве средства достижения успеха. Познакомитесь с понятием “распаковка личности” и узнаете как избежать ошибки в этом процессе.",
                    "Личный бренд - это то, что выделяет вас среди конкурентов, ваш индивидуальный подход к презентации товара или ведению бизнеса. Сделайте первый шаг к его созданию!",
                    "Научитесь упаковывать ценность продукта в коммуникацию, составлять стратегию продвижения и вывода продукта на рынок. Усильте маркетинговые навыки продуктовым подходом"
                  ],
                  modules: [
                    "2 модуля",
                    "4 модуля",
                    "5 модулей",
                    "6 модулей",
                    "8 модулей"
                  ]
                },
                footer: {
                  text: "<span>Присоединяйся сейчас</span> и выбирай направление"
                }
              },
              authors: {
                title: "<span class=\"text-stroke text-stroke__green\">Авторы <br></span>курсов",
                description: "Наши эксперты <span>ведут к цели</span> и следят, чтобы интерес к обучению не угасал",
                list: [
                  {
                    name: "Айнур ЗИННАТУЛИН",
                    description: "Предприниматель, <br> телеведущий и радиоведущий. <br> Обладатель премии «Теффи»",
                    more_info: "Автор книг «Таблетка от страха», «5 шагов к вашему идеальному интервью», «Тебе мешает только страх», «Искусство очаровывать незнакомцев». Тренер по публичным выступлениям и ораторскому искусству. Человек с прекрасным чувством юмора."
                  },
                  {
                    name: "Алия <br>Хурматова",
                    description: "Успешный практик онлайн<br class=\"mobile_break\"> и офлайн продаж.<br> Автор цикла онлайн-курсов<br> и личный консультант",
                    more_info: "Алия Хурматова является экспертом в продажах, офлайн и онлайн-продвижении, а также специалистом в области бизнес-консалтинга. Профессиональный бизнес-тренер с опытом более 14 лет. С 2016 года она консультирует и проводит корпоративное обучение для крупных сетевых компаний, а также является автором тренингов для руководителей и топ-менеджеров в разных сферах бизнеса. Ее курс позволит Вам существенно повысить свой уровень компетенций в области продаж."
                  },
                  {
                    name: "Юлия Долгова",
                    description: "Предприниматель, психолог,<br> энергетический коуч.<br>Автор книги «Принцип Долговой»",
                    more_info: "За 13 лет Юлия Долгова упаковала лучшие практики в программы обучения по построению и монетизации своего дела как для начинающих, так и для опытных предпринимателей. Ее системный подход в обучении позволит Вам исключить нестабильность в продажах. Она также является организатором и спикером масштабных мероприятий онлайн и офлайн."
                  },
                  {
                    name: "Анна Семенова",
                    description: "Предприниматель, бизнес тренер. <br> Автор курса<br class=\"mobile_break\"> «Большие люди – большие чеки». <br> Мощный мотиватор и лидер большой команды",
                    more_info: "Большой практический опыт Анны Семеновой позволил накопить и систематизировать знания в систему обучения «полного цикла». Организатор и спикер тематических онлайн-марафонов. Всегда простым и доступным языком, через конкретные примеры, она учит стабильно продавать без напряжения и страха."
                  },
                  {
                    name: "МИЛА МАТВЕЕВА",
                    description: "Маркетолог, спикер, мотиватор",
                    more_info: "Опыт работы в индустрии сетевого маркетинга более 20 лет. Прошла путь от начинающего продавца до Топ-лидера. Успешно развивалась в компаниях с разными направлениями деятельности. В обучающем курсе Мила Матвеева раскроет практические методики, которые помогут Вам стать великолепным психологом для самого себя, раскрыть Ваш внутренний потенциал и открыть свой денежный поток."
                  },
                  {
                    name: "Анастасия Котова",
                    description: "Эксперт в области ораторского искусства <br> и сценической речи",
                    more_info: "Автор гайда по запуску новичка «Первые шаги\" и создатель курса \"5 шагов продаж. Искусство вести диалог.\" Курс Анастасии Котовой поможет Вам разработать свой речевой аппарат и избавиться от зажимов. Вы сможете расширить словарный запас и научитесь делать так, чтобы слушатели буквально “заглядывали вам в рот”."
                  },
                  {
                    name: "СВЕТЛАНА СКОРНЯКОВА",
                    description: "Предприниматель. Автор курса «Целевая аудитория» <br> и тренингов  по продвижению в соцсетях",
                    more_info: "За 4 года активной работы в сети интернет Светлана Скорнякова отобрала эффективные инструменты, которые позволяют получать входящий поток клиентов и партнеров в бизнес. Курс «Целевая аудитория» поможет Вам определить группы своей целевой аудитории, составить УТП для каждой из групп. Вы узнаете о методах и приемах работы, составите свой контент-план, научитесь находить партнеров в бизнес через интернет."
                  },
                  {
                    name: "ЕВГЕНИЙ и ОЛЬГА ЖАРКОВЫ",
                    description: "МЛМ предприниматели. <br> Эксперты по работе с «холодным» кругом",
                    more_info: "На курсе Евгения и Ольги Жарковых Вы узнаете где брать номера телефонов потенциальных партнеров, как правильно вести свой телефонный справочник с контактами кандидатов в бизнес. Вы научитесь определять целевую аудиторию и получите скрипты телефонных звонков, освоите мастерство техники «холодного звонка». Евгений и Ольга научат преодолевать страх и поделятся психологическими приемами для эффективной работы."
                  }
                ]
              },
              opportunities: {
                title: "Вы <span class=\"opportunities-header__white\">не ограничены</span> в возможностях к обучению",
                list: [
                  {
                    title: "Где угодно",
                    text: "Учитесь дома, в дороге, во время отпуска или обеденного перерыва"
                  },
                  {
                    title: "Когда удобно",
                    text: "Учитесь в своем темпе без каких-либо ограничений по времени"
                  },
                  {
                    title: "В любом порядке",
                    text: "Проходите несколько курсов сразу или по порядку"
                  }
                ]
              },
              community: {
                title: "Крупнейшее <span class=\"text-stroke text-stroke__green\">сообщество</span> специалистов, экспертов, опытных пользователей и новичков",
                list: [
                  {
                    title: "Единомышленники",
                    text: "Вы обучаетесь, обсуждаете вопросы с наставником и помогаете начинающим"
                  },
                  {
                    title: "Коммуникация",
                    text: "Общение с авторами курсов, спикерами, чаты, видеоконференции"
                  },
                  {
                    title: "Атмосфера",
                    text: "На нашей платформе - по-домашнему тепло и комфортно"
                  }
                ]
              },
              tools: {
                title: "Мы создали лучшие инструменты для <span class=\"text-stroke text-stroke__green\">обучения",
                text: "Обучающая платформа <br><span>с полным функционалом</span>",
                list: [
                  {
                    title: "База знаний",
                    text: "Длительные программы обучения, короткие интенсивы"
                  },
                  {
                    title: "Персонализированное обучение",
                    text: "Вы сами выбираете интересные курсы, чаты и вебинары"
                  },
                  {
                    title: "Вебинары и онлайн-чаты",
                    text: "онлайн-чаты с наставниками и командами, аудио- и видеотрансляции"
                  },
                  {
                    title: "Контроль собственной успеваемости",
                    text: "С помощью личного кабинета Вы можете отслеживать свои успехи в обучении"
                  },
                  {
                    title: "Достижения, награды и рейтинг",
                    text: "Соревнования, уникальные задания и достижения"
                  },
                  {
                    title: "Игры и досуг",
                    text: "На платформе доступны игры, форумы и общение на разные темы"
                  }
                ],
                footer: {
                  text: "<span>Пройди бесплатный вводный курс</span> по работе на платформе"
                }
              },
              history: {
                header: "Вдохновись <br><span class=\"text-stroke text-stroke__green\">историями успеха</span> <br> и отзывами об обучении",
                successful_stories: "Истории успеха",
                review: "Отзывы об обучении"
              },
              create: {
                title: "Создавай и <span class=\"opportunities-header__white2 create-header__white\">продавай</span> <span class=\"create-header__stroke text-stroke\">свои <img loading=\"lazy\" src=\"img/create/star.png\" alt=\"\"> курсы</span> <br class=\"hidden-desktop\"> по всему миру",
                text: "<span>Обладаете экспертностью в какой-либо сфере знаний, </span> имеете достижения и рейтин на платформе?",
                list: [
                  {
                    title: "интерфейс",
                    text: "<span>Удобный интерфейс.</span> Всё ясно <br> даже без инструкций"
                  },
                  {
                    title: "функциональность",
                    text: "Инструменты для любых <br> форматов онлайн-обучения</span>"
                  },
                  {
                    title: "адаптивность",
                    text: "Интерфейс платформы адаптирован для всех гаджетов"
                  },
                  {
                    title: "Магазин курсов",
                    text: "Полезные темы по интересам"
                  },
                  {
                    title: "Бэк-офис",
                    text: "Статистика и управление всеми процессами из личного кабинета"
                  },
                  {
                    title: "Возможности",
                    text: "Развивай и продавай свою экспертность в любой сфере деятельности"
                  },
                  {
                    title: "Бонусы",
                    text: "Курсы в подарок за достижения на платформе"
                  },
                  {
                    title: "Партнерские программы",
                    text: "Автоматические вознаграждения за расширение клиентской сети"
                  }
                ],
                footer: {
                  title: "<span>Создавай вовлекающие курсы и <span class=\"text-stroke text-stroke__green\">зарабатывай</span> <br> на своей <img loading=\"lazy\" src=\"img/create/star_green.png\" alt=\"\"> экспертности</span>"
                }
              },
              talk: {
                title: "Рассказывай о возможностях платформы и <span><div class=\"talk-header__circles\"><div class=\"talk-header__circle\"></div><div class=\"talk-header__circle\"></div></div> зарабатывай </span> <br> в партнёрских программах",
                list_info: [
                  "<div class=\"talk-circle__text\">более</div><div class=\"talk-circle__title talk-circle__title-small\">300<span>к</span></div><div class=\"talk-circle__text\">партнеров <br> по всему <br> миру</div>",
                  "<div class=\"talk-circle__text\">более</div><div class=\"talk-circle__title talk-circle__title-small\">50<span>к <span class=\"talk-circle__text__dollar\">$</span></div><div class=\"talk-circle__text\">выплачено<br> партнерам</div>",
                  "<div class=\"talk-circle__title\">1500<span>+</span></div><div class=\"talk-circle__text\">новых клиентов<br> каждый<br> месяц</div>",
                  "<div class=\"talk-circle__text\">более</div><div class=\"talk-circle__title talk-circle__title-small\">2 <span>лет</span></div><div class=\"talk-circle__text\">в онлайн-<br> образовании</div>"
                ]
              },
              calculator: {
                title: "Кому подойдет?",
                list: [
                  "Всем, кто хочет зарабатывать <br> на продаже образовательных <br> продуктов",
                  "Блогерам, владельцам <br> Telegram-каналов и сайтов",
                  "Начинающим и опытным интернет-<br>предпринимателям, маркетологам, <br> экспертам сетевой индустрии"
                ],
                footer: {
                  title: "Начните зарабатывать <span>прямо сейчас</span>",
                  text: "Просто советуйте нас своим знакомым"
                },
                main: {
                  title: "Сколько можно заработать от продажи своего курса?",
                  text: "Выберите <span>валюту</span>",
                  sold_courses: "<span>Количество</span> <br class=\"hidden-mobile\"> проданных курсов <br class=\"hidden-mobile\"> в месяц",
                  average_cost: "<span>Средняя <br class=\"hidden-mobile\"> стоимость <br class=\"hidden-mobile\"></span> курса",
                  remuneration: "Ваше вознаграждение: <br class=\"hidden-desktop\"> <span>в месяц <span class=\"calculator-main__total-result\">700</span></span>"
                }
              },
              answer: {
                title: "Кому подойдет?",
                list: [
                  {
                    title: "Можно ли использовать платформу с мобильного устройства?",
                    text: "Платформа доступна с различных устройств, включая настольный компьютер, ноутбук, планшет или телефон."
                  },
                  {
                    title: "Сколько времени нужно уделять обучению? Я еще и работаю!",
                    text: "Вы сами выбираете удобный ритм и график обучения. Большинство пользователей совмещают нашу Академию и работу в найме. Многие из них уже полностью ушли из найма и теперь развиваются и зарабатывают только в онлайн."
                  },
                  {
                    title: "Как мне подобрать подходящий курс?",
                    text: "Нужно оформить бесплатную регистрацию на платформе, пройти вводный курс, ознакомиться с кратким описанием продуктов в личном кабинете и выбрать актуальный для себя курс. <br /> Также можно обратиться к активным пользователям и экспертам нашей платформы, которые помогут сориентироваться и подобрать подходящий курс."
                  },
                  {
                    title: "Чем вы лучше других платформ?",
                    text: "Нет предела совершенству… Говорить, что кто-то лучше, а кто-то хуже, не совсем орректно и правильно. Наша задача - это положительный результат каждого участника. Мы просто делаем свое дело и стараемся делать его хорошо. Как это у нас получается - лучше всего спросить у наших пользователей. Посмотрите отзывы. Также предлагаем пройти бесплатную регистрацию и ознакомиться с платформой изнутри. Уверены, Вам у нас понравится!"
                  },
                  {
                    title: "Как проходит обучение?",
                    text: "Основой каждого курса являются лекции, которые могут включать видео, слайды, текст, инструкции и приложения для практических занятий. Также на платформе организованы чаты, где пользователи общаются в процессе обучения и обмениваются опытом, форумы на актуальные темы, проводятся регулярные онлайн трансляции и вебинары."
                  },
                  {
                    title: "Хочу научиться зарабатывать. Ваша платформа поможет мне в этом?",
                    text: "Конечно! На нашей платформе собраны курсы, основанные на личном опыте практикующих интернет-предпринимателей и лидеров сетевого бизнеса. Кроме того, у нас очень щедрая реферальная бонусно-накопительная программа, а,значит, можно зарабатывать уже в процессе обучения. Также есть возможность стать автором курсов на нашей платформе и зарабатывать на их продаже!"
                  }
                ]
              },
              footer: {
                copyright: "Copyright 2022 <br> Все права защищены",
                platform_policy: "Политика Платформы (скачать)",
                privacy_policy: "Политика конфединциальности",
                public_offer: "Публичная офферта",
                notification: "Уведомление",
                application: [
                  "Приложение №1",
                  "Приложение №2",
                  "Приложение №3",
                  "Приложение №4",
                  "Приложение №5",
                ],
                paradigma: "Сделано с любовью <br> в paradigma.website"
              },
              popup_login: {
                button: "Вход",
                forgot_password: "Забыли пароль?"
              },
              popup_register: {
                button: "Зарегистрироваться",
                account_exists: "Уже есть аккаунт? <span>Войдите</span>",
                register_button: "Зарегистрируйтесь",
                learn_more: "чтобы узнать подробнее"
              },
              popup_leave: {
                title: "УЖЕ УХОДИТЕ?",
                text: "В знак нашего знакомства скачайте полезное пособие:",
                footer: {
                  title: "Как в любом возрасте зарабатывать обучаясь?",
                  agree: "Вы соглашаетесь с условиями обработки персональных данных"
                }
              }
            }
          },
          en: {
            translation: {
              header: {
                logo: "International online platform for copyright courses",
                navbar: {
                  courses: "Courses",
                  authors: "Authors",
                  about_platform: "About platform",
                  partners_program: "Partner program",
                  successful_stories: "Stories of success",
                  own_course: "Own course",
                  answers: "Answers"
                }
              },
              button: {
                sign_in: "Sign in",
                sign_up: "Sign up",
                register: "Register and find more",
                start_free: "Start for free",
                find_out_more: "Learn more",
                download: "Download"
              },
              main: {
                title: "Modern education <span>without</span> limitations",
                description: "with income-generating opportunities",
                list_info: {
                  any_age: "For all <br> ages",
                  unlimited_access: "Unlimited  <br> access",
                  areas_of_study: "8 areas of <br> training"
                }
              },
              become: {
                title: "Become a modern <br> and in-demand <br><span class=\"text-stroke\">professional</span>",
                description: "Welcome to <span>a unique community of professionals, aspiring professionals and passionate people</span><br />from all fields around the world",
                main: {
                  intro: "At Lime Academy, <span>you can gain the knowledge and skills you need</span> to learn new online professions and reach your full potential",
                  info: "We <span>combined theory and practice into a system,</span> which allows our platform users to start earning while they are learning!",
                  mission: "Our mission is to unite people</strong> all over the world into a partnership community, create conditions for the disclosure of their creative potential and teach each person to earn money with the help of modern technologies"
                },
                about: {
                  programs: "<div class=\"become-circle__title\">80<span>+</span></div> <div class=\"become-circle__text\">training programms</div>",
                  trainers: "<div class=\"become-circle__title\">50<span>+</span></div> <div class=\"become-circle__text\">expert trainers</div>",
                  members: "<div class=\"become-circle__text\">over</div> <div class=\"become-circle__title become-circle__title-small\">300<span>к</span></div> <div class=\"become-circle__text\">people in our community </div>"
                }
              },
              direction: {
                header: {
                  title: "Choose the best <span class=\"text-stroke text-stroke__green\">area</span> direction for you",
                  text: "<p><span>Courses for all levels of knowledge and objectives</span> </p> <p>No higher education or prior training required <span>training</span></p>"
                },
                buttons: [
                  "Personal growth",
                  "Marketing",
                  "General education",
                  "Foreign languages",
                  "Finance",
                  "Digital Literacy",
                  "Special",
                  "All areas"
                ],
                slider: {
                  title: [
                    "Resource",
                    "Introspection",
                    "Self Presentation",
                    "Personal brand online",
                    "Motivation",
                    "Settings",
                    "Impact on the customer",
                    "How to tell people about your company online",
                    "People, processes, technologies",
                    "Sales Through Values",
                    "Unpacking the identity",
                    "Buyer Behavior",
                    "Personal brand development",
                    "Designing a business development strategy online",
                    "How to improve the effectiveness of search network campaigns"
                  ],
                  descriptions: [
                    "You will learn how your condition affects sales and what prevents you and your customers from being in the resource. Get acquainted with the channels of perception through which people receive information.",
                    "The client is a reflection of you. Therefore, first of all, you must understand not how to sell to a client, but how to sell to yourself. Look deeper into yourself and analyze how you present yourself and how you are perceived.",
                    "Self-presentation is the ability to create a positive image of yourself, to interest your client or audience. The skill of self-presentation is a key skill from which the development of a personal brand begins.",
                    "The development of a personal brand is not possible in the modern world without social networks. On the course, you will learn how to find your niche in social networks, not get lost among competitors and monetize your blog.",
                    "Have you ever had something that you really want, but you put it off for \"later\", which never comes? The reason is a lack of motivation. On the course, we will analyze: where does motivation come from and how to independently increase its level for yourself.",
                    "What is the difference between the thinking of the \"poor\" and \"rich\"? Why does someone go through life with ease and succeed in everything, while others endlessly doubt their own abilities and strengths?",
                    "The main rule of a good manager is that the client always comes first. The most important thing is his well-being and well-being.",
                    "Choose your learning path: business, personal brand or marketing. Learn how to get more customers and followers on Instagram",
                    "We do not buy a product or service, but the state that these goods, services or the people who sell them give us. This is called the \"Contagion Effect\".",
                    "You will learn what values ​​are in sales and how to use them as a means to success. Get to know the concept of \"unpacking the personality\" and learn how to avoid mistakes in this process.",
                    "A personal brand is what sets you apart from your competitors, your individual approach to presenting a product or running a business. Take the first step towards creating it!",
                    "Learn to pack the value of the product into communication, develop a strategy for promoting and bringing the product to market. Strengthen your marketing skills with a product approach"],
                  modules: [
                    "2 modules",
                    "4 modules",
                    "5 modules",
                    "6 modules",
                    "8 modules",
                  ]
                },
                footer: {
                  text: "<span>Join now</span> and choose a direction"
                }
              },
              authors: {
                title: "<span class=\"text-stroke text-stroke__green\">Authors of<br></span>the courses",
                description: "Our experts <span>lead to the goal</span> and make sure that the interest in the leaOur experts <span>lead to the goal</span> and make sure that the interest in learning does not fade awayg does not fade away",
                list: [
                  {
                    name: "Ainur ZINNATULIN",
                    description: "Entrepreneur, <br> TV presenter and radio host.<br> Teffi Award winner",
                    more_info: "Author of the books The Fear Pill, 5 Steps to Your Perfect Interview, Only Fear Stops You, The Art of Charming Strangers. Public speaking and public speaking coach. A person with a great sense of humor."
                  },
                  {
                    name: "Alia <br>Khurmatova",
                    description: "Successful practitioner of online<br class=\"mobile_break\"> and offline sales.<br> Author of a cycle of online courses<br> and personal consultant",
                    more_info: "Alia Khurmatova is an expert in sales, offline and online promotion, as well as a specialist in business consulting. Professional business coach with over 14 years of experience. Since 2016, she has been advising and conducting corporate training for large network companies, and is also the author of trainings for managers and top managers in various business areas. Her course will allow you to significantly improve your level of competencies in the field of sales.."
                  },
                  {
                    name: "Yulia Dolgova",
                    description: "Entrepreneur, psychologist,<br>energy coach.<br>Author of The Debt Principle»",
                    more_info: "Within 13 years, Yulia Dolgova has packaged best practices into business building and monetization training programs for both beginners and experienced entrepreneurs. Her systematic approach to training will allow you to eliminate instability in sales. She is also the organizer and speaker of large-scale events online and offline.."
                  },
                  {
                    name: "Anna Semenova",
                    description: "Entrepreneur, business coach. <br> Author of the course<br class=\"mobile_break\"> Big people - big checks. <br> Powerful motivator and leader of a big team",
                    more_info: "Anna Semenova's extensive practical experience allowed her to accumulate and systematize knowledge into a full cycle training system. Organizer and speaker of thematic online marathons. Always in a simple and accessible language, through specific examples, she teaches you to sell consistently without stress and fear.."
                  },
                  {
                    name: "MILA MATVEEVA",
                    description: "Marketing professional, speaker, motivator",
                    more_info: "Over 20 years of experience in the network marketing industry. Went from a novice seller to a top leader. Successfully developed in companies with different activities. In the training course, Mila Matveeva will reveal practical techniques that will help you become a great psychologist for yourself, unlock your inner potential and open your cash flow."
                  },
                  {
                    name: "Anastasia Kotova",
                    description: "Expert in the area of oratory <br> and stage speech",
                    more_info: "Author of the \"First Steps \" guide for launching a beginner and creator of the \"5 steps of sales course.The art of dialogue.\" Anastasia Kotova's course will help you develop your speech apparatus and get rid of clips. You will be able to expand your vocabulary and learn how to make listeners literally “look into your mouth”."
                  },
                  {
                    name: "SVETLANA SKORNIAKOVA",
                    description: "Entrepreneur. Author of the course Target Audience <br> and trainings\n on promotion in social networks",
                    more_info: "In 4 years of active work on the internet, Svetlana Skorniakova has selected effective tools that allow you to receive an incoming flow of clients and partners into your business. The course Target Audience will help you to identify your target audience groups and to compose your UTP for each group. You will learn about the methods and techniques of work, draw up your content plan, learn how to find partners in business through the internet."
                  },
                  {
                    name: "EVGENII AND OLGA ZHARKOVY",
                    description: "MLM entrepreneurs. <br>Experts for cold circle working",
                    more_info: "On Evgenii and Olga Zharkovs`course you will learn where to get the phone numbers of the potential partners, how to properly maintain your telephone directory with the contacts of business candidates. You will learn how to identify the target audience and receive scripts for phone calls, master the skill of the cold call technique. Eugenii and Olga will teach you how to overcome fear and share psychological techniques for effective work."
                  }
                ]
              },
              opportunities: {
                title: "You`re <span class=\"opportunities-header__white\">unlimited</span> in learning opportunities",
                list: [
                  {
                    title: "Anywhere",
                    text: "Learn at home, on the road, on vacation or on your lunch break"
                  },
                  {
                    title: "Whenever it's convenient",
                    text: "Learn at your own pace without any time limits"
                  },
                  {
                    title: "In any order",
                    text: "Take several courses at once or in sequence"
                  }
                ]
              }
              ,
              community: {
                title: "The biggest <span class=\"text-stroke text-stroke__green\">comunity</span> of specialists, experts, experienced users and novices",
                list: [
                  {
                    title: "Like-minded people",
                    text: "You study, discuss issues with a mentor and help beginners"
                  },
                  {
                    title: "Communication",
                    text: "Communication with course authors, speakers, chats, video conferences"
                  },
                  {
                    title: "Ambiance",
                    text: "It's cosy and homely on our platform"
                  }
                ]
              }
              ,
              tools: {
                title: "We have created the best tools for <span class=\"text-stroke text-stroke__green\">learning",
                text: "Learning platform <br><span>with full functionality</span>",
                list: [
                  {
                    title: "Knowledge base",
                    text: "Long lasting training programs, short intensives by youself"
                  },
                  {
                    title: "Personalized learning",
                    text: "You choose interesting courses, chats and webinars"
                  },
                  {
                    title: "Webinars and online chats",
                    text: "Online chats with mentors and teams, audio and video broadcasts"
                  },
                  {
                    title: "Monitoring your own progress",
                    text: "Due to the help of your personal account, you can track your progress in learning"
                  },
                  {
                    title: "Achievements, awards and ranking",
                    text: "Competitions, unique tasks and achievements"
                  },
                  {
                    title: "Games and spare time ",
                    text: "Games, forums and communication on various topics are available on the platform"
                  }
                ],
                footer: {
                  text: "<span>Take a free introductory course</span> on working on the platform"
                }
              }
              ,
              history:
                {
                  header: "Get inspired <br><span class=\"text-stroke text-stroke__green\">with stories of success</span> <br> and training feedback",
                  successful_stories: "Stories of success",
                  review: "Training feedback"
                },
              create:
                {
                  title: "Create and <span class=\"opportunities-header__white2 create-header__white\">sell</span> <span class=\"create-header__stroke text-stroke\"> your <img loading=\"lazy\" src=\"img/create/star.png\" alt=\"\"> courses</span> <br class=\"hidden-desktop\"> around the world",
                  list:
                    [
                      {
                        title: "Interface",
                        text: "<span>Convenient interface.</span> Everything is clear <br> even without instructions"
                      },
                      {
                        title: "Functionality",
                        text: "Tools for any <br> online learning formats</span>"
                      },
                      {
                        title: "Adaptability",
                        text: "The platform interface is adapted for any types of gadgets"
                      },
                      {
                        title: "Course Store",
                        text: "Useful topics by interest"
                      },
                      {
                        title: "Back office",
                        text: "Statistics and management of all processes in a personal account"
                      },
                      {
                        title: "Opportunities",
                        text: "Build up and sell your mastership in any field of activity"
                      },
                      {
                        title: "Partnership programs",
                        text: "Automatic recompenses for expanding your customer network"
                      }
                    ],
                  footer: {
                    title: "<span>Create engaging courses and <span class=\"text-stroke text-stroke__green\">capitalise on your</span> <br> due to your <img loading=\"lazy\" src=\"img/create/star_green.png\" alt=\"\"> expertise</span>"
                  }
                },
              talk: {
                title: "Tell about the possibilities of the platform and <span><div class=\"talk-header__circles\"><div class=\"talk-header__circle\"></div><div class=\"talk-header__circle\"></div></div> gain money </span> <br> in partner programs",
                list_info:
                  [
                    "<div class=\"talk-circle__text\">over</div><div class=\"talk-circle__title talk-circle__title-small\">300<span>к</span></div><div class=\"talk-circle__text\">partners <br> around <br> the world</div>",
                    "<div class=\"talk-circle__text\">over</div><div class=\"talk-circle__title talk-circle__title-small\">50<span>к <span class=\"talk-circle__text__dollar\">$</span></div><div class=\"talk-circle__text\">paid out<br> to partners</div>",
                    "<div class=\"talk-circle__title\">1500<span>+</span></div><div class=\"talk-circle__text\">new clients<br> every<br> month</div>",
                    "<div class=\"talk-circle__text\">over</div><div class=\"talk-circle__title talk-circle__title-small\">2 <span>years</span></div><div class=\"talk-circle__text\">in online-<br> education</div>"
                  ]
              },
              calculator: {
                title: "Who will it work for?",
                list:
                  [
                    "Anyone who wants to make money <br> from selling educational <br> products",
                    "Bloggers, owners of Telegram channels and websites <br>",
                    "Beginners and experienced internet<br>entrepreneurs, marketers, <br>network industry experts"
                  ],
                footer: {
                  title: "Start earning <span>right now</span>",
                  text: "Simply recommend us to your friends"
                },
                main: {
                  title: "How much can you gain from selling your course?",
                  text: "Select <span>currency</span>",
                  sold_courses: "<span>The number</span> <br class=\"hidden-mobile\"> of sold courses <br class=\"hidden-mobile\"> for a month",
                  average_cost: "<span>Average <br class=\"hidden-mobile\"> price <br class=\"hidden-mobile\"></span> of the course",
                  remuneration: "Your remuneration: <br class=\"hidden-desktop\"> <span> monthly <span class=\"calculator-main__total-result\">700</span></span>"
                }
              },
              answer: {
                title: "Who will it work for?",
                list:
                  [
                    {
                      title: "Can I use the platform from a mobile device?",
                      text: "The platform is available in a variety of devices including desktop, laptop, tablet or phone."
                    },
                    {
                      title: "How much time should I devote to training? I also have to work!",
                      text: "You can choose a convenient rhythm and training schedule. Most users combine our Academy and employment. Many of them have already left recruitment completely and are now developing and earning only online."
                    },
                    {
                      title: "How can I find the right course?",
                      text: "You need to register for free on the platform, take an introductory course, read a brief description of the products in your personal account and choose the course that is relevant to you. <br /> You can also contact active users and experts of our platform who will help you navigate and choose the right course."
                    },
                    {
                      title: "Why are you better than others?",
                      text: "There is no limit to perfection ... To say that someone is better and someone is worse is not entirely true and correct. Our task is a positive result of each participant. We just do our job and try to do it well. How we do it is best to ask our users. Look at the feedback. We also offer to register for free and get acquainted with the platform from the inside. We are sure you will like us!"
                    },
                    {
                      title: "How does the training go?",
                      text: "Each course is based on lectures, which may include videos, slides, text, instructions, and practice applications. Chats are also organized on the platform, where users communicate in the learning process and exchange experiences, forums on current topics, regular online broadcasts and webinars are held."
                    },
                    {
                      title: "I want to learn how to make money. Will your platform help me do that?",
                      text: "Sure! Our platform contains courses based on the personal experience of practicing internet entrepreneurs and networking leaders. In addition, we have a very generous referral bonus program, which means that you can earn money while you're learning. You can also become an author of courses on our platform and earn money by selling them!"
                    }
                  ]
              },
              footer: {
                copyright: "Copyright 2022 <br> All rights reserved",
                platform_policy: "Platform policy (download)",
                privacy_policy: "Privacy policy",
                public_offer: "Public offer",
                notification: "Notification",
                application:
                  [
                    "Appendix No.1",
                    "Appendix No.2",
                    "Appendix No.3",
                    "Appendix No.4",
                    "Appendix No.5",
                  ],
                paradigma: "Made with love in paradigma.website"
              },
              popup_login: {
                button: "Enter",
                forgot_password: "Forgot password?"
              },
              popup_register: {
                button: "Register",
                account_exists: "Got an account already? <span>Enter</span>",
                register_button: "Register",
                learn_more: "To learn more"
              },
              popup_leave: {
                title: "LEAVING NOW?",
                text: "As a vote of our acquaintance, download a useful manual:",
                footer: {
                  title: "How to earn money while studying at any age?",
                  agree: "You agree to the terms of personal data processing"
                }
              }
            }
          },
          kk: {
            translation: {
              header: {
                logo: "Авторлық курстардың халықаралық онлайн-платформасы",
                navbar: {
                  courses: "Курстар",
                  authors: "Авторлар",
                  about_platform: "Платформа туралы",
                  partners_program: "Серіктестік бағдарлама",
                  successful_stories: "Табысқа жету хикаялары",
                  own_course: "Өз курсым",
                  answers: "Сұрақтарға жауаптар"
                }
              },
              button: {
                sign_in: "Кіру",
                sign_up: "Тіркеу",
                register: "Тіркеліңіз және толығырақ біліңіз",
                start_free: "Тегін бастау",
                find_out_more: "Толығырақ білу",
                download: "Жүктеу"
              },
              main: {
                title: "Шектеусіз заманауи <span></span> білім",
                description: "табыс табу мүмкіндігімен",
                list_info: {
                  any_age: "Кез келген <br> жастғы адамдар үшін",
                  unlimited_access: "Шексіз <br> қолжетімділік",
                  areas_of_study: "Оқытудың 8 <br> бағыты"
                }
              },
              become: {
                title: "Заманауи <br> және қажетті <br><span class=\"text-stroke\">маман бол</span>",
                description: "Біз сізді <span>өз саласындағы кәсіпқойлардың бірегей қауымдастығына, жаңадан бастаушыларға және бүкіл әлем бойынша әр түрлі қызмет салаларынан ынталы адамдарды шақырамыз</span><br />",
                main: {
                  intro: "«Lime академияда» сіз жаңа онлайн мамандықтарды меңгеру және өз әлеуетіңізді сәтті жүзеге асыру үшін <span>жаңа білім мен қажетті дағдыларды ала аласыз</span>",
                  info: "Біз <span>теория мен тәжірибені жүйеге біріктірдік</span> соның арқасында платформамыздың пайдаланушылары оқу кезінде ақша таба бастады.!",
                  mission: "Біздің миссиямыз – бүкіл әлемдегі адамдарды</strong>серіктестік қоғамдастыққа біріктіру, олардың шығармашылық әлеуетін ашуға жағдай жасау және әрбір адамға заманауи технологиялардың көмегімен ақша табуға үйрету."
                },
                about: {
                  programs: "<div class=\"become-circle__title\">80<span>+</span></div> <div class=\"become-circle__text\">оқытушы бағдарлама</div>",
                  trainers: "<div class=\"become-circle__title\">50<span>+</span></div> <div class=\"become-circle__text\">жаттықтырушы сарапшы</div>",
                  members: "<div class=\"become-circle__text\">Біздің қоғамдастықта</div> <div class=\"become-circle__title become-circle__title-small\">300-ден астам<span>к</span></div> <div class=\"become-circle__text\">адам бар </div>"
                }
              },
              direction: {
                header: {
                  title: "Өзің үшін <span class=\"text-stroke text-stroke__green\">үздік бағытты</span> таңда",
                  text: "<p><span>Кез келген білім мен мақсаттарға арналған курстар</span> </p> <p>Жоғары білім немесе кез келген алдыңғы дайындық <span>талап етілмейді</span></p>"
                },
                buttons: [
                  "Тұлғалық өсу",
                  "Маркетинг",
                  "Жалпы білім беретін",
                  "Шетел тілдері",
                  "Қаржы",
                  "Цифрлық сауаттылық",
                  "Арнайы",
                  "Барлық бағыттар"
                ],
                slider: {
                  title: [
                    "Ресурс",
                    "Өз бетінше талдау",
                    "Өзін-өзі таныстыру",
                    "Интернеттегі жеке бренд",
                    "Жігерлендіру",
                    "Орнатылымдар",
                    "Сатып алушыға әсер ету",
                    "Интернетте өз компанияң туралы қалай айтуға болады",
                    "Адамдар, үдерістер, технологиялар",
                    "Құндылықтар арқылы сату",
                    "Тұлғаны ашу",
                    "Сатып алушының мінез-құлқы",
                    "Жеке брендті дамыту",
                    "Бизнесті дамыту стратегиясын онлайн дамыту",
                    "Іздеу желісінде компаниялардың тиімділігін қалай арттыруға болады"
                  ],
                  descriptions: [
                    "Жағдайыңыздың сатылымдарға қалай әсер ететінін және сізге және тұтынушыларыңызға ресурста болуға не кедергі болатынын білесіз. Адамдар ақпарат алатын қабылдау арналарымен танысыңыз».",
                    "Клиент - сіздің бейнеңіз. Сондықтан, ең алдымен, клиентке қалай сату керектігін емес, өзіңізге қалай сату керектігін түсінуіңіз керек. Өзіңізге тереңірек үңіліп, өзіңізді қалай таныстыратыныңызды және сізді қалай қабылдағаныңызды талдаңыз.",
                    "Өзін-өзі таныстыру - бұл өзіңіздің жағымды имиджіңізді құру, клиентіңізді немесе аудиторияңызды қызықтыру. Өзін-өзі таныстыру шеберлігі - бұл жеке брендтің дамуы басталатын негізгі дағды.",
                    "Қазіргі әлемде жеке брендті дамыту әлеуметтік желілерсіз мүмкін емес. Курста сіз әлеуметтік желілерде өз орнын табуды, бәсекелестер арасында адаспауды және блогыңызды монетизациялауды үйренесіз",
                    "Сізде шынымен қалаған бірнәрсе болды ма, бірақ оны ешқашан келмейтін \"кейінге\" қалдырасыз ба? Оның себебі мотивацияның болмауында. Курста біз талдаймыз: мотивация қайдан пайда болады және өз бетінше қалай жасауға болады. оның деңгейін өзіңіз үшін арттырыңыз».",
                    "««Кедей» мен «байдың» ойлауының айырмашылығы неде? Неліктен біреу өмірден оңай өтіп, бәрінде жетістікке жетеді, ал басқалары өзінің қабілеті мен күшіне шексіз күмән келтіреді?",
                    "Жақсы менеджердің басты ережесі - клиент әрқашан бірінші орында. Ең бастысы - оның көңіл-күйі мен амандығы.",
                    "Оқу жолын таңдаңыз: бизнес, жеке бренд немесе маркетинг. Instagram-да көбірек тұтынушылар мен жазылушыларды қалай алуға болатынын біліңіз»",
                    "Біз өнімді немесе қызметті сатып алмаймыз, бірақ осы тауарларды, қызметтерді немесе оларды сататын адамдар бізге беретін жағдайды сатып аламыз. Бұл \"Жұқпалы әсер\" деп аталады.",
                    "«Сіз сатуда қандай құндылықтар бар екенін және оларды табысқа жету құралы ретінде қалай пайдалану керектігін білесіз. «Тұлғаны ашу» ұғымымен танысыңыз және осы процесте қателіктерден аулақ болыңыз.»",
                    "Жеке бренд - бұл сізді бәсекелестеріңізден ерекшелендіретін нәрсе, өнімді ұсынуға немесе бизнесті жүргізуге жеке көзқарасыңыз. Оны құруға бірінші қадам жасаңыз!",
                    "Өнімнің құндылығын қарым-қатынасқа салуды үйреніңіз, өнімді жылжыту және нарыққа шығару стратегиясын жасаңыз. Маркетингтік дағдыларыңызды өнім тәсілімен шыңдаңыз."
                  ],
                  modules: [
                    "2 модуль",
                    "4 модуль",
                    "5 модуль",
                    "6 модуль",
                    "8 модуль"
                  ]
                },
                footer: {
                  text: "<span>Қазір қосыл</span> және бағытты таңда"
                }
              },
              authors: {
                title: "<span class=\"text-stroke text-stroke__green\">Курстардың <br></span>авторлары",
                description: "Оқуға деген қызығушылық сөнбеуі үшін, <span>біздің сарапшылар</span> мақсатқа апарады және қадағалайды",
                list: [
                  {
                    name: "Айнур ЗИННАТУЛИН",
                    description: "Кәсіпкер, <br> тележүргізуші және радиожүргізуші. <br> «Теффи» сыйлығының иегері",
                    more_info: "«Қорқынышқа қарсы таблетка», «Мінсіз сұхбатқа 5 қадам», «Саған тек қорқыныш кедергі», «Сүйкімді бейтаныс адамдардың өнері» кітаптарының авторы. Көпшілік алдында сөйлеу және шешендік өнер бойынша жаттықтырушы. Керемет әзілкеш адам."
                  },
                  {
                    name: "Әлия <br>Хурматова",
                    description: "Онлайн<br class=\"mobile_break\"> және офлайн сатудың табысты практигі.<br> Онлайн-курстар циклының авторы<br> және жеке консультант",
                    more_info: "Әлия Хурматова – сату, офлайн және онлайн жылжыту бойынша сарапшы, сонымен қатар бизнес-консалтинг бойынша маман. 14 жылдан астам тәжірибесі бар кәсіби бизнес-тренер. 2016 жылдан бастап ірі желілік компанияларға кеңес беріп, корпоративтік тренингтер жүргізіп келеді, сонымен қатар бизнестің әртүрлі бағыттары бойынша менеджерлер мен топ-менеджерлер үшін тренингтердің авторы болып табылады. Оның курсы сізге сату саласындағы құзыреттілік деңгейіңізді айтарлықтай жақсартуға мүмкіндік береді."
                  },
                  {
                    name: "Юлия Долгова",
                    description: "Кәсіпкер, психолог,<br> энергетикалық коуч.<br>«Долгованың қағидаты» кітабының авторы",
                    more_info: "13 жыл бойы Юлия Долгова жаңадан бастағандар мен тәжірибелі кәсіпкерлер үшін бизнесті құру және монетизациялау бойынша оқыту бағдарламаларына үздік тәжірибелерді жинақтады. Оның оқытуға жүйелі көзқарасы сатудағы тұрақсыздықты жоюға мүмкіндік береді. Ол сонымен қатар онлайн және офлайн режимінде ауқымды іс-шаралардың ұйымдастырушысы және спикері."
                  },
                  {
                    name: "Анна Семенова",
                    description: "Кәсіпкер, бизнес тренер. <br> Автор курса<br class=\"mobile_break\"> «Үлкен адамдар – үлкен чектер». <br> Қуатты мотиватор және лидер үлкен команданың көшбасшысы",
                    more_info: "Анна Семенованың мол практикалық тәжірибесі оған білімді «толық цикл» оқыту жүйесіне жинақтауға және жүйелеуге мүмкіндік берді. Тақырыптық онлайн марафондардың ұйымдастырушысы және спикері. Әрқашан қарапайым және қолжетімді тілде, нақты мысалдар арқылы ол сізді күйзеліс пен қорқынышсыз дәйекті түрде сатуға үйретеді.."
                  },
                  {
                    name: "МИЛА МАТВЕЕВА",
                    description: "Маркетолог, спикер, мотиватор",
                    more_info: "Желілік маркетинг саласындағы жұмыс тәжірибесі 20 жылдан астам. Жаңадан бастаған сатушыдан бастап жоғарғы көшбасшыға дейін өсті. Әртүрлі қызмет түрлері бар компанияларда сәтті дамыды. Оқу курсында Мила Матвеева өзіңіз үшін тамаша психолог болуға, ішкі әлеуетіңізді ашуға және ақша ағынын ашуға көмектесетін практикалық әдістерді ашады.."
                  },
                  {
                    name: "Анастасия Котова",
                    description: "Шешендік өнер және сахна тілі <br> саласындағы сарапшы",
                    more_info: "Жаңадан бастаушыға арналған «Алғашқы қадамдар» нұсқаулығының авторы және «Сатудың 5 қадамы» курсын жасаушы. Диалог өнері.\" Анастасия Котованың курсы сөйлеу аппаратын дамытуға және қысылудан арылуға көмектеседі. Сіз сөздік қорыңызды кеңейте аласыз және тыңдаушыларды «ауызыңызға қарауға» үйретуді үйренесіз.”",
                  },
                  {
                    name: "СВЕТЛАНА СКОРНЯКОВА",
                    description: "Кәсіпкер. «Мақсатты аудитория» курсының <br> және әлеуметтік желілерде жылжыту бойынша тренингтердің авторы",
                    more_info: "Интернеттегі 4 жыл белсенді жұмысы үшін Светлана Скорнякова сіздің бизнесіңізге клиенттер мен серіктестердің кіріс ағынын алуға мүмкіндік беретін тиімді құралдарды таңдады. «Мақсатты аудитория» курсы мақсатты аудиторияңыздың топтарын анықтауға, топтардың әрқайсысына USP құруға көмектеседі. Сіз жұмыстың әдістері мен әдістерімен танысасыз, контент-жоспарыңызды құрастырасыз, Интернет арқылы бизнес серіктестерді қалай табуға болатынын білесіз."
                  },
                  {
                    name: "ЕВГЕНИЙ және ОЛЬГА ЖАРКОВТАР",
                    description: "МЛМ кәсіпкерлер. <br> \"Салқын\" шеңбермен жұмыс істеу сарапшылары",
                    more_info: "Евгений мен Ольга Жарковтың курсында сіз әлеуетті серіктестердің телефон нөмірлерін қайдан алуға болатынын, бизнеске үміткерлердің байланыстарымен телефон анықтамалығын қалай дұрыс жүргізу керектігін білесіз. Сіз мақсатты аудиторияны анықтауды және телефон қоңыраулары үшін сценарийлерді алуды үйренесіз, «суық қоңырау» техникасының дағдысын меңгересіз. Евгений мен Ольга сізді қорқынышты жеңуге және тиімді жұмыс істеу үшін психологиялық әдістермен бөлісуге үйретеді."
                  }
                ]
              },
              opportunities: {
                title: "Сіз <span class=\"opportunities-header__white\">оқыту мүмкіндігімен</span> шектелмегенсіз",
                list: [
                  {
                    title: "Қайда ыңғайлы",
                    text: "Үйде, жолда, делалыс немесе түскі ас кезінде оқыңыз"
                  },
                  {
                    title: "Қашан ыңғайлы",
                    text: "Уақыт бойынша әлдебір шектеулерсіз өз қарқыныңызбен оқыңыз"
                  },
                  {
                    title: "Кез келген тәртіпте",
                    text: "Бірден немесе ретімен бірнеше курстан өтіңіз"
                  }
                ]
              },
              community: {
                title: "Кәсіби мамандардан, сарапшылардан, қуатты пайдаланушылардан және жаңадан бастаушылардан тұратын ең үлкен <span class=\"text-stroke text-stroke__green\">қауымдастығы</span>",
                list: [
                  {
                    title: "Единомышленники",
                    text: "Сіз оқисыз, тәлімгермен сұрақтарды талқылайсыз және жаңадан бастаушыларға көмектесесіз"
                  },
                  {
                    title: "Коммуникация",
                    text: "Курс авторларымен, спикерлермен қарым-қатынас, чаттар, видеоконференциялар"
                  },
                  {
                    title: "Атмосфера",
                    text: "Біздің платформада - үйдегідей жылы және жайлы"
                  }
                ]
              },
              tools: {
                title: "Біз оқу үшін үздік құралдарды <span class=\"text-stroke text-stroke__green\"> жасап шықтық",
                text: "Толық функционалды <br><span> оқыту платформасы</span>",
                list: [
                  {
                    title: "Білімдер базасы",
                    text: "Ұзақ оқыту бағдарламасы, қысқа қарқындар"
                  },
                  {
                    title: "Дербестендірілген оқу",
                    text: "Қызықты курстарды, чаттар мен вебинарларды өзіңіз таңдайсыз"
                  },
                  {
                    title: "Вебинарлар мен онлайн-чаттар",
                    text: "тәлімгерлермен және командалармен онлайн-чаттар, аудио- және видеотрансляциялар"
                  },
                  {
                    title: "Өз үлгерімін бақылау",
                    text: "Жеке кабинеттің көмегімен Сіз оқудағы өз табыстарыңызды қадағалай аласыз"
                  },
                  {
                    title: "Жетістіктер, наградалар және рейтинг",
                    text: "Жарыстар, бірегей тапсырмалар мен жетістіктер"
                  },
                  {
                    title: "Ойындар және тынығу",
                    text: "Платформада түрлі тақырыптағы ойындар, форумдар мен қарым-қатынастар қолжетімді"
                  }
                ],
                footer: {
                  text: "<span>Платформадағы жұмыс бойынша</span> тегін кіріспе курстан өт"
                }
              },
              history: {
                header: "Табысқа жету <br><span class=\"text-stroke text-stroke__green\"> және оқу туралы</span> <br> хикаялар мен пікірлерден шабыттан",
                successful_stories: "Табысқа жету хикаялары",
                review: "Оқу туралы пікірлер"
              },
              create: {
                title: "Бүкіл әлем бойынша <span class=\"opportunities-header__white2 create-header__white\"> өз</span> <span class=\"create-header__stroke text-stroke\">курстарыңды <img loading=\"lazy\" src=\"img/create/star.png\" alt=\"\"> жаса</span> <br class=\"hidden-desktop\"> және сат",
                list: [
                  {
                    title: "интерфейс",
                    text: "<span>Ыңғайлы интерфейс.</span> Бәрі нұсқаулықсыз-ақ <br> түсінікті"
                  },
                  {
                    title: "функционалдылық",
                    text: "Онлайн-оқытудың кез келген <br> форматына арналған құралдар</span>"
                  },
                  {
                    title: "бейімділік",
                    text: "Платформа интерфейсі барлық гаджеттерге бейімделген"
                  },
                  {
                    title: "Курстар дүкені",
                    text: "Қызығушылықтар бойынша пайдалы тақырыптар"
                  },
                  {
                    title: "Бэк-офис",
                    text: "Статистика және жеке кабинеттен барлық процестерді басқару"
                  },
                  {
                    title: "Мүмкіндіктер",
                    text: "Кез келген қызмет саласында өз сарапшылығыңды дамыт және сат"
                  },
                  {
                    title: "Бонустар",
                    text: "Платформадағы жетістіктер үшін курстар сыйлыққа беріледі"
                  },
                  {
                    title: "Серіктестік бағдарламалар",
                    text: "Клиенттік желіні кеңейту үшін автоматты сыйақылар"
                  }
                ],
                footer: {
                  title: "<span>Тартымды курстар жаса және <span class=\"text-stroke text-stroke__green\">өз</span> <br> сарапшылығыңмен <img loading=\"lazy\" src=\"img/create/star_green.png\" alt=\"\"> ақша тап</span>"
                }
              },
              talk: {
                title: "Платформаның мүмкіндіктері туралы айт және <span><div class=\"talk-header__circles\"><div class=\"talk-header__circle\"></div><div class=\"talk-header__circle\"></div></div> әріптестік бағдарламаларды </span> <br> ақша тап",
                list_info: [
                  "<div class=\"talk-circle__text\">бүкіл</div><div class=\"talk-circle__title talk-circle__title-small\">әлем <span>к</span></div><div class=\"talk-circle__text\">бойынша 3000<br> серіктестен астам <br> миру</div>",
                  "<div class=\"talk-circle__text\">Серіктестерге </div><div class=\"talk-circle__title talk-circle__title-small\">50-ден<span>к <span class=\"talk-circle__text__dollar\">$</span></div><div class=\"talk-circle__text\">астам<br>  төленді</div>",
                  "<<div class=\"talk-circle__title\">Айына<span>+</span></div><div class=\"talk-circle__text\"> 1500<br> жаңа<br> клиент</div>",
                  "<div class=\"talk-circle__text\"></div><div class=\"talk-circle__title talk-circle__title-small\">2 <span>жылдан астам</span></div><div class=\"talk-circle__text\"> онлайн-<br> образовании</div>"
                ]
              },
              calculator: {
                title: "Кімге дұрыс келеді?",
                list: [
                  "Білім беру өнімдерін <br> сатқысы келетіндердің <br> барлығына",
                  "Блогерлерге, Telegram-<br>арналар мен сайттардың иелеріне",
                  "Жаңадан бастаған және тәжірибелі интернет-<br>кәсіпкерлерге, маркетологтарға, <br> желілік индустрия сарапшыларына"
                ],
                footer: {
                  title: "Дәл қазір <span> ақша таба бастаңыз</span>",
                  text: "Жай ғана өз таныстарыңызға бізге келуге кеңес беріңіз"
                },
                main: {
                  title: "Өз курсыңды сатудан қанша табуға болады?",
                  text: "Выберите <span>валюту</span>",
                  sold_courses: "<span>Айына</span> <br class=\"hidden-mobile\"> сатылған курстар <br class=\"hidden-mobile\"> саны",
                  average_cost: "<span>Курстың <br class=\"hidden-mobile\"> орташа <br class=\"hidden-mobile\"></span> құны",
                  remuneration: "Сіздің сыйақыңыз: <br class=\"hidden-desktop\"> <span>айына <span class=\"calculator-main__total-result\">700</span></span>"
                }
              },
              answer: {
                title: "Кімге дұрыс келеді?",
                list: [
                  {
                    title: "Платформаны мобильді құрылғыдан пайдалануға болады ма?",
                    text: "Үстел компьютерін, ноутбукты, планшетті немесе телефонды қоса алғанда, платформа түрлі құрылғылардан қолжетімді."
                  },
                  {
                    title: "Оқуға қанша уақыт бөлу керек? Мен әрі жұмыс істеймін!",
                    text: "Сіз ыңғайлы ырғақ пен оқу кестесін өзіңіз таңдайсыз. Көптеген пайдаланушылар біздің Академиямызды және жалданып жұмыс істеуді қоса атқарады. Олардың көпшілігі қазірдің өзінде жалданып жұмыс істеуден мүлдем бас тартты және қазір тек онлайн режимінде дамып, табыс табуда."
                  },
                  {
                    title: "Маған ыңғайлы курсты қалай таңдауға болады?",
                    text: "НПлатформада тегін тіркелу, кіріспе курстан өту, жеке кабинеттегі өнімдердің қысқаша сипаттамасымен танысу және өзіңізге сәйкес курсты таңдау қажет. <br/> сонымен қатар біздің платформаның белсенді пайдаланушылары мен сарапшыларына жүгінуге болады, олар сізге бағыт-бағдар беруге және дұрыс бағытты табуға көмектеседі."
                  },
                  {
                    title: "Сіздер басқа платформалардан несімен жақсысыздар?",
                    text: "Кемелдікке жетудің шегі жоқ... біреу жақсы, ал біреу нашар деп айтудың жөні жоө және дұрыс емес. Біздің міндетіміз-әрбір қатысушының оң нәтижесі. Біз жай ғана өз ісімізді істеп жатырмыз және оны жақсы орындауға тырысамыз. Біз мұны қалай аламыз - ең жақсы нәрсе-пайдаланушылардан сұрау. Пікірлерді қараңыз. Сондай-ақ, біз тегін тіркеуден өтуді және платформамен ішінен танысуды ұсынамыз. Біз сізге ұнайтынына сенімдіміз!"
                  },
                  {
                    title: "Оқытудан кім өтеді?",
                    text: "Әр курстың негізі видео, слайдтар, мәтін, нұсқаулар мен практикалық сабақтарға арналған қосымшаларды қамтитын лекциялар болып табылады. Сондай-ақ, платформада чаттар ұйымдастырылған, онда пайдаланушылар оқу процесінде сөйлеседі және тәжірибе алмасады, өзекті тақырыптар бойынша форумдар, тұрақты онлайн трансляциялар мен вебинарлар өткізіледі."
                  },
                  {
                    title: "Ақша табуды үйренгім келеді. Сіздің платформаңыз бұл істе маған көмектесе ме?",
                    text: "Әрине! Біздің платформада практикалық интернет-кәсіпкерлер мен желілік бизнес көшбасшыларының жеке тәжірибесіне негізделген курстар жинақталған. Сонымен қатар, бізде өте жомарт бонустық жинақтау бағдарламасы бар,демек, сіз оқу процесінде ақша таба аласыз. Біздің платформада курстардың авторы болуға және оларды сатудан ақша табуға мүмкіндік бар!"
                  }
                ]
              },
              footer: {
                copyright: "Copyright 2022 <br> Барлық құқықтары қорғалған",
                platform_policy: "Платформа саясаты (жүктеу)",
                privacy_policy: "Құпиялылық саясаты",
                application: [
                  "№1 қосымша",
                  "№2 қосымша",
                  "№3 қосымша",
                  "№4 қосымша",
                  "№5 қосымша"
                ],
                paradigma: "paradigma.website-та <br> сүйіспеншілікпен жасалған"
              },
              popup_login: {
                button: "Кіру",
                forgot_password: "Парольді ұмытыңыз ба?"
              },
              popup_register: {
                button: "Тіркелу керек",
                account_exists: "Аккаунтыңыз бар ма? <span>Кіріңіз</span>",
                register_button: "Тіркеліңіз",
                learn_more: "толығырақ білу үшін"
              },
              popup_leave: {
                title: "КЕТІП БАРА ЖАТЫРСЫЗ БА?",
                text: "Біздің таныстығымыздың белгісі ретінде пайдалы құралды жүктеп алыңыз:",
                footer: {
                  title: "Кез келген жаста оқу арқылы қалай ақша табуға болады?",
                  agree: "Сіз дербес деректерді өңдеу шарттарымен келісесіз"
                }
              }
            }
          },
          ro: {
            translation: {
              header: {
                logo: "Platformă internațională online pentru cursuri privind drepturile de autor",
                navbar: {
                  courses: "Cursuri",
                  authors: "Autorii",
                  about_platform: "Despre platformă",
                  partners_program: "Program de afiliere",
                  successful_stories: "Povești de succes",
                  own_course: "Cursul propriu",
                  answers: "Răspunsuri la întrebări"
                }
              },
              button: {
                sign_in: "Conectare",
                sign_up: "Înregistrare",
                register: "Înregistrează-te și află mai multe",
                start_free: "Începe gratuit",
                find_out_more: "Află mai multe",
                download: "Descarca"
              },
              main: {
                title: "Educație modernă <span>fără</span> limite",
                description: "cu posibilitatea de a realiza venituri",
                list_info: {
                  any_age: "Pentru orice <br> vârstă",
                  unlimited_access: "Acces <br> nelimitat",
                  areas_of_study: "8 domenii <br> de studiu"
                }
              },
              become: {
                title: "Deveni un modern <br> și căutat <br><span class=\"text-stroke\">specialist</span>",
                description: "Vă invităm la <span>o comunitate unică de profesioniști în domeniul lor, începători și doar oameni pasionați</span><br />din diferite domenii de activitate din întreaga lume",
                main: {
                  intro: "La «Lime Academy» <span>poți dobândi cunoștințe actualizate și abilități necesare</span> pentru a stăpâni noi profesii",
                  info: "Ne-am <span>combinat teoria și practica într-un sistem,</span> datorită căruia utilizatorii platformei noastre încep să câștige în timp ce invață!",
                  mission: "Misiunea noastră este să unim oamenii </strong> din întreaga lume într-o comunitate de parteneriat, să creăm condiții pentru dezvăluirea potențialului lor creativ și să învățăm fiecare persoană să câștige bani cu ajutorul tehnologiilor moderne"
                },
                about: {
                  programs: "<div class=\"become-circle__title\">80<span>+</span></div> <div class=\"become-circle__text\">programe de instruire</div>",
                  trainers: "<div class=\"become-circle__title\">50<span>+</span></div> <div class=\"become-circle__text\">formatori experți</div>",
                  members: "<div class=\"become-circle__text\">peste</div> <div class=\"become-circle__title become-circle__title-small\">300<span>к</span></div> <div class=\"become-circle__text\">de oameni în societatea noastră </div>"
                }
              },
              direction: {
                header: {
                  title: "Alege cea mai bună <span class=\"text-stroke text-stroke__green\">direcție</span> pentru tine",
                  text: "<p><span>Cursuri pentru orice nivel de cunoștințe și obiective</span> </p> <p>Studii superioare sau orice pregătire anterioară <span>nu sunt necesare</span></p>"
                },
                buttons: [
                  "Creștere personală",
                  "Marketing",
                  "Învățământul general",
                  "Limbi străine",
                  "Finanțe",
                  "Alfabetizare digitală",
                  "Speciale",
                  "Toate direcțiile"
                ],
                slider: {
                  title: [
                    "Resursă",
                    "Introspecţie",
                    "Autoprezentare",
                    "Marca personală pe internet",
                    "Motivația",
                    "Setări",
                    "Impactul asupra cumparatorului",
                    "Cum să-ți faci publicitate companiei online",
                    "Oameni, procese, tehnologii",
                    "Vânzarea prin valoare",
                    "Desfacerea personalității",
                    "Comportamentul cumpărătorului",
                    "Dezvoltarea mărcii personale",
                    "Dezvoltarea unei strategii de dezvoltare a afacerii online",
                    "Cum să îmbunătățiți performanța campaniilor din rețeaua de căutare"
                  ],
                  descriptions: [
                    "Veți afla cum starea dvs. afectează vânzările și ce vă împiedică pe dvs. și clienții dvs. să vă aflați în resursă. Cunoașteți canalele de percepție prin care oamenii primesc informații.",
                    "Clientul este o reflectare a ta. Prin urmare, în primul rând, trebuie să înțelegi nu cum să vinzi unui client, ci cum să-ți vinzi ție. Aruncă o privire profundă asupra ta și analizează cum te prezinți și cum ești perceput.",
                    "Autoprezentarea este capacitatea de a crea o imagine pozitivă despre tine, de a-ți interesa clientul sau publicul. Abilitatea de autoprezentare este o abilitate cheie de la care începe dezvoltarea unui brand personal.",
                    "Dezvoltarea mărcii personale nu este posibilă în lumea de astăzi fără social media. Pe parcursul cursului, vei învăța cum să-ți găsești nișa în rețelele sociale, să nu te pierzi printre concurenți și să-ți monetizezi blogul.",
                    "Ai avut vreodată ceva ce îți dorești cu adevărat, dar l-ai amânat pentru “mai târziu”, care nu vine nicioadată? Motivul este lipsa de motivație. Pe parcursul cursului, vom analiza: de unde vine motivația și cum să-și crești în mod independent nivelul pentru tine.",
                    "Care este diferința dintre gândirea «săracului» și «bogaților»? De ce cineva trece prin viață cu ușurință și reușește în toate, în timp ce alții se îndoiesc la nesfârșit de propriile abilități și puncte forte?",
                    "Principala regulă a unui bun manager este că clientul este întotdeauna pe primul loc. Cel mai important lucru este bunăstarea și bunăstarea lui.",
                    "Alegeți calea de învățare: afaceri, marcă personală sau marketing. Aflați cum să obțineți mai mulți clienți și urmăritori pe Instagram",
                    "Nu cumpărăm un produs sau un serviciu, ci starea pe care aceste bunuri și servicii o oferă nouă sau persoanelor care le vând. Se numește “Efect de contagiune”.",
                    "Vei învăța ce valori sunt în vânzări și cum să le folosești ca mijloc de succes. Cunoașteți conceptul de “desfacere a personalității” și învățați cum să evitați greșelile în acest proces.",
                    "Marcă personală este ceea ce te diferențiază de concurenții tăi, abordarea ta individuală de a prezenta un produs sau de a face afaceri. Fă primul pas spre crearea lui!",
                    "Învățați să introduceți valoarea produsului în comunicare, să dezvoltați o strategie pentru promovarea și aducerea produsului pe piață. Îmbunătățiți-vă abilitățile de marketing cu o abordare a produsului"
                  ],
                  modules: [
                    "2 module",
                    "4 module",
                    "5 module",
                    "6 module",
                    "8 module"
                  ]
                },
                footer: {
                  text: "<span>Alătură-te acum</span> și alege o direcție"
                }
              },
              authors: {
                title: "<span class=\"text-stroke text-stroke__green\">Autorii <br></span>cursurilor",
                description: "Experții noștri <span>concuc spre obiectiv</span> și se asigură că interesul pentru învățare nu dispare",
                list: [
                  {
                    name: "Ainur ZINNATULIN",
                    description: "Antreprenor, <br> prezentator TV și prezentator radio. <br> Câștigător al premiului «Тeffi»",
                    more_info: "Autor al cărților «Pastilă de frică», «5 pași către interviul tău perfect», «Numai frica te oprește», «Arta de a fermeca strainii». Instructor de vorbire în public și vorbire în public. O persoană cu un mare simț al umorului."
                  },
                  {
                    name: "Аlia <br>Hurmatova",
                    description: "Practicant de succes al vânzărilor online<br class=\"mobile_break\"> și offline.<br> Autor al unui ciclu de cursuri online<br> și consultant personal",
                    more_info: "Alia Hurmatova este expert în vânzări, promovare offline și online, precum și specialist în consultanță în afaceri. Coach profesionist de afaceri cu peste 14 ani de experiență. Din 2016, ea consiliază și desfășoară traininguri corporative pentru companii mari din rețea și este, de asemenea, autoarea unor traininguri pentru manageri și manageri de top din diverse domenii de afaceri. Cursul ei vă va permite să vă îmbunătățiți semnificativ nivelul de competențe în domeniul vânzărilor."
                  },
                  {
                    name: "Iulia Dolgova",
                    description: "Antreprenor, psiholog,<br> coach energetic.<br>Аutorul cărții «Principiul Datoriei»",
                    more_info: "Timp de 13 ani, Iulia Dolgova a împachetat cele mai bune practici în programe de formare pentru construirea de afaceri și monetizare, atât pentru începători, cât și pentru antreprenori cu experiență. Abordarea ei sistematică a instruirii vă va permite să eliminați instabilitatea în vânzări. Ea este, de asemenea, organizatoare și vorbitoare de evenimente de amploare online și offline."
                  },
                  {
                    name: "Anna Semenova",
                    description: "Antreprenor, antrenor de afaceri. <br> Аutorul cursului<br class=\"mobile_break\"> «Oameni mari – cecuri mari». <br> Motivator puternic și lider al unei echipe mari",
                    more_info: "Experiența practică vastă a Anna Semenova i-a permis să acumuleze și să sistematizeze cunoștințele într-un sistem de formare «ciclu complet». Organizator și vorbitor de maratoane tematice online. Întotdeauna într-un limbaj simplu și accesibil, prin exemple concrete, ea te învață să vinzi consecvent fără stres și teamă."
                  },
                  {
                    name: "MILA МАTVEEVA",
                    description: "Marketer, vorbitor, motivator",
                    more_info: "Peste 20 de ani de experiență în industria de marketing în rețea. A trecut de la un vânzător începător la un lider de top. Dezvoltat cu succes în companii cu diferite activități. În cadrul cursului de formare, Mila Matveeva va dezvălui tehnici practice care vă vor ajuta să deveniți un mare psiholog pentru dvs., să vă deblocați potențialul interior și să vă deschideți fluxul de numerar."
                  },
                  {
                    name: "Аnastasia Kotova",
                    description: "Expert în domeniul oratoriei <br> și al discursului scenic",
                    more_info: "Аutor al ghidului «Primii pași\" pentru lansarea unui începător și creator al cursului \"5 pași ai vânzărilor. Arta dialogului.\" Cursul de Anastasia Kotova vă va ajuta să vă dezvoltați aparatul de vorbire și să scăpați de clipuri. Veți putea să vă extindeți vocabularul și să învățați cum să îi faceți pe ascultători să “se uite în gură”",
                  },
                  {
                    name: "SVETLANA SKORNEAKOVA",
                    description: "Antreprenor. Аutor al cursului «Publicul țintă» <br> și cursuri despre promovareaîn rețelele sociale",
                    more_info: "Pentru 4 ani de muncă activă pe internet, Svetlana Skornyakova a selectat instrumente eficiente care vă permit să primiți un flux de clienți și parteneri în afacerea dvs. Cursul «Publicul țintă» te va ajuta să identifici grupurile de public țintă, să întocmești un USP pentru fiecare dintre grupuri. Veți afla despre metodele și tehnicile de lucru, veți elabora planul de conținut, veți afla cum să găsiți parteneri de afaceri prin Internet."
                  },
                  {
                    name: "EVGHENII și OLGA ZHARKOV",
                    description: "Antreprenori MLM. <br> Experți în locuri de muncă «rece» cercul",
                    more_info: "Pe parcursul lui Evghenii și Olga Zharkov, veți învăța de unde să obțineți numerele de telefon ale potențialilor parteneri, cum să vă mențineți corect agenda telefonică cu contactele candidaților de afaceri. Vei învăța cum să identifici publicul țintă și să primești scripturi pentru apeluri telefonice, să stăpânești abilitățile tehnicii «apeluri reci». Evghenii și Olga vă vor învăța cum să depășiți frica și să împărtășiți tehnici psihologice pentru o muncă eficientă."
                  }
                ]
              },
              opportunities: {
                title: "Dvs. <span class=\"opportunities-header__white\">nu sunteți limitat</span> în oportunitățile de învățare",
                list: [
                  {
                    title: "Pretutindeni",
                    text: "Învațați acasă, pe drum, în vacanță sau în pauza de masă"
                  },
                  {
                    title: "Când este convenabil",
                    text: "Învațați în ritmul dvs., fără limite de timp"
                  },
                  {
                    title: "În orice ordine",
                    text: "Luați mai multe cursuri deodată sau în ordine"
                  }
                ]
              },
              community: {
                title: "Cea mai mare <span class=\"text-stroke text-stroke__green\">comunitate</span> de profesioniști, experți, utilizatori cu putere și începători",
                list: [
                  {
                    title: "Oameni cu aceeasi gandire",
                    text: "Dvs.studiați, discutați probleme cu un mentor și ajutați pe începători"
                  },
                  {
                    title: "Comunicare",
                    text: "Comunicare cu autorii cursurilor, vorbitori, chat-uri, conferințe video"
                  },
                  {
                    title: "Atmosfera",
                    text: "Pe platforma noastră - acasă caldă și confortabilă"
                  }
                ]
              },
              tools: {
                title: "Ne-am creat cele mai bune instrumente pentru <span class=\"text-stroke text-stroke__green\">învățarea",
                text: "Platformă de învățare <br><span>cu funcționalitate completă</span>",
                list: [
                  {
                    title: "Bază de cunoștințe",
                    text: "Programe lungi de antrenament, intensive scurte"
                  },
                  {
                    title: "Învățare personalizată",
                    text: "Alegeți cursuri, chat-uri și webinarii interesante"
                  },
                  {
                    title: "Webinare și chat-uri online",
                    text: "chat-uri online cu mentori și echipe, transmisii audio și video"
                  },
                  {
                    title: "Monitorizarea propriului progres",
                    text: "Cu ajutorul contului personal, vă puteți urmări progresul în învățare"
                  },
                  {
                    title: "Realizări, premii și clasament",
                    text: "Competiții, sarcini unice și realizări"
                  },
                  {
                    title: "Jocuri și petrecere a timpului liber",
                    text: "Jocuri, forumuri și comunicare pe diverse subiecte sunt disponibile pe platformă"
                  }
                ],
                footer: {
                  text: "<span>Urmează un curs introductiv gratuit</span> despre lucrul pe platformă"
                }
              },
              history: {
                header: "Înspiră-te <br><span class=\"text-stroke text-stroke__green\">poveșterile de succes</span> <br> și recenzii despre învățarea",
                successful_stories: "Povești de succes",
                review: "Recenzii despre învățarea"
              },
              create: {
                title: "Crează și <span class=\"opportunities-header__white2 create-header__white\">vinde</span> <span class=\"create-header__stroke text-stroke\">tăle <img loading=\"lazy\" src=\"img/create/star.png\" alt=\"\"> cursuri</span> <br class=\"hidden-desktop\"> în întreaga lume",
                list: [
                  {
                    title: "interfață",
                    text: "<span>Interfață convenabilă.</span> Totul este clar <br> chiar și fără instrucțiuni"
                  },
                  {
                    title: "funcţionalitate",
                    text: "Instrumente pentru orice <br> formate de învățare online</span>"
                  },
                  {
                    title: "adaptabilitate",
                    text: "Interfața platformei este adaptată pentru toate gadgeturile"
                  },
                  {
                    title: "Magazin de cursuri",
                    text: "Subiecte utile după interes"
                  },
                  {
                    title: "Back office",
                    text: "Statistici și gestionarea tuturor proceselor dintr-un cont personal"
                  },
                  {
                    title: "Capabilități",
                    text: "Dezvoltați și vindeți-vă expertiza în orice domeniu de activitate"
                  },
                  {
                    title: "Bonusuri",
                    text: "Cursuri ca un cadou pentru realizări pe platformă"
                  },
                  {
                    title: "Programe de parteneriat",
                    text: "Recompense automate pentru extinderea rețelei de clienți"
                  }
                ],
                footer: {
                  title: "<span>Crea cursuri captivante și <span class=\"text-stroke text-stroke__green\">câștigi</span> <br> asupra <img loading=\"lazy\" src=\"img/create/star_green.png\" alt=\"\"> expertiză ta</span>"
                }
              },
              talk: {
                title: "Discuta despre funcțiile platformei și <span><div class=\"talk-header__circles\"><div class=\"talk-header__circle\"></div><div class=\"talk-header__circle\"></div></div> gâștigă </span> <br> în programele de afiliere",
                list_info: [
                  "<div class=\"talk-circle__text\">peste</div><div class=\"talk-circle__title talk-circle__title-small\">300<span>к</span></div><div class=\"talk-circle__text\">de parteneri <br> din întreaga <br> lume</div>",
                  "<div class=\"talk-circle__text\">peste</div><div class=\"talk-circle__title talk-circle__title-small\">50<span>к <span class=\"talk-circle__text__dollar\">$</span></div><div class=\"talk-circle__text\">plătite<br> partenerilor</div>",
                  "<div class=\"talk-circle__title\">1500<span>+</span></div><div class=\"talk-circle__text\">de clienți noi<br> în fiecare<br> luna</div>",
                  "<div class=\"talk-circle__text\">mai mult</div><div class=\"talk-circle__title talk-circle__title-small\">de 2 <span>ani</span></div><div class=\"talk-circle__text\">în online-<br> educație</div>"
                ]
              },
              calculator: {
                title: "Cine se va potrivi?",
                list: [
                  "Oricine dorește să câștige bani <br> vânzând <br> produse educaționale",
                  "Pentru bloggeri, proprietari <br> Telegram-canale și site-uri",
                  "Începător cu experiență pe internet-<br>antreprenori, marketeri, <br> experți în industria de rețea"
                ],
                footer: {
                  title: "Începeți să câștigați <span>chiar acum</span>",
                  text: "Doar recomanda-ne prietenilor tăi"
                },
                main: {
                  title: "Cât de mult poți câștiga din vânzarea cursului tău?",
                  text: "Selectați <span>valută</span>",
                  sold_courses: "<span>Numărul</span> <br class=\"hidden-mobile\"> de cursuri vândute <br class=\"hidden-mobile\"> pe lună",
                  average_cost: "<span>Mediu <br class=\"hidden-mobile\"> cost <br class=\"hidden-mobile\"></span> cursului",
                  remuneration: "Recompensa dumneavoastră: <br class=\"hidden-desktop\"> <span>pe luna <span class=\"calculator-main__total-result\">700</span></span>"
                }
              },
              answer: {
                title: "Cine se va potrivi?",
                list: [
                  {
                    title: "Pot folosi platforma de pe un dispozitiv mobil?",
                    text: "Platforma este accesibilă de pe o varietate de dispozitive, inclusiv desktop, laptop, tabletă sau telefon."
                  },
                  {
                    title: "Cât timp ar trebui să fie dedicat antrenamentului? Încă lucrez!",
                    text: "Tu însuți alegi un ritm convenabil și un program de antrenament. Majoritatea utilizatorilor combină Academia noastră și angajarea. Mulți dintre ei au renunțat deja complet la angajare și acum se dezvoltă și câștigă doar online."
                  },
                  {
                    title: "Cum pot găsi cursul potrivit?",
                    text: "Trebuie să vă înregistrați gratuit pe platformă, să urmați un curs introductiv, să citiți o scurtă descriere a produselor din contul personal și să alegeți cursul care este relevant pentru dvs. <br /> De asemenea, puteți contacta utilizatorii activi și experții platformei noastre, care vă vor ajuta să navigați și să alegeți cursul potrivit."
                  },
                  {
                    title: "Cum sunteți mai bun decât alte platforme?",
                    text: "Nu există limită pentru perfecțiune... A spune că cineva este mai bun și cineva este mai rău nu este în întregime corect și corect. Sarcina noastră este un rezultat pozitiv al fiecărui participant. Doar ne facem treaba și încercăm să o facem bine. Cum procedăm, cel mai bine este să întrebăm utilizatorii noștri. Uită-te la recenzii. Vă oferim, de asemenea, să vă înregistrați gratuit și să faceți cunoștință cu platforma din interior. Suntem siguri că o să vă placă!"
                  },
                  {
                    title: "Cum merge antrenamentul?",
                    text: "Fiecare curs se bazează pe prelegeri, care pot include videoclipuri, diapozitive, text, instrucțiuni și aplicații practice. De asemenea, pe platformă sunt organizate chat-uri, unde utilizatorii comunică în procesul de învățare și fac schimb de experiență, au loc forumuri pe subiecte de actualitate, difuzări online regulate și seminarii web."
                  },
                  {
                    title: "Vreau să învăț cum să fac bani. Ma va ajuta platforma ta cu asta?",
                    text: "Desigur! Platforma noastră conține cursuri bazate pe experiența personală a antreprenorilor practicanți pe Internet și a liderilor de afaceri în rețea. În plus, avem un program cumulativ de bonus de recomandare foarte generos, ceea ce înseamnă că poți câștiga bani deja în procesul de învățare. Există și o oportunitate de a deveni autorul cursurilor pe platforma noastră și de a câștiga bani vânzându-le!"
                  }
                ]
              },
              footer: {
                copyright: "Copyright 2022 <br> Toate drepturile rezervate",
                platform_policy: "Politica platformei (descărcare)",
                privacy_policy: "Politica de confidențialitate",
                application: [
                  "Aplicația №1",
                  "Aplicația №2",
                  "Aplicația №3",
                  "Aplicația №4",
                  "Aplicația №5"
                ],
                paradigma: "Făcută cu dragoste <br> в paradigma.website"
              },
              popup_login: {
                button: "Conectare",
                forgot_password: "Ați uitat parola?"
              },
              popup_register: {
                button: "Înregistrare",
                account_exists: "Aveți deja un cont? <span>conectați-vă</span>",
                register_button: "Înregistrați-vă",
                learn_more: "pentru a afla mai multe"
              },
              popup_leave: {
                title: "DEJA PLECAȚI?",
                text: "Ca semn al cunoștințelor noastre, descărcați un manual util:",
                footer: {
                  title: "Cum să câștigi bani în timp ce studiezi la orice vârstă?",
                  agree: "Sunteți de acord cu termenii de prelucrare a datelor cu caracter personal"
                }
              }
            }
          },
          be: {
            translation: {
              header: {
                logo: "Міжнародная анлайн-платформа аўтарскіх курсаў",
                navbar: {
                  courses: "Курсы",
                  authors: "Аўтары",
                  about_platform: "Пра платформу",
                  partners_program: "Партнёрская праграма",
                  successful_stories: "Гісторыі поспеху",
                  own_course: "Свой курс",
                  answers: "Адказы на пытанні"
                }
              },
              button: {
                sign_in: "Увайсці",
                sign_up: "Рэгістрацыя",
                register: "Зарэгіструйцеся і даведайцеся падрабязней",
                start_free: "Пачаць бясплатна",
                find_out_more: "Даведацца падрабязней",
                download: "Спампаваць"
              },
              main: {
                title: "Сучасная адукацыя <span>без</span> абмежаванняў",
                description: "з магчымасцю атрымання даходу",
                list_info: {
                  any_age: "Для любога <br> ўзросту",
                  unlimited_access: "Неабмежаваны <br> доступ",
                  areas_of_study: "8 напрамкаў <br> навучання"
                }
              },
              become: {
                title: "Стань сучасным <br> і запатрабаваным <br><span class=\"text-stroke\">спецыялістам</span>",
                description: "Запрашаем у <span>ўнікальную супольнасць прафесіяналаў сваёй справы, пачаткоўцаў адмыслоўцаў і проста захопленых людзей</span><br />з розных сфер дзейнасці па ўсім свеце",
                main: {
                  intro: "У \"Lime Academy\" <span>можна набыць актуальныя веды і неабходныя навыкі</span> для асваення новых інтэрнэт-прафесій і паспяховай рэалізацыі свайго патэнцыялу",
                  info: "Мы <span>аб'ядналі тэорыю і практыку ў сістэму,</span> дзякуючы якой карыстальнікі нашай платформы пачынаюць зарабляць ужо падчас навучання!",
                  mission: "Наша місія - аб'яднаць людзей </strong> усяго свету ў партнёрскую супольнасць, стварыць умовы для раскрыцця іх творчага патэнцыялу і навучыць кожнага чалавека зарабляць з дапамогай сучасных тэхналогій"
                },
                about: {
                  programs: "<div class=\"become-circle__title\">80<span>+</span></div> <div class=\"become-circle__text\">навучальных праграм</div>",
                  trainers: "<div class=\"become-circle__title\">50<span>+</span></div> <div class=\"become-circle__text\">трэнераў экспертаў</div>",
                  members: "<div class=\"become-circle__text\">больш</div> <div class=\"become-circle__title become-circle__title-small\">300<span>да</span></ div> <div class=\"become-circle__text\">чалавек у нашай супольнасці </div>"
                }
              },
              direction: {
                header: {
                  title: "Выберы лепшы <span class=\"text-stroke text-stroke__green\">кірунак</span> для сябе",
                  text: "<p><span>Курсы для любога ўзроўню ведаў і мэт</span> </p> <p>Вышэйшая адукацыя або якая-небудзь папярэдняя падрыхтоўка <span>не патрабуецца</span></p> "
                },
                buttons: [
                  "Асобасны рост",
                  "Маркетынг",
                  "Агульнаадукацыйныя",
                  "Замежныя мовы",
                  "Фінансы",
                  "Лічбавая пісьменнасць",
                  "Спецыяльныя",
                  "Усе напрамкі"
                ],
                slider: {
                  title: [
                    "Рэсурс",
                    "Самааналіз",
                    "Самапрэзентацыя",
                    "Асабісты брэнд у інтэрнэце",
                    "Матывацыя",
                    "Устаноўкі",
                    "Уздзеянне на пакупніка",
                    "Як расказаць пра сваю кампанію ў інтэрнэце",
                    "Людзі, працэсы, тэхналогіі",
                    "Продажы праз каштоўнасці",
                    "Распакоўка асобы",
                    "Паводзіны пакупніка",
                    "Развіццё асабістага брэнда",
                    "Распрацоўка стратэгіі развіцця бізнесу анлайн",
                    "Як падвысіць эфектыўнасць кампаній у пошукавай сетцы"
                  ],
                  descriptions: [
                    "Вы даведаецеся, як Ваш стан уплывае на продажы і што перашкаджае Вам і Вашым пакупнікам быць у рэсурсе. Пазнаёміцеся з каналамі ўспрымання, праз якія людзі атрымліваюць інфармацыю.",
                    "Кліент - гэта адлюстраванне вас. Таму, ў першую чаргу, вы мусіце зразумець не як прадаць кліенту, а як прадаць сабе. Зазірніце ў сябе глыбей і прааналізуйце тое, як вы падаяце сябе, і як вас успрымаюць.",
                    "Самапрэзентацыя - гэта ўменне скласці аб сабе станоўчы вобраз, зацікавіць свайго кліента або аўдыторыю. Навык самапрэзентацыі - ключавы навык, з якога пачынаецца развіццё асабістага брэнда.",
                    "Развіццё асабістага брэнда не ўяўляецца магчымым у сучасным свеце без сацсетак. На курсе вы даведаецеся, як знайсці сваю нішу ў сацыяльных сетках, не згубіцца сярод канкурэнтаў і манетызаваць свой блог.",
                    "Ці здаралася з Вамі, што чагосьці вельмі хочацца, але вы адкладваеце гэта на \"потым\", якое не настае ніколі? Прычына - недахоп матывацыі. На курсе разбярэм: адкуль бярэцца матывацыя і як самастойна падвышаць для сябе яе ўзровень.",
                    "Чым адрозніваецца мысленне \"бедных\" і \"багатых\"? Чаму хтосьці ідзе па жыцці з лёгкасцю і ў яго ўсё атрымоўваецца, а іншыя бясконца сумняваюцца ва ўласных здольнасцях і сілах?",
                    "Галоўнае правіла добрага мэнэджара - кліент заўсёды на першым месцы. Самае важнае - яго самаадчуванне і дабрабыт.",
                    "Абярыце сваю траекторыю навучання: бізнес, асабісты брэнд ці маркетынг. Даведайцеся, як прыцягваць больш кліентаў і падпісчыкаў у Instagram",
                    "Мы купляем не тавар ці паслугу, а той стан, які нам даюць гэтыя тавары, паслугі ці людзі, якія іх прадаюць. Гэта называецца “Эфект заражэння”.",
                    "Вы даведаецеся, што такое каштоўнасці ў продажах і як выкарыстоўваць іх у якасці сродку дасягнення поспеху. Пазнаёміцеся з паняццем \"распакоўка асобы\" і даведаецеся, як пазбегнуць памылкі ў гэтым працэсе.",
                    "Асабісты брэнд - гэта тое, што выдзяляе вас сярод канкурэнтаў, ваш індывідуальны падыход да прэзентацыі тавару або вядзення бізнесу. Зрабіце першы крок да яго стварэння!",
                    "Навучыцеся пакаваць каштоўнасць прадукта ў камунікацыю, складаць стратэгію прасоўвання і вываду прадукта на рынак. Узмацніце маркетынгавыя навыкі прадуктовым падыходам"
                  ],
                  modules: [
                    "2 модуля",
                    "4 модуля",
                    "5 модуляў",
                    "6 модуляў",
                    "8 модуляў"
                  ]
                },
                footer: {
                  text: "<span>Далучайся зараз</span> і выбірай кірунак"
                }
              },
              authors: {
                title: "<span class=\"text-stroke text-stroke__green\">Аўтары <br></span>курсаў",
                description: "Нашы эксперты <span>вядуць да мэты</span> і сочаць, каб цікавасць да навучання не згасала",
                list: [
                  {
                    name: "Айнур ЗІНАТУЛІН",
                    description: "Прадпрымальнік, <br> тэлевядучы і радыёвядучы. <br> Уладальнік прэміі «Тэфі»",
                    more_info: "Аўтар кніг «Таблетка ад страху», «5 крокаў да вашага ідэальнага інтэрв'ю», «Табе замінае толькі страх», «Мастацтва зачароўваць незнаёмцаў». Трэнер па публічных выступах і прамоўніцкаму мастацтву. Чалавек з выдатным пачуццём гумару."
                  },
                  {
                    name: "Алія <br>Хурматава",
                    description: "Паспяховы практык анлайн<br class=\"mobile_break\"> і афлайн продажаў.<br> Аўтар цыкла анлайн-курсаў<br> і асабісты кансультант",
                    more_info: "Алія Хурматава з'яўляецца экспертам у продажах, афлайн і анлайн-прасоўванні, а таксама спецыялістам у галіне бізнес-кансалтынгу. Прафесійны бізнес-трэнер з вопытам больш за 14 гадоў. З 2016 года яна кансультуе і праводзіць карпаратыўнае навучанне для буйных сеткавых кампаній, а таксама з'яўляецца аўтарам трэнінгаў для кіраўнікоў і топ-мэнэджараў у розных сферах бізнесу. Яе курс дазволіць Вам істотна падвысіць свой узровень кампетэнцый у галіне продажаў."
                  },
                  {
                    name: "Юлія Далгова",
                    description: "Прадпрымальнік, псіхолаг,<br> энергетычны коуч.<br>Аўтар кнігі «Прынцып Далговай»",
                    more_info: "За 13 гадоў Юлія Далгова спакавала лепшыя практыкі ў праграмы навучання па пабудове і манетызацыі сваёй справы як для пачаткоўцаў, так і для спрактыкаваных прадпрымальнікаў. Яе сістэмны падыход у навучанні дазволіць Вам выключыць нестабільнасць у продажах. Яна таксама з'яўляецца арганізатарам і спікерам маштабных мерапрыемстваў анлайн і афлайн."
                  },
                  {
                    name: "Ганна Сямёнава",
                    description: "Прадпрымальнік, бізнэс трэнер. <br> Аўтар курса <br class=\"mobile_break\"> \"Вялікія людзі – вялікія чэкі». <br> Магутны матыватар і лідэр вялікай каманды",
                    more_info: "Вялікі практычны досвед Ганны Сямёнавай дазволіў назапасіць і сістэматызаваць веды ў сістэму навучання «поўнага цыклу». Арганізатар і спікер тэматычных анлайн-марафонаў. Заўсёды простай і даступнай мовай, праз пэўныя прыклады, яна вучыць стабільна прадаваць без напружання і страху."
                  },
                  {
                    name: "МІЛА МАЦВЕЕВА",
                    description: "Маркетолаг, спікер, матыватар",
                    more_info: "Вопыт працы ў індустрыі сеткавага маркетынгу больш за 20 гадоў. Прайшла шлях ад пачаткоўца прадаўца да Топ-лідэра. Паспяхова развівалася ў кампаніях з рознымі напрамкамі дзейнасці. У навучальным курсе Міла Мацвеева раскрые практычныя методыкі, якія дапамогуць Вам стаць цудоўным псіхолагам для самога сябе, раскрыць Ваш унутраны патэнцыял і адкрыць свой грашовы паток."
                  },
                  {
                    name: "Анастасія Котава",
                    description: "Эксперт у галіне аратарскага мастацтва <br> і сцэнічнага маўлення",
                    more_info: "Аўтар гайда па запуску пачаткоўца «Першыя крокі\" і стваральнік курса \"5 крокаў продажаў. Мастацтва весці дыялог.\" Курс Анастасіі Котавай дапаможа Вам распрацаваць свой маўленчы апарат і пазбавіцца ад заціскаў. Вы зможаце пашырыць слоўнікавы запас і навучыцеся рабіць так, каб слухачы літаральна \"зазіралі вам у рот."
                  },
                  {
                    name: "СВЯТЛАНА СКАРНЯКОВА",
                    description: "Прадпрымальнік. Аўтар курса «Мэтавая аўдыторыя» <br> і трэнінгаў\n па прасоўванні ў сацсетках",
                    more_info: "За 4 гады актыўнай працы ў сетцы Інтэрнэт Святлана Скарнякова адабрала эфектыўныя інструменты, якія дазваляюць атрымліваць уваходны паток кліентаў і партнёраў у бізнес. Курс «Мэтавая аўдыторыя» дапаможа Вам вызначыць групы сваёй мэтавай аўдыторыі, скласці УТП для кожнай з груп. Вы даведаецеся аб метадах і прыёмах працы, складзеце свой кантэнт-план, навучыцеся знаходзіць партнёраў у бізнес праз Інтэрнэт."
                  },
                  {
                    name: "ЯЎГЕН і ВОЛЬГА ЖАРКОВЫ",
                    description: "МЛМ прадпрымальнікі. <br>\n Эксперты па працы з «халодным» колам",
                    more_info: "На курсе Яўгена і Вольгі Жарковых Вы даведаецеся, дзе браць нумары тэлефонаў патэнцыйных партнёраў, як правільна весці свой тэлефонны даведнік з кантактамі кандыдатаў у бізнес. Вы навучыцеся вызначаць мэтавую аўдыторыю і атрымаеце скрыпты тэлефонных званкоў, засвоіце майстэрства тэхнікі «халоднага тэлефанавання» . Яўген і Вольга навучаць пераадольваць страх і падзеляцца псіхалагічнымі прыёмамі для эфектыўнай працы."
                  }
                ]
              },
              opportunities: {
                title: "Вы <span class=\"opportunities-header__white\">не абмежаваныя</span> у магчымасцях да навучання",
                list: [
                  {
                    title: "Дзе заўгодна",
                    text: "Вучыцеся дома, у дарозе, падчас адпачынку або абедзеннага перапынку"
                  },
                  {
                    title: "Калі зручна",
                    text: "Вучыцеся ў сваім тэмпе без якіх-небудзь абмежаванняў па часе"
                  },
                  {
                    title: "У любым парадку",
                    text: "Праходзьце некалькі курсаў адразу ці па парадку"
                  }
                ]
              },
              community: {
                title: "Найбуйнейшая <span class=\"text-stroke text-stroke__green\">супольнасць</span> адмыслоўцаў, экспертаў, дасведчаных карыстальнікаў і пачаткоўцаў",
                list: [
                  {
                    title: "Аднадумцы",
                    text: "Вы навучаецеся, абмяркоўваеце пытанні з настаўнікам і дапамагаеце пачаткоўцам"
                  },
                  {
                    title: "Камунікацыя",
                    text: "Зносіны з аўтарамі курсаў, спікерамі, чаты, відэаканферэнцыі"
                  },
                  {
                    title: "Атмасфера",
                    text: "На нашай платформе - па-хатняму цёпла і камфортна"
                  }
                ]
              },
              tools: {
                title: "Мы стварылі найлепшыя прылады для <span class=\"text-stroke text-stroke__green\">навучання,",
                text: "Навучальная платформа <br><span>з поўным функцыяналам</span>",
                list: [
                  {
                    title: "База ведаў",
                    text: "Доўгія праграмы навучання, кароткія інтэнсівы"
                  },
                  {
                    title: "Персаналізаванае навучанне",
                    text: "Вы самі выбіраеце цікавыя курсы, чаты і вэбінары"
                  },
                  {
                    title: "Вебінары і анлайн-чаты",
                    text: "анлайн-чаты з настаўнікамі і камандамі, аўдыё- і відэатрансляцыі"
                  },
                  {
                    title: "Кантроль уласнай паспяховасці",
                    text: "З дапамогай асабістага кабінета Вы можаце адсочваць свае поспехі ў навучанні"
                  },
                  {
                    title: "Дасягненні, узнагароды і рэйтынг",
                    text: "Спаборніцтвы, унікальныя заданні і дасягненні"
                  },
                  {
                    title: "Гульні і вольны час",
                    text: "На платформе даступныя гульні, форумы і зносіны на розныя тэмы"
                  }
                ],
                footer: {
                  text: "<span>Прайдзі бясплатны ўводны курс</span> па працы на платформе"
                }
              },
              history: {
                header: "Натхніся <br><span class=\"text-stroke text-stroke__green\">гісторыямі поспеху</span> <br>і водгукамі аб навучанні",
                successful_stories: "Гісторыі поспеху",
                review: "Водгукі аб навучанні"
              },
              create: {
                title: "Стварай і <span class=\"opportunities-header__white2 create-header__white\">прадавай</span> <span class=\"create-header__stroke text-stroke\">свае <img loading=\"lazy \" src=\"img/create/star.png\" alt=\"\"> курсы</span> <br class=\"hidden-desktop\"> па ўсім свеце",
                list: [
                  {
                    title: "інтэрфейс",
                    text: "<span>Зручны інтэрфейс.</span> Усё зразумела <br> нават без інструкцый"
                  },
                  {
                    title: "функцыянальнасць",
                    text: "Інструменты для любых <br> фарматаў анлайн-навучання</span>"
                  },
                  {
                    title: "адаптыўнасць",
                    text: "Інтэрфейс платформы адаптаваны для ўсіх гаджэтаў"
                  },
                  {
                    title: "Крама курсаў",
                    text: "Карысныя тэмы па інтарэсах"
                  },
                  {
                    title: "Бэк-офіс",
                    text: "Статыстыка і кіраванне ўсімі працэсамі з асабістага кабінета"
                  },
                  {
                    title: "Магчымасці",
                    text: "Развівай і прадавай сваю экспертнасць у любой сферы дзейнасці"
                  },
                  {
                    title: "Бонусы",
                    text: "Курсы ў падарунак за дасягненні на платформе"
                  },
                  {
                    title: "Партнёрскія праграмы",
                    text: "Аўтаматычныя ўзнагароджанні за пашырэнне кліенцкай сеткі"
                  }
                ],
                footer: {
                  title: "Стварай курсы, якія ўцягваюць і <span class=text-stroke text-stroke__green\">зарабляй</span> <br> на сваёй <img loading=\"lazy\" src=\" img/create/star_green.png\" alt=\"\">экспертнасці</span>"
                }
              },
              talk: {
                title: "Распавядай пра магчымасці платформы і <span><div class=\"talk-header__circles\"><div class=\"talk-header__circle\"></div><div class=\"talk-header__circle \"></div></div> зарабляй </span> <br>у партнёрскіх праграмах",
                list_info: [
                  "<div class=\"talk-circle__text\">больш</div><div class=\"talk-circle__title talk-circle__title-small\">300<span>да</span></div><div class=\"talk-circle__text\">партнёраў <br> па ўсім <br> свеце</div>",
                  "<div class=\"talk-circle__text\">больш</div><div class=\"talk-circle__title talk-circle__title-small\">50<span>да <span class=\"talk-circle__text__dollar\">$</span></div><div class=\"talk-circle__text\">выплачана<br> партнёрам</div>",
                  "<div class=\"talk-circle__title\">1500<span>+</span></div><div class=\"talk-circle__text\">новых кліентаў<br> кожны<br> месяц</ div>",
                  "<div class=\"talk-circle__text\">больш за</div><div class=\"talk-circle__title talk-circle__title-small\">2 <span>гады</span></div><div class=\"talk-circle__text\">у анлайн-<br> адукацыі</div>"
                ]
              },
              calculator: {
                title: "Каму падыйдзе?",
                list: [
                  "Усім, хто хоча зарабляць <br> на продажы адукацыйных <br> прадуктаў",
                  "Блогерам, уладальнікам <br> Telegram-каналаў і сайтаў",
                  "Пачаткоўцам і дасведчаным інтэрнэт- <br>прадпрымальнікам, маркетолагам, <br> экспертам сеткавай індустрыі"
                ],
                footer: {
                  title: "Пачніце зарабляць <span>прама зараз</span>",
                  text: "Проста райце нас сваім знаёмым"
                },
                main: {
                  title: "Колькі можна зарабіць ад продажу свайго курса?",
                  text: "Абярыце <span>валюту</span>",
                  sold_courses: "<span>Колькасць</span> <br class=\"hidden-mobile\"> прададзеных курсаў <br class=\"hidden-mobile\"> у месяц",
                  average_cost: "<span>Сярэдні <br>class=\"hidden-mobile\"> кошт <br class=\"hidden-mobile\"></span> курса",
                  remuneration: "Ваша ўзнагарода: <br class=\"hidden-desktop\"> <span>у месяц <span class=\"calculator-main__total-result\">700</span></span>"
                }
              },
              answer: {
                title: "Каму падыйдзе?",
                list: [
                  {
                    title: "Ці можна выкарыстоўваць платформу з мабільнай прылады?",
                    text: "Платформа даступная з розных прылад, у тым ліку настольны кампутар, ноўтбук, планшэт ці тэлефон."
                  },
                  {
                    title: "Колькі часу трэба аддаваць навучанню? Я яшчэ і працую!",
                    text: "Вы самі выбіраеце зручны рытм і графік навучання. Большасць карыстальнікаў сумяшчаюць нашу Акадэмію і працу ў найме. Многія з іх ужо цалкам сышлі з найму і зараз развіваюцца і зарабляюць толькі ў анлайн."
                  },
                  {
                    title: "Як мне падабраць рэлевантны курс?",
                    text: "Трэба аформіць бясплатную рэгістрацыю на платформе, прайсці ўступны курс, азнаёміцца з кароткім апісаннем прадуктаў у асабістым кабінеце і выбраць актуальны для сябе курс. <br /> Таксама можна звярнуцца да актыўных карыстальнікаў і экспертаў нашай платформы, якія дапамогуць зарыентавацца і падабраць падыходзячы курс."
                  },
                  {
                    title: "Чым вы лепшыя за іншыя платформы?",
                    text: "Няма мяжы дасканаласці… Казаць, што нехта лепшы, а нехта горшы, не зусім карэктна і дакладна. Наша задача - гэта станоўчы вынік кожнага ўдзельніка. Мы проста робім сваю справу і імкнемся рабіць яе добра. Як гэта ў нас атрымліваецца - лепш за ўсё спытаць у нашых карыстальнікаў. Паглядзіце водгукі. Таксама прапануем прайсці бясплатную рэгістрацыю і азнаёміцца з платформай знутры. Упэўненыя, Вам у нас спадабаецца!"
                  },
                  {
                    title: "Як праходзіць навучанне?",
                    text: "Асновай кожнага курса з'яўляюцца лекцыі, якія могуць уключаць відэа, слайды, тэкст, інструкцыі і дадаткі для практычных заняткаў. Таксама на платформе арганізаваны чаты, дзе карыстальнікі маюць зносіны ў працэсе навучання і абменьваюцца вопытам, форумы на актуальныя тэмы, праводзяцца рэгулярныя анлайн-трансляцыі і вэбінары."
                  },
                  {
                    title: "Хачу навучыцца зарабляць. Ваша платформа дапаможа мне ў гэтым?",
                    text: "Вядома! На нашай платформе сабраныя курсы, заснаваныя на асабістым вопыце дзеючых інтэрнэт-прадпрымальнікаў і лідэраў сеткавага бізнесу. Акрамя таго, у нас вельмі шчодрая рэферальная бонусна-назапашвальная праграма, а, значыць, можна зарабляць ужо ў працэсе навучання. Таксама ёсць магчымасць стаць аўтарам курсаў на нашай платформе і зарабляць на іх продажы!"
                  }
                ]
              },
              footer: {
                copyright: "Copyright 2022 <br> Усе правы абаронены",
                platform_policy: "Палітыка Платформы (спампаваць)",
                privacy_policy: "Палітыка канфідэцыйнасці",
                application: [
                  "Дадатак №1",
                  "Дадатак №2",
                  "Дадатак №3",
                  "Дадатак №4",
                  "Дадатак №5"
                ],
                paradigma: "Зроблена з любоўю <br> ў paradigma.website"
              },
              popup_login: {
                button: "Уваход",
                forgot_password: "Забылі пароль?"
              },
              popup_register: {
                button: "Зарэгістравацца",
                account_exists: "Ужо ёсць рахунак? <span>Увайдзіце</span>",
                register_button: "Зарэгіструйцеся",
                learn_more: "каб даведацца падрабязней"
              },
              popup_leave: {
                title: "УЖО СЫХОДЗІЦЕ?",
                text: "У знак нашага знаёмства запампуйце карысны дапаможнік:",
                footer: {
                  title: "Як у любым узросце зарабляць навучаючыся?",
                  agree: "Вы згаджаецеся з умовамі апрацоўкі персанальных дадзеных"
                }
              }
            }
          },
          de: {
            translation: {
              header: {
                logo: "Internationale Online-Plattform der Autorenkurse",
                navbar: {
                  courses: "Kurse",
                  authors: "Autoren",
                  about_platform: "Über die Plattform",
                  partners_program: "Partnersprogramm",
                  successful_stories: "Erfolgsgeschichten",
                  own_course: "Eigener Kurs",
                  answers: "Antworten auf die Fragen"
                }
              },
              button: {
                sign_in: "Anmeldung",
                sign_up: "Registrierung",
                register: "Registrieren und mehr Information erfahren",
                start_free: "Kostenlos beginnen",
                find_out_more: "Mehr Information erfahren",
                download: "Downloaden"
              },
              main: {
                title: "Moderne Ausbildung <span>ohne</span> Grenzen",
                description: "mit Möglichkeit, Einkommen zu erzielen",
                list_info: {
                  any_age: "Für jedes <br> Alter",
                  unlimited_access: "Unbegrenzter <br> Zugang",
                  areas_of_study: "8 Richtungen <br> der Bildung"
                }
              },
              become: {
                title: "Werde ein moderner <br> und gefragter <br><span class=\"text-stroke\">Spezialist</span>",
                description: "Wir laden in <span>eine einzigartige Gemeinschaft von Profis auf ihrem Gebiet, Youngstern und einfach motivierten Menschen</span><br />aus verschiedenen Gebieten rund um den Globus",
                main: {
                  intro: "In der «Lime Academy» <span>kann man aktuelle Kenntnisse und nötige Fertigkeiten erwerben</span>, um neue Internet-Berufe auszulernen und sich selbst zu verwirklichen",
                  info: "Wir <span>haben Theorie und Praxis in ein System vereinigt,</span> dank dessen die Benutzer unserer Plattform bereits während der Schulung zu verdienen beginnen!",
                  mission: "Unsere Mission ist es, die Menschen </strong> auf der ganzen Welt in einer Gemeinschaft zu vereinen, die Bedingungen für Erschließung ihres kreativen Potentials zu schaffen und jedem Menschen beizubringen, mit Hilfe moderner Technologien Geld zu verdienen"
                },
                about: {
                  programs: "<div class=\"become-circle__title\">80<span>+</span></div> <div class=\"become-circle__text\">Trainings</div> programme",
                  trainers: "<div class=\"become-circle__title\">50<span>+</span></div> <div class=\"become-circle__text\">fachkundige Trainer</div>",
                  members: "<div class=\"become-circle__text\">mehr als</div> <div class=\"become-circle__title become-circle__title-small\">300<span>k</span></div> <div class=\"become-circle__text\">Menschen in unserer Gemeinschaft </div>"
                }
              },
              direction: {
                header: {
                  title: "Wähle die beste <span class=\"text-stroke text-stroke__green\">Richtung</span> für sich selbst",
                  text: "<p><span>Kurse für jeden Wissensstand und jedes Ziel</span> </p> <p>Hochschulbildung oder vorherige Vorbereitung <span>sind nicht erforderlich</span></p>"
                },
                buttons: [
                  "Persönliches Wachstum",
                  "Marketing",
                  "Allgemeinbildende Kurse",
                  "Fremdsprachen",
                  "Finanzen",
                  "Digitale Kompetenz",
                  "Spezialkurse",
                  "Alle Richtungen"
                ],
                slider: {
                  title: [
                    "Ressource",
                    "Selbstanalyse",
                    "Selbstpräsentation",
                    "Eigene Brandmarke im Internet",
                    "Motivation",
                    "Einstellungen",
                    "Einfluss auf den Käufer",
                    "So erzählen Sie über Ihr Unternehmen im Internet",
                    "Menschen, Prozesse, Technologien",
                    "Verkauf durch Werte",
                    "Auspacken der Persönlichkeit",
                    "Käuferverhalten",
                    "Entwicklung eigener Brandmarke",
                    "Entwicklung der Online-Unternehmensstrategie",
                    "So verbessern Sie die Unternehmenseffizienz im Suchnetzwerk"
                  ],
                  descriptions: [
                    "Sie erfahren, wie Ihr Zustand den Umsatz beeinflusst und was Sie und Ihre Kunden daran hindert, in der Ressource zu sein. Machen Sie sich mit den Wahrnehmungskanälen vertraut, über die Menschen Informationen erhalten.",
                    "Der Kunde ist Ihr Spiegelbild. Deshalb müssen Sie zunächst verstehen, nicht wie man an einen Kunden verkauft, sondern wie man an sich selbst verkauft. Schauen Sie tiefer in sich hinein und analysieren Sie, wie Sie sich präsentieren und wie Sie wahrgenommen werden.",
                    "Selbstpräsentation ist die Fähigkeit, ein positives Bild von sich selbst zu schaffen, um Ihren Kunden oder Ihr Publikum zu interessieren. Die Fähigkeit zur Selbstpräsentation ist eine Schlüsselkompetenz, von der aus die Entwicklung einer persönlichen Marke Brandmarke beginnt.",
                    "Die Entwicklung der eigenen Brandmarke ist in der modernen Welt ohne soziale Netzwerke nicht möglich. Im Kurs lernen Sie, wie Sie Ihre Nische in sozialen Netzwerken finden, sich nicht zwischen Konkurrenten verirren und Ihren Blog monetisieren.",
                    "Gibt es bei Ihnen Fälle, in denen Sie etwas wirklich wollen, aber auf die lange Bank schieben und später überhaupt nicht realisieren? Der Grund ist ein Mangel an Motivation. Im Kurs analysieren wir: Woher kommt die Motivation und wie man ihr Niveau selbstständig erhöhen kann?",
                    "Was ist der Unterschied zwischen dem Denken der „Armen“ und „Reichen“? Warum schreitet jemand mit Leichtigkeit durch das Leben und gelingt ihm alles, während andere Menschen endlos an eigenen Fähigkeiten und Stärken zweifeln?",
                    "Die Hauptregel eines guten Managers ist, dass der Kunde immer an der ersten Stelle steht. Das Wichtigste ist sein Wohlbefinden und Wohlstand.",
                    "Wählen Sie Ihren Lernpfad: Business, eigene Brandmarke oder Marketing. Erfahren Sie, wie Sie mehr Kunden und Follower in Instagram gewinnen",
                    "Wir kaufen kein Produkt oder keine Dienstleistung, sondern den Zustand, den uns diese Waren, Dienstleistungen oder die Menschen, die sie verkaufen, geben. Dies nennt man den „Ansteckungseffekt“.",
                    "Sie lernen, was Werte im Verkauf bedeuten und wie Sie diese als Mittel zum Erfolg einsetzen. Sie lernen das Konzept des „Auspackens der Persönlichkeit“ kennen und erfahren, wie Sie Fehler in diesem Prozess vermeiden.",
                    "Eigene Brandmarke ist das, was Sie von Ihren Mitbewerbern unterscheidet, Ihr individueller Ansatz, ein Produkt zu präsentieren oder ein Unternehmen zu führen. Machen Sie den ersten Schritt, um sie zu schaffen!",
                    "Lernen Sie, den Wert des Produkts in die Kommunikation zu packen, entwickeln Sie eine Promotionsstrategie und bringen das Produkt auf den Markt. Stärken Sie Ihre Marketingfähigkeiten mit einem Produktherangehen."
                  ],
                  modules: [
                    "2 Module",
                    "4 Module",
                    "5 Module",
                    "6 Module",
                    "8 Module"
                  ]
                },
                footer: {
                  text: "<span>Melde jetzt an</span> und wähle die Richtung"
                }
              },
              authors: {
                title: "<span class=\"text-stroke text-stroke__green\">Autoren <br></span>der Kurse",
                description: "Unsere Experte <span>führen zum Ziel</span> und sorgen, dass das Interesse am Lernen nicht nachlässt",
                list: [
                  {
                    name: "Ajnur SINNATULIN",
                    description: "Unternehmer, <br> Fernseh- und Radiomoderator. <br> Gewinner des \"Teffi\"-Preises",
                    more_info: "Autor der Bücher «Angstpille», «5 Schritte zu Ihrem idealen Interview», «Nur Angst stört Dich», «Kunst, fremde Menschen zu bezaubern». Lehrer für Redekunst und öffentliche Rede. Ein Mann mit viel Humor."
                  },
                  {
                    name: "Alija <br>Hurmatowa",
                    description: "Erfolgreiche Praktikerin des Online-<br class=\"mobile_break\"> und Offline-Vertriebs.<br> Autorin des Zyklus von Online-Kursen<br> und persönliche Beraterin",
                    more_info: "Alija Hurmatowa ist eine Expertin für Vertrieb, Offline- und Online-Promotion sowie Spezialistin für Unternehmensberatung. Professioneller Business Coach mit über 14 Jahren Erfahrungen. Seit 2016 berät und führt sie Firmenschulungen für große Netzwerkunternehmen sowie Autorenschulungen für Führungskräfte und Top-Manager in verschiedenen Geschäftsbereichen durch. Ihr Kurs ermöglicht es Ihnen, Ihre Kompetenz im Bereich Vertrieb deutlich zu steigern."
                  },
                  {
                    name: "Julia Dolgowa",
                    description: "Unternehmerin, Psychologin,<br> Coach für Energetik.<br>Autorin des Buches «Grundsatz von Dolgowa»",
                    more_info: "Im Laufe von 13 Jahren hat Julia Dolgowa die besten Praktiken in Trainingsprogrammen zum Aufbau und zur Monetisierung eigenes Unternehmens für Anfänger und erfahrene Unternehmer verpackt. Ihr systematischer Lernansatz ermöglicht es Ihnen, Instabilität im Vertrieb zu vermeiden. Sie ist auch Organisatorin und Sprecherin großer Online- und Offline-Veranstaltungen."
                  },
                  {
                    name: "Anna Semenowa",
                    description: "Unternehmerin, Business Coach. <br> Autorin des Kurses<br class=\"mobile_break\"> «Große Leute - große Schecks». <br> Starke Motivatorin und Leiterin eines großen Teams",
                    more_info: "Große praktische Erfahrung von Anna Semenowa hat es ermöglicht, Wissen im System des Lernens «voller Zyklus» zu sammeln und zu systematisieren. Veranstalterin und Sprecherin von thematischen Online-Marathons. Immer einfach und zugänglich, durch konkrete Beispiele, lehrt sie, stabil zu verkaufen, ohne Spannung oder Angst."
                  },
                  {
                    name: "MILA MATWEEWA",
                    description: "Marketerin, Sprecherin, Motivatorin",
                    more_info: "Mehr als 20 Jahre Erfahrung in der Network-Marketing-Branche. Sie hat sich von angehender Verkäuferin zur Top-Führungskraft entwickelt. Sie hat sich erfolgreich in Unternehmen mit unterschiedlichen Tätigkeitsbereichen entwickelt. Im Training wird Mila Matweewa praktische Techniken demonstrieren, die Ihnen helfen, ein ausgezeichneter Psychologe für sich selbst zu werden, Ihr inneres Potenzial zu offenbaren und Ihren Cashflow zu öffnen."
                  },
                  {
                    name: "Anastasija Kotowa",
                    description: "Experrtin für Rethorik <br> und Bühnensprache",
                    more_info: "Autorin des Leitfadens für den Start des Anfängers «Erste Schritte\" und Schöpferin des Kurses \"5 Schritte des Verkaufs. Die Kunst des Dialogs. \" Anastasija Kotowas Kurs wird Ihnen helfen, Ihren Sprechapparat zu entwickeln und die Klemmen loszuwerden. Sie werden Ihren Wortschatz erweitern und erlernen so zu reden, dass die Zuhörer Ihnen buchstäblich \"in den Mund schauen\" werden",
                  },
                  {
                    name: "SWETLANA SKORNJAKOWA",
                    description: "Unternehmerin. Autorin des Kurses «Zielpublikum» <br> und der Trainings für Promotion in sozialen Netzwerken",
                    more_info: "Für 4 Jahre aktiver Arbeit im Internet hat Swetlana Skornjakowa effektive Tools ausgewählt, die es Ihnen ermöglichen, einen eingehenden Strom von Kunden und Partnern in Ihr Unternehmen zu bekommen. Der Kurs „Zielpublikum“ hilft Ihnen, die Gruppen Ihres Zielpublikums zu identifizieren und für jede der Gruppen ein Alleinstellungsmerkmal zu erstellen. Sie lernen die Methoden und Techniken der Arbeit kennen, erstellen Ihren Inhaltsplan, lernen, wie Sie Geschäftspartner über das Internet finden."
                  },
                  {
                    name: "EWGENIJ und OLGA ZHARKOW",
                    description: "MLM-Unternehmer. <br>Experten in der Arbeit mit dem \"kalten\" Kreis",
                    more_info: "Im Kurs von Ewgenij und Olga Zharkow lernen Sie, wo Sie die Telefonnummern potenzieller Partner bekommen, wie Sie Ihr Telefonverzeichnis mit den Kontakten von Geschäftskandidaten richtig pflegen. Sie lernen das Zielpublikum zu identifizieren und erhalten Skripte für Telefonanrufe, beherrschen die Technik der „Kaltakquise“. Ewgenij und Olga werden Ihnen beibringen, Angst zu überwinden, und psychologische Techniken für effektive Tätigkeit teilen."
                  }
                ]
              },
              opportunities: {
                title: "Ihre <span class=\"opportunities-header__white\">Möglichkeiten</span> für das Lernen haben keine Grenzen",
                list: [
                  {
                    title: "Überall",
                    text: "Lernen Sie zu Hause, unterwegs, im Urlaub oder in der Mittagspause"
                  },
                  {
                    title: "Wann immer",
                    text: "Lernen Sie in Ihrem eigenen Tempo ohne Zeitbegrenzung"
                  },
                  {
                    title: "In jeder Reihenfolge",
                    text: "Nehmen Sie an mehreren Kursen gleichzeitig oder nacheinander teil"
                  }
                ]
              },
              community: {
                title: "Die größte<span class=\"text-stroke text-stroke__green\">Gemeinschaft</span> der Spezialisten, Experte, erfahrenen Benutzer und Anfänger",
                list: [
                  {
                    title: "Gleichgesinnte",
                    text: "Sie lernen, besprechen Probleme mit dem Lehrer und helfen den Anfängern"
                  },
                  {
                    title: "Kommunikation",
                    text: "Kommunikation mit Kursautoren, Sprechern, Chats, Videokonferenzen"
                  },
                  {
                    title: "Atmosphäre",
                    text: "Es ist warm und gemütlich auf unserer Plattform"
                  }
                ]
              },
              tools: {
                title: "Wir haben die besten Tools zum <span class=\"text-stroke text-stroke__green\">Lernen geschaffen",
                text: "Lernplattform <br><span>mit voller Funktionalität</span>",
                list: [
                  {
                    title: "Wissensbasis",
                    text: "Lange Studienprogramme, kurze Intensivkurse"
                  },
                  {
                    title: "Personalisiertes Lernen",
                    text: "Sie wählen selbst interessante Kurse, Chats und Webinare"
                  },
                  {
                    title: "Webinare und Online-Chats",
                    text: "Online-Chats mit Lehrern und Teams, Audio- und Videoübertragungen"
                  },
                  {
                    title: "Überprüfung der eigenen Leistung",
                    text: "Mit Hilfe Ihres persönlichen Profils können Sie Ihren Lernfortschritt verfolgen"
                  },
                  {
                    title: "Erfolge, Auszeichnungen und Bewertungen",
                    text: "Wettbewerbe, einzigartige Aufgaben und Erfolge"
                  },
                  {
                    title: "Spiele und Freizeit",
                    text: "Spiele, Foren und Chats zu verschiedenen Themen sind auf der Plattform verfügbar"
                  }
                ],
                footer: {
                  text: "<span>Nimm an einem kostenlosen Einführungskurs</span> zum Arbeiten auf der Plattform teil"
                }
              },
              history: {
                header: "Lass dich <br><span class=\"text-stroke text-stroke__green\">von Erfolggeschichten</span> <br> und Trainingsbewertungen inspirieren",
                successful_stories: "Erfolgsgeschichten",
                review: "Trainigsbewertungen"
              },
              create: {
                title: "Erstelle und <span class=\"opportunities-header__white2 create-header__white\">verkaufe</span> <span class=\"create-header__stroke text-stroke\">eigene <img loading=\"lazy\" src=\"img/create/star.png\" alt=\"\"> Kurse</span> <br class=\"hidden-desktop\"> weltweit",
                list: [
                  {
                    title: "Schnittstelle",
                    text: "<span>Benutzerfreundliche Schnittstelle.</span> Alles klar sogar ohne </span> Anweisungen"
                  },
                  {
                    title: "Funktionalität",
                    text: "Tools für alle <br> Formen der Online-Schulung</span>"
                  },
                  {
                    title: "Anpassungsfähigkeit",
                    text: "Plattformschnittstelle ist für alle Gadgets angepasst"
                  },
                  {
                    title: "Shop der Kurse",
                    text: "Nützliche Themen nach Interessen"
                  },
                  {
                    title: "Back-Office",
                    text: "Statistik und Verwaltung aller Prozesse von einem persönlichen Konto aus"
                  },
                  {
                    title: "Möglichkeiten",
                    text: "Entwickle und verkaufe dein Fachwissen in jedem Tätigkeitsbereich"
                  },
                  {
                    title: "Boni",
                    text: "Kostenlose Kurse für Erfolge auf Plattform"
                  },
                  {
                    title: "Partnerprogramme",
                    text: "Automatische Belohnungen für den Ausbau des Kundennetzwerks"
                  }
                ],
                footer: {
                  title: "<span>Erstelle spannende Kurse und <span class=\"text-stroke text-stroke__green\">verdiene</span> <br> dank eigenem <img loading=\"lazy\" src=\"img/create/star_green.png\" alt=\"\"> Fachwissen</span>"
                }
              },
              talk: {
                title: "Рассказывай о возможностях платформы и <span><div class=\"talk-header__circles\"><div class=\"talk-header__circle\"></div><div class=\"talk-header__circle\"></div></div> зарабатывай </span> <br> в партнёрских программах",
                list_info: [
                  "<div class=\"talk-circle__text\">mehr als</div><div class=\"talk-circle__title talk-circle__title-small\">300<span>к</span></div><div class=\"talk-circle__text\">Partner <br> weltweit <br> </div>",
                  "<div class=\"talk-circle__text\">mehr als</div><div class=\"talk-circle__title talk-circle__title-small\">50<span>k <span class=\"talk-circle__text__dollar\">$</span></div><div class=\"talk-circle__text\">wurde an<br> Partner ausgezahlt</div>",
                  "<div class=\"talk-circle__title\">1500<span>+</span></div><div class=\"talk-circle__text\">neue Kunden<br> jeden<br> Monat</div>",
                  "<div class=\"talk-circle__text\">mehr als</div><div class=\"talk-circle__title talk-circle__title-small\">2 <span>Jahre</span></div><div class=\"talk-circle__text\">in der Online-<br> Ausbildung</div>"
                ]
              },
              calculator: {
                title: "Für wen passt dies?",
                list: [
                  "Für alle, die mit <br> dem Verkauf der Bildungsprodukte <br> verdienen wollen",
                  "Für Blogger, Inhaber <br> der Telegram-Kanäle und Websites",
                  "Für angehende und erfahrene Internet-<br>Unternehmer, Marktforscher, <br> Experte der Netzindustrie"
                ],
                footer: {
                  title: "Beginnen Sie sofort <span>zu verdienen</span>",
                  text: "Einfach empfehlen Sie uns Ihren Bekannten"
                },
                main: {
                  title: "Wie viel kann man mit dem Verkauf seines Kurses verdienen?",
                  text: "Wählen Sie <span>Währung</span>",
                  sold_courses: "<span>Anzahl</span> <br class=\"hidden-mobile\"> der verkauften Kurse <br class=\"hidden-mobile\"> pro Monat",
                  average_cost: "<span>Mittel- <br class=\"hidden-mobile\"> Preis <br class=\"hidden-mobile\"></span> eines Kurses",
                  remuneration: "Ihre Belohnung: <br class=\"hidden-desktop\"> <span>pro Monat <span class=\"calculator-main__total-result\">700</span></span>"
                }
              },
              answer: {
                title: "Für wen passt dies?",
                list: [
                  {
                    title: "Kann ich die Plattform von einem mobilen Gerät aus nutzen?",
                    text: "Die Plattform ist für eine Vielzahl von Geräten verfügbar, einschließlich Desktop, Laptop, Tablet oder Handy."
                  },
                  {
                    title: "Wie viel Zeit sollte ich dem Training widmen? Ich arbeite auch!",
                    text: "Sie wählen selbst einen bequemen Lernrhythmus und -plan. Die meisten Nutzer kombinieren unsere Akademie und Arbeit. Viele von ihnen haben ihre unselbständige Tätigkeit bereits vollständig aufgegeben und entwickeln sich und verdienen jetzt nur noch online."
                  },
                  {
                    title: "Wie finde ich den richtigen Kurs?",
                    text: "Sie müssen sich kostenlos auf der Plattform registrieren, an einem Einführungskurs teilnehmen, in Ihrem persönlichen Konto eine kurze Beschreibung der Produkte lesen und den für Sie relevanten Kurs auswählen.<br /> Sie können sich auch an aktive Benutzer und Experten unserer Plattform wenden, die Ihnen bei der Navigation und Auswahl des richtigen Kurses helfen."
                  },
                  {
                    title: "Was macht Sie besser als andere Plattformen?",
                    text: "Der Perfektion sind keine Grenzen gesetzt... Zu sagen, dass jemand besser und jemand schlechter ist, ist nicht ganz richtig und korrekt. Unsere Aufgabe ist das positive Ergebnis jedes Teilnehmers. Wir erfüllen einfach unsere Aufgaben und tun unser Bestes. Wie es uns gelingt, fragen Sie am besten unsere Kunden. Schauen Sie sich die Bewertungen an. Wir bieten auch eine kostenlose Registrierung an. Dann lernen Sie die Plattform von innen kennen. Wir sind sicher, dass dies Ihnen gefallen wird!“"
                  },
                  {
                    title: "Wie ist die Schulung organisiert?",
                    text: "Grundlage jedes Kurses sind Vorlesungen, die Videos, Folien, Texte, Anleitungen und Anlagen für praktische Übungen beinhalten können. Die Plattform verfügt außerdem über Chats, in denen Nutzer im Lernprozess kommunizieren und Erfahrungen austauschen, Foren zu relevanten Themen, regelmäßige Online-Sendungen und Webinare."
                  },
                  {
                    title: "Ich möchte lernen, wie man Geld verdient. Kann mir Ihre Plattform dabei helfen?",
                    text: "Natürlich! Unsere Plattform enthält Kurse, die auf der persönlichen Erfahrung von praktizierenden Internetunternehmern und Netzwerkgeschäftsführern basieren. Darüber hinaus haben wir ein sehr großzügiges Werbe- und Bonus-Sammelprogramm, mit dem Sie bereits während des Lernprozesses Geld verdienen können. Es besteht auch die Möglichkeit, Autor von Kursen auf unserer Plattform zu werden und durch deren Verkauf Geld zu verdienen!“"
                  }
                ]
              },
              footer: {
                copyright: "Copyright 2022 <br> Alle Rechte vorbehalten",
                platform_policy: "Plattformrichtlinie (herunterladen)",
                privacy_policy: "Datenschutzerklärung",
                application: [
                  "Anlage Nr.1",
                  "Anlage Nr.2",
                  "Anlage Nr.3",
                  "Anlage Nr.4",
                  "Anlage Nr.5"
                ],
                paradigma: "Mit Liebe gemacht <br> mittels paradigma.website"
              },
              popup_login: {
                button: "Login",
                forgot_password: "Haben Sie Ihr Passwort vergessen?"
              },
              popup_register: {
                button: "Anmelden",
                account_exists: "Haben Sie schon einen Account? <span>Login</span>",
                register_button: "Melden Sie an",
                learn_more: "Mehr Information"
              },
              popup_leave: {
                title: "GEHEN SIE SCHON?",
                text: "Als Zeichen unserer Bekanntschaft, laden Sie ein nützliches Handbuch herunter:",
                footer: {
                  title: "Wie kann man in jedem Alter neben dem Studium Geld verdienen?",
                  agree: "Sie stimmen den Bedingungen der Verarbeitung personenbezogener Daten zu"
                }
              }
            }
          },
          hy: {
            translation: {
              header: {
                logo: "Հեղինակային իրավունքի դասընթացների միջազգային առցանց հարթակ",
                navbar: {
                  courses: "Դասընթացներ",
                  authors: "Հեղինակներ",
                  about_platform: "Հարթակի մասին",
                  partners_program: "Գործընկերային ծրագիր",
                  successful_stories: "Հաջողության պատմություն",
                  own_course: "Իմ դասընթացը",
                  answers: "Հարցերի պատասխաններ"
                }
              },
              button: {
                sign_in: "Մուտք",
                sign_up: "Գրանցում",
                register: "Գրանցվեք և իմացեք ավելին",
                start_free: "Սկսել անվճար",
                find_out_more: "Իմանալ ավելին",
                download: "Ներբեռնել"
              },
              main: {
                title: "ժամանակակից կրթություն <span> առանց </span> սահմանափակումների",
                description: "եկամուտ ստանալու հնարավորությամբ",
                list_info: {
                  any_age: "Ցանկացած <br> տարիքի համար",
                  unlimited_access: "Անսահմանափակ <br> հասանելիություն",
                  areas_of_study: "8 ուղղություն <br> կրթության համար"
                }
              },
              become: {
                title: "Դարձիր ժամանակակից <br> և պահանջված <br><span class=\"text-stroke\">մասնագետ</span>",
                description: "Հրավիրում ենք <span>իրենց ոլորտում պրոֆեսիոնալների եզակի համայնք, սկսնակ և պարզապես հետաքրքրասեր մարդկանց</span><br />ամբողջ աշխարհի գործունեության տարբեր ոլորտներից",
                main: {
                  intro: "«Lime Academy» <span>դուք կարող եք ձեռք բերել համապատասխան գիտելիքներ և անհրաժեշտ հմտություններ</span> տիրապետել ինտերնետի նոր մասնագիտություններին և հաջողությամբ իրացնել դրանց ներուժը",
                  info: "Մենք <span>տեսությունը և պրակտիկան համակարգի մեջ,</span> ինչի շնորհիվ մեր հարթակի օգտատերերը սկսում են վաստակել արդեն ուսման ժամանակ",
                  mission: "Մեր առաքելությունը մարդկանց համախմբելն է </strong> ամբողջ աշխարհում դառնալ գործընկերային համայնք, ստեղծել պայմաններ իրենց ստեղծագործական ներուժի բացահայտման համար և յուրաքանչյուր մարդու սովորեցնել գումար վաստակել ժամանակակից տեխնոլոգիաների միջոցով։"
                },
                about: {
                  programs: "<div class=\"become-circle__title\">80<span>+</span></div> <div class=\"become-circle__text\">կրթական ծրագրեր</div>",
                  trainers: "<div class=\"become-circle__title\">50<span>+</span></div> <div class=\"become-circle__text\">փորձագետ մարզիչներ</div>",
                  members: "<div class=\"become-circle__text\">ավելի քան</div> <div class=\"become-circle__title become-circle__title-small\">300<span>к</span></div> <div class=\"become-circle__text\">մարդ մեր համայնքում </div>"
                }
              },
              direction: {
                header: {
                  title: "Ընտրեք լավագույն <span class=\"text-stroke text-stroke__green\">ուղղությունը</span> քեզ համար",
                  text: "<p><span>Դասընթացներ ցանկացած մակարդակի գիտելիքների և նպատակների համար</span> </p> <p>Բարձրագույն կրթություն կամ ցանկացած նախնական ուսուցում <span>չի պահանջվում</span></p>"
                },
                buttons: [
                  "Անձնական աճ",
                  "Մարքեթինգ",
                  "Հանրակրթական",
                  "Օտար լեզուներ",
                  "Ֆինանսներ",
                  "Թվային գրագիտություն",
                  "Հատուկ",
                  "Բոլոր ուղղությունները"
                ],
                slider: {
                  title: [
                    "Ռեսուրս",
                    "Ինքնավերլուծություն",
                    "Ինքնաներկայացում",
                    "Անձնական ապրանքանիշ ինտերնետում",
                    "Մոտիվացում",
                    "Կարգավորումներ",
                    "Ազդեցություն գնորդի վրա",
                    "Ինչպես գովազդել ձեր ընկերությունը առցանց",
                    "Մարդիկ, գործընթացներ, տեխնոլոգիաներ",
                    "Վաճառք արժեքների միջոցով",
                    "Անհատականության բացում",
                    "Գնորդի վարքագիծը",
                    "Անձնական ապրանքանիշի զարգացում",
                    "Բիզնեսի զարգացման ռազմավարության մշակում առցանց",
                    "Ինչպես բարելավել որոնման ցանցի ձեր արշավների արդյունավետությունը"
                  ],
                  descriptions: [
                    "Դուք կսովորեք, թե ինչպես է ձեր վիճակը ազդում վաճառքի վրա և ինչն է խանգարում ձեզ և ձեր հաճախորդներին լինել ռեսուրսի մեջ: Կծանոթանաք ընկալման ուղիներին, որոնց միջոցով մարդիկ տեղեկատվություն են ստանում։",
                    "Հաճախորդը ձեր արտացոլումն է: Հետևաբար, նախ և առաջ, դուք պետք է հասկանաք ոչ թե ինչպես վաճառել հաճախորդին, այլ ինչպես վաճառել ինքներդ ձեզ: Խորը նայեք ինքներդ ձեզ և վերլուծեք, թե ինչպես եք ներկայանում և ինչպես են ձեզ ընկալում։",
                    "Ինքնաներկայացումը ձեր մասին դրական պատկեր ստեղծելու, հաճախորդին կամ հանդիսատեսին հետաքրքրելու ունակությունն է: Ինքնաներկայացման հմտությունը առանցքային հմտություն է, որից սկսվում է անհատական ​​ապրանքանիշի զարգացումը:",
                    "Անձնական ապրանքանիշի զարգացումը հնարավոր չէ այսօրվա աշխարհում առանց սոցիալական մեդիայի: Դասընթացի ընթացքում դուք կսովորեք, թե ինչպես գտնել ձեր տեղը սոցիալական ցանցերում, չմոլորվել մրցակիցների մեջ և դրամայնացնել ձեր բլոգը։",
                    "Երբևէ ունեցե՞լ եք ինչ-որ բան, որն իսկապես ցանկանում եք, բայց այն հետաձգել եք «ավելի ուշ»-ի համար, որը երբեք չի գալիս: Պատճառը մոտիվացիայի բացակայությունն է։ Դասընթացի ընթացքում մենք կվերլուծենք, որտեղից է գալիս մոտիվացիան և ինչպես ինքնուրույն բարձրացնել դրա մակարդակը ինքներդ ձեզ համար։",
                    "Ո՞րն է տարբերությունը «աղքատների» և «հարուստների» մտածողության միջև: Ինչո՞ւ է ինչ-որ մեկը հեշտությամբ անցնում կյանքի միջով և հաջողության է հասնում ամեն ինչում, մինչդեռ մյուսներն անվերջ կասկածում են սեփական կարողություններին և ուժերին:",
                    "Լավ մենեջերի հիմնական կանոնն այն է, որ հաճախորդը միշտ առաջին տեղում է: Ամենակարևորը նրա ինքնազգացողությունն ու բարեկեցությունն է։",
                    "Ընտրեք ձեր ուսումնական ուղին՝ բիզնես, անձնական ապրանքանիշ կամ շուկայավարություն: Իմացեք, թե ինչպես ստանալ ավելի շատ հաճախորդներ և հետևորդներ Instagram-ում",
                    "Մենք ապրանք կամ ծառայություն չենք գնում, այլ պետությունը, որը տալիս են այդ ապրանքներն ու ծառայությունները մեզ կամ այն ​​մարդկանց, ովքեր վաճառում են դրանք: Սա կոչվում է «Վարակիչ էֆեկտ»:",
                    "Դուք կսովորեք, թե ինչ արժեքներ կան վաճառքում և ինչպես դրանք օգտագործել որպես հաջողության միջոց: Ծանոթացե՛ք «անհատականությունը բացելու» հայեցակարգին և սովորե՛ք, թե ինչպես խուսափել սխալներից այս գործընթացում։",
                    "Անձնական բրենդն այն է, ինչը ձեզ առանձնացնում է ձեր մրցակիցներից, ձեր անհատական ​​մոտեցումը ապրանքը ներկայացնելու կամ բիզնես վարելու հարցում: Առաջին քայլն արեք այն ստեղծելու ուղղությամբ:",
                    "Սովորեք փաթեթավորել ապրանքի արժեքը հաղորդակցության մեջ, մշակեք ռազմավարություն՝ ապրանքը շուկա հանելու և գովազդելու համար: Ամրապնդեք ձեր մարքեթինգային հմտությունները արտադրանքի մոտեցմամբ"
                  ],
                  modules: [
                    "2 մոդուլ",
                    "4 մոդուլ",
                    "5 մոդուլ",
                    "6 մոդուլ",
                    "8 մոդուլ"
                  ]
                },
                footer: {
                  text: "<span>Միացեք հիմա</span> և ընտրեք ուղղությունը"
                }
              },
              authors: {
                title: "<span class=\"text-stroke text-stroke__green\">Դասընթացների<br></span>հեղինակներ",
                description: "Մեր փորձագետները <span>տանում են նպատակին</span> և հետևում, որպեսզի սովորելու նկատմամբ հետաքրքրությունը չմարի",
                list: [
                  {
                    name: "Այնուր ԶԻՆՆԱՏՈՒԼԻՆ",
                    description: "Ձեռնարկատեր, <br> Հեռուստահաղորդավար և ռադիոհաղորդավար։ <br> «Տեֆֆի» մրցանակակիր",
                    more_info: "Վախի հաբ, 5 քայլ դեպի ձեր կատարյալ հարցազրույց, Միայն վախը կանգնեցնում է ձեզ, Հմայիչ անծանոթների արվեստը գրքերի հեղինակ: Հանրային խոսքի և հրապարակախոսության մարզիչ: Հումորի մեծ զգացում ունեցող մարդ։"
                  },
                  {
                    name: "Ալիյա <br>Խուրմատովա",
                    description: "Հաջողակ պրակտիկ առցանց<br class=\"mobile_break\"> և օֆլայն վաճառք։<br> Առցանց դասընթացների շարքի հեղինակ<br> և անձնական խորհրդատու",
                    more_info: "Ալիյա Խուրմատովան վաճառքի, օֆլայն և առցանց առաջխաղացման փորձագետ է, ինչպես նաև բիզնես խորհրդատվության մասնագետ։ Պրոֆեսիոնալ բիզնես մարզիչ՝ ավելի քան 14 տարվա փորձով: 2016թ.-ից նա խորհրդատվություն և կորպորատիվ թրեյնինգ է անցկացնում ցանցային խոշոր ընկերությունների համար, ինչպես նաև մենեջերների և թոփ մենեջերների համար դասընթացների հեղինակ է տարբեր բիզնես ոլորտներում: Նրա դասընթացը թույլ կտա էապես բարելավել ձեր իրավասությունների մակարդակը վաճառքի ոլորտում:"
                  },
                  {
                    name: "Յուլիա Դոլգովա",
                    description: "Ձեռնարկատեր, հոգեբան,<br> էներգետիկ մարզիչ <br>«Պարտքի սկզբունքը» գրքի հեղինակ",
                    more_info: "13 տարվա ընթացքում Յուլիա Դոլգովան լավագույն փորձը փաթեթավորել է բիզնեսի կառուցման և դրամայնացման ուսուցման ծրագրերում ինչպես սկսնակների, այնպես էլ փորձառու ձեռներեցների համար: Նրա համակարգված մոտեցումը մարզումների նկատմամբ թույլ կտա վերացնել վաճառքի անկայունությունը: Նա նաև առցանց և օֆլայն լայնածավալ միջոցառումների կազմակերպիչն ու խոսնակն է:"
                  },
                  {
                    name: "Աննա Սեմենովա",
                    description: "Ձեռնարկատեր, բիզնես մարզիչ. <br> Դասընթացի հեղինակ <br class=\"mobile_break\"> «Մեծ մարդիկ՝ մեծ չեկեր»։ <br> Հզոր մոտիվատոր և հիանալի թիմի առաջնորդ",
                    more_info: "Աննա Սեմենովայի մեծ պրակտիկ փորձը թույլ տվեց նրան կուտակել և համակարգել գիտելիքները «ամբողջական ցիկլի» վերապատրաստման համակարգում: Թեմատիկ առցանց մարաթոնների կազմակերպիչ և բանախոս։ Միշտ պարզ և մատչելի լեզվով, կոնկրետ օրինակների միջոցով նա սովորեցնում է ձեզ հետևողականորեն վաճառել առանց սթրեսի և վախի:"
                  },
                  {
                    name: "ՄԻԼԱ ՄԱՏՎԵԵՎԱ",
                    description: "Շուկայավարող, խոսնակ, մոտիվատոր",
                    more_info: "Ավելի քան 20 տարվա փորձ ցանցային շուկայավարման ոլորտում: Սկսնակ վաճառողից դարձավ բարձրագույն ղեկավար: Հաջողությամբ զարգացել է տարբեր գործունեություն իրականացնող ընկերություններում: Դասընթացի ընթացքում Միլա Մատվեևան կբացահայտի գործնական տեխնիկա, որոնք կօգնեն ձեզ դառնալ հիանալի հոգեբան ինքներդ ձեզ համար, բացել ձեր ներքին ներուժը և բացել ձեր դրամական հոսքերը»:"
                  },
                  {
                    name: "Անաստասիա Կոտովա",
                    description: "Հանրային խոսքի ոլորտի <br> և բեմական խոսքի փորձագետ",
                    more_info: "Հեղինակ է մեկնարկի՝ «Առաջին քայլեր\" և\"Վաճառքի 5 քայլ։Երկխոսության արվեստը։դասընթացի հեղինակ\" Անաստասիա Կոտովայի դասընթացը կօգնի ձեզ զարգացնել ձեր խոսքի ապարատը և ազատվել բարդույթներից։ Դուք կկարողանաք ընդլայնել ձեր բառապաշարը և սովորել, թե ինչպես ստիպել ունկնդիրներին բառացիորեն «նայել ձեր բերանը»:"
                  },
                  {
                    name: "ՍՎԵՏԼԱՆԱ ՍԿՈՐՆՅԱԿՈՎԱ",
                    description: "Ձեռնարկատեր։ «Թիրախային լսարան» դասընթացի և թրենինգի <br> հեղինակ սոցցանցերում զարգացնելու համար",
                    more_info: "Ինտերնետում 4 տարվա ակտիվ աշխատանքի համար Սվետլանա Սկորնյակովան ընտրել է արդյունավետ գործիքներ, որոնք թույլ են տալիս ստանալ հաճախորդների և գործընկերների մուտքային հոսք ձեր բիզնեսում: «Թիրախային լսարան» դասընթացը կօգնի ձեզ բացահայտել ձեր թիրախային լսարանի խմբերը, խմբերից յուրաքանչյուրի համար կազմել USP: Դուք կծանոթանաք աշխատանքի մեթոդներին և տեխնիկային, կկազմեք ձեր բովանդակության պլանը, կսովորեք, թե ինչպես գտնել բիզնես գործընկերներ ինտերնետի միջոցով:"
                  },
                  {
                    name: "ԵՎԳԵՆԻ ԵՎ ՕԼԳԱ ԺԱՐԿՈՎՆԵՐ",
                    description: "ՄԼՄ ձեռնարկատերեր. <br>\"Սառը\" շրջանակի հետ աշխատելու փորձագետներ",
                    more_info: "Եվգենի և Օլգա Ժարկովների դասընթացի ընթացքում դուք կսովորեք, թե որտեղից կարելի է ստանալ պոտենցիալ գործընկերների հեռախոսահամարները, ինչպես ճիշտ պահել ձեր հեռախոսային տեղեկատուն՝ բիզնես թեկնածուների կոնտակտներով: Դուք կսովորեք, թե ինչպես բացահայտել թիրախային լսարանը և ստանալ հեռախոսազանգերի սցենարներ, տիրապետել «սառը զանգի» տեխնիկայի հմտությանը: Յուլիան և Օլգան կսովորեցնեն ձեզ, թե ինչպես հաղթահարել վախը և կիսվել արդյունավետ աշխատանքի հոգեբանական տեխնիկայով։"
                  }
                ]
              },
              opportunities: {
                title: "Դուք <span class=\"opportunities-header__white\">սահմանափակված չեք</span> կրթվելու հնարավորություններում",
                list: [
                  {
                    title: "Ամենուր",
                    text: "Սովորեք տանը, ճանապարհին, արձակուրդում կամ ձեր ընդմիջմանը"
                  },
                  {
                    title: "Երբ հարմար է",
                    text: "Սովորեք ձեր սեփական տեմպերով առանց ժամանակային սահմանափակումների"
                  },
                  {
                    title: "Ցանկացած կարգով",
                    text: "Անցեք մի քանի դասընթացներ միանգամից կամ հերթականությամբ"
                  }
                ]
              },
              community: {
                title: "Մեծագույն <span class=\"text-stroke text-stroke__green\">համայնք</span> մասնագետների, փորձագետների, փորձառու օգտվողների և սկսնակների",
                list: [
                  {
                    title: "Համախոհներ",
                    text: "Դուք սովորում եք, հարցերը քննարկում ուսուցչի հետ և օգնում սկսնակներին"
                  },
                  {
                    title: "Հաղորդակցություն",
                    text: "Հաղորդակցություն դասընթացի հեղինակների, բանախոսների, չաթերի, վիդեոկոնֆերանսների հետ"
                  },
                  {
                    title: "Մթնոլորտ",
                    text: "Մեր հարթակում՝ տանը տաք և հարմարավետ"
                  }
                ]
              },
              tools: {
                title: "Մենք ստեղծել ենք լավագույն գործիքները <span class=\"text-stroke text-stroke__green\">ուսման համար",
                text: "Կրթական հարթակ <br><span>լիարժեք ֆունկցիոնալությամբ</span>",
                list: [
                  {
                    title: "Գիտելիքների շտեմարան",
                    text: "Երկար վերապատրաստման ծրագրեր, կարճ ինտենսիվություններ"
                  },
                  {
                    title: "Անհատականացված ուսուցում",
                    text: "Դուք ընտրում եք հետաքրքիր դասընթացներ, չաթեր և վեբինարներ"
                  },
                  {
                    title: "Վեբինարներ և առցանց չաթ",
                    text: "առցանց չաթ ուսուցիչների և թիմերի հետ, աուդիո և վիդեո հեռարձակումներ"
                  },
                  {
                    title: "Ձեր սեփական առաջընթացի մոնիտորինգ",
                    text: "Ձեր անձնական հաշվի օգնությամբ դուք կարող եք հետևել ձեր առաջընթացին ուսման մեջ"
                  },
                  {
                    title: "Նվաճումներ, մրցանակներ և վարկանիշ",
                    text: "Մրցումներ, եզակի առաջադրանքներ և ձեռքբերումներ"
                  },
                  {
                    title: "Խաղեր և ժամանց",
                    text: "Հարթակում հասանելի են խաղեր, ֆորումներ և տարբեր թեմաներով հաղորդակցություն"
                  }
                ],
                footer: {
                  text: "<span>Անցեք անվճար ներածական դասընթաց</span> հարթակի վրա աշխատելու համար"
                }
              },
              history: {
                header: "Ոգեշնչվի՛ր <br> <span class=\"text-stroke text-stroke__green\">հաջողության պատմություններով</span> <br> և ուսման վերաբերյալ արձագանքներով",
                successful_stories: "Հաջողության պատմություններ",
                review: "Արձագանքներ ուսման վերաբերյալ"
              },
              create: {
                title: "Ստեղծիր և <span class=\"opportunities-header__white2 create-header__white\">վաճառիր</span> <span class=\"create-header__stroke text-stroke\">քո <img loading=\"lazy\" src=\"img/create/star.png\" alt=\"\"> դասընթացները</span> <br class=\"hidden-desktop\"> ողջ աշխարհով",
                list: [
                  {
                    title: "ինտերֆեյս",
                    text: "<span>Հարմար ինտերֆեյս։</span> Ամեն ինչ պարզ է <br> նույնիսկ առանց հրահանգների"
                  },
                  {
                    title: "ֆունկցիոնալություն",
                    text: "Գործիքներ ցանկացած <br> առցանց ուսուցման ձևաչափերի համար</span>"
                  },
                  {
                    title: "հարմարվողականություն",
                    text: "Պլատֆորմի ինտերֆեյսը հարմարեցված է բոլոր գաջեթների համար"
                  },
                  {
                    title: "Դասընթացների խանութ",
                    text: "Օգտակար թեմաներ ըստ հետաքրքրության"
                  },
                  {
                    title: "Բեկ-օֆիս",
                    text: "Վիճակագրություն և բոլոր գործընթացների կառավարում անձնական հաշվից"
                  },
                  {
                    title: "Հնարավորություններ",
                    text: "Մշակեք և վաճառեք ձեր փորձը գործունեության ցանկացած ոլորտում"
                  },
                  {
                    title: "Բոնուսներ",
                    text: "Դասընթացներ՝ որպես նվեր հարթակում նվաճումների համար"
                  },
                  {
                    title: "Գործընկերության ծրագրեր",
                    text: "Ավտոմատ պարգևներ՝ ձեր հաճախորդների ցանցն ընդլայնելու համար"
                  }
                ],
                footer: {
                  title: "<span>Ստեղծեք գրավիչ դասընթացներ և <span class=\"text-stroke text-stroke__green\">աշխատիր</span> <br> սեփական <img loading=\"lazy\" src=\"img/create/star_green.png\" alt=\"\"> փորձագիտության վրա</span>"
                },
              },
              talk: {
                title: "Պատմիր հարթակի հնարավորությունների մասին և <span><div class=\"talk-header__circles\"><div class=\"talk-header__circle\"></div><div class=\"talk-header__circle\"></div></div> աշխատիր </span> <br> գործընկերային ծրագրում",
                list_info: [
                  "<div class=\"talk-circle__text\">Ավելի քան</div><div class=\"talk-circle__title talk-circle__title-small\">300<span>к</span></div><div class=\"talk-circle__text\">գործընկեր <br> ողջ <br> աշխարհում</div>",
                  "<div class=\"talk-circle__text\">Ավելի քան</div><div class=\"talk-circle__title talk-circle__title-small\">50<span>к <span class=\"talk-circle__text__dollar\">$</span></div><div class=\"talk-circle__text\">վճարվել է<br> գործընկերներին</div>",
                  "<div class=\"talk-circle__title\">1500<span>+</span></div><div class=\"talk-circle__text\">նոր հաճախորդ<br> ամեն<br> ամիս</div>",
                  "<div class=\"talk-circle__text\">Ավելի քան</div><div class=\"talk-circle__title talk-circle__title-small\">2 <span>տարի</span></div><div class=\"talk-circle__text\">առցանց-<br> կրթության մեջ</div>"
                ]
              },
              calculator: {
                title: "Ու՞մ համար է",
                list: [
                  "Յուրաքանչյուր ոք, ով ցանկանում է վաստակել <br> կրթական <br> ապրանքների վաճառքից",
                  "Բլոգերների,  <br> Telegram-ալիքների և կայքերի սեփականատերերին",
                  "Սկսնակ և փարձառու առցանց-<br>ձեռնարկատերերին, մարկեթոլոգներին, <br> ցանցային ինդուստրիայի փորձագետներին"
                ],
                footer: {
                  title: "Սկսեք վաստակել <span>հենց հիմա</span>",
                  text: "Պարզապես խորհուրդ տվեք մեզ ձեր ընկերներին"
                },
                main: {
                  title: "Որքա՞ն կարող եք վաստակել ձեր դասընթացը վաճառելուց:",
                  text: "Ընտրեք <span>արժույթը</span>",
                  sold_courses: "<span>Վաճառված</span> <br class=\"hidden-mobile\"> դասընթացների քանակը <br class=\"hidden-mobile\"> մեկ ամսում",
                  average_cost: "<span>Դասընթացի <br class=\"hidden-mobile\"> միջին <br class=\"hidden-mobile\"></span> արժեքը",
                  remuneration: "Ձեր պարգևը <br class=\"hidden-desktop\"> <span>ամսում <span class=\"calculator-main__total-result\">700</span></span>"
                }
              },
              answer: {
                title: "Ու՞մ է հարմար",
                list: [
                  {
                    title: "Կարո՞ղ եմ հարթակն օգտագործել բջջային սարքից:",
                    text: "Հարթակը հասանելի է մի շարք սարքերից՝ ներառյալ աշխատասեղան, նոութբուք, պլանշետ կամ հեռախոս:"
                  },
                  {
                    title: "Որքա՞ն ժամանակ պետք է հատկացվի սովորելու համար: Ես նաև աշխատում եմ։",
                    text: "Դուք ինքներդ եք ընտրում հարմար ռիթմ և մարզումների ժամանակացույց։ Օգտատերերի մեծ մասը համատեղում է մեր ակադեմիան և զբաղվածությունը: Նրանցից շատերն արդեն ամբողջությամբ հեռացել են աշխատանքի ընդունվելուց և այժմ զարգանում և վաստակում են միայն առցանց:"
                  },
                  {
                    title: "Ինչպե՞ս կարող եմ գտնել ճիշտ դասընթացը:",
                    text: "Դուք պետք է անվճար գրանցվեք հարթակում, անցնեք ներածական դասընթաց, կարդաք ապրանքների համառոտ նկարագրությունը ձեր անձնական աքաունթում և ընտրեք ձեզ համար համապատասխան դասընթաց։ <br /> Կարող եք նաև կապվել մեր հարթակի ակտիվ օգտատերերի և փորձագետների հետ, ովքեր կօգնեն ձեզ կողմնորոշվել և ընտրել ճիշտ դասընթացը:"
                  },
                  {
                    title: "Ինչո՞վ եք ավելի լավը, քան մյուս հարթակները:",
                    text: "Կատարելության սահման չկա... Ասել, որ ինչ-որ մեկն ավելի լավն է կամ ինչ-որ մեկն ավելի վատը, լիովին ճիշտ չէ: Մեր խնդիրը յուրաքանչյուր մասնակցի դրական արդյունքն է։ Մենք պարզապես անում ենք մեր գործը և փորձում ենք դա լավ անել։ Ինչպես ենք մենք դա անում, ավելի լավ է հարցնել մեր օգտատերերին: Նայեք ակնարկներին. Առաջարկում ենք նաև գրանցվել անվճար և ներսից ծանոթանալ հարթակին։ Համոզված ենք, որ այն ձեզ դուր կգա:"
                  },
                  {
                    title: "Ինչպե՞ս է ընթանում ուսումը։",
                    text: "Յուրաքանչյուր դասընթաց հիմնված է դասախոսությունների վրա, որոնք կարող են ներառել տեսանյութեր, սլայդներ, տեքստեր, հրահանգներ և գործնական կիրառություններ: Հարթակներում կազմակերպվում են նաև չաթեր, որտեղ օգտատերերը շփվում են ուսումնական գործընթացում և փորձի փոխանակում, անցկացվում են ֆորումներ արդի թեմաներով, կանոնավոր առցանց հեռարձակումներ և վեբինարներ։"
                  },
                  {
                    title: "Ես ուզում եմ սովորել, թե ինչպես գումար աշխատել: Ձեր հարթակը կօգնի՞ ինձ այս հարցում:",
                    text: "Իհարկե! Մեր հարթակը պարունակում է դասընթացներ, որոնք հիմնված են ինտերնետում գործող ձեռներեցների և ցանցային բիզնեսի առաջնորդների անձնական փորձի վրա: Բացի այդ, մենք ունենք շատ առատաձեռն ուղղորդման բոնուսային կուտակային ծրագիր, ինչը նշանակում է, որ դուք կարող եք գումար վաստակել արդեն ուսումնական գործընթացում: Հնարավորություն կա նաև դառնալ մեր հարթակի դասընթացների հեղինակ և գումար վաստակել դրանք վաճառելով։"
                  }
                ]
              },
              footer: {
                copyright: "Copyright 2022 <br> Բոլոր իրավունքները պաշտպանված են",
                platform_policy: "Հարթակի քաղաքականություն (ներբեռնում)",
                privacy_policy: "Գաղտնիության քաղաքականություն",
                application: [
                  "Հավելված №1",
                  "Հավելված №2",
                  "Հավելված №3",
                  "Հավելված №4",
                  "Հավելված №5"
                ],
                paradigma: "Ստեղծվել է սիրով <br> paradigma.website"
              },
              popup_login: {
                button: "Մուտք",
                forgot_password: "Մոռացե՞լ եք ծածկագիրը։"
              },
              popup_register: {
                button: "Գրանցվել",
                account_exists: "Ունե՞ք հաշիվ։ <span>Մուտք գործել</span>",
                register_button: "Գրանցվեք",
                learn_more: "մանրամասն իմանալու համար"
              },
              popup_leave: {
                title: "ԱՐԴԵՆ ԳՆՈՒ՞Մ ԵՔ:",
                text: "Ի նշան մեր ծանոթության, ներբեռնեք օգտակար ձեռնարկ։",
                footer: {
                  title: "Ինչպե՞ս գումար աշխատել ցանկացած տարիքում սովորելիս:",
                  agree: "Դուք համաձայնում եք անձնական տվյալների մշակման պայմաններին"
                }
              }
            }
          },
          fr: {
            translation: {
              header: {
                logo: "Plateforme internationale en ligne pour la création de cours",
                navbar: {
                  courses: "Cours",
                  authors: "Auteurs",
                  about_platform: "Sur la plateforme",
                  partners_program: "Programme de partenariat",
                  successful_stories: "Exemples de réussite",
                  own_course: "Propre cours",
                  answers: "Réponses aux questions"
                }
              },
              button: {
                sign_in: "S'identifier",
                sign_up: "Inscription",
                register: "Inscrivez-vous et découvrez-en plus",
                start_free: "Commencer gratuitement",
                find_out_more: "En savoir plus",
                download: "Télécharger"
              },
              main: {
                title: "Éducation moderne <span>sans</span> restrictions",
                description: "avec des opportunités de tirer du profit",
                list_info: {
                  any_age: "Pour tous <br> les âges",
                  unlimited_access: "Accès <br> illimité",
                  areas_of_study: "8 orientations <br> de formation"
                }
              },
              become: {
                title: "Deviens un <br> professionnel moderne <br><span class=\"text-stroke\">et en demande</span>",
                description: "Bienvenue dans <span>une communauté unique de professionnels, de jeunes specialistes et de passionnés</span><br />dans domaines les plus divers du monde entier",
                main: {
                  intro: "À «Lime Academy» <span>tu peux acquérir les connaissances et les compétences nécessaires</span> pour apprendre de nouveaux métiers en ligne et la réalisation réussie de ton potentiel",
                  info: "Nous <span>avons combiné la théorie et la pratique dans un système</span> qui permet aux utilisateurs de notre plateforme de commencer à gagner de l'argent tout en apprenant!",
                  mission: "Notre mission est de réunir des personnes</strong> du monde entier dans une communauté de partenaires, de créer les conditions nécessaires pour libérer leur potentiel créatif et d'apprendre à chacun comment gagner de l'argent grâce aux technologies modernes"
                },
                about: {
                  programs: "<div class=\"become-circle__title\">80<span>+</span></div> <div class=\"become-circle__text\">des programmes de formation</div>",
                  trainers: "<div class=\"become-circle__title\">50<span>+</span></div> <div class=\"become-circle__text\">des formateurs experts</div>",
                  members: "<div class=\"become-circle__text\">plus de</div> <div class=\"become-circle__title become-circle__title-small\">300<span>к</span></div> <div class=\"become-circle__text\">de personnes dans notre communauté </div>"
                }
              },
              direction: {
                header: {
                  title: "Choisis la meilleure <span class=\"text-stroke text-stroke__green\">orientation</span> pour toi",
                  text: "<p><span>Des cours pour tous les niveaux de connaissances et d'objectifs</span> </p> <p>Un diplôme de l'enseignement supérieur ou toute formation préalable <span>n'est pas requis</span></p>"
                },
                buttons: [
                  "L'épanouissement personnel",
                  "Marketing",
                  "Formation générale",
                  "Langues étrangères",
                  "Finances",
                  "Connaissance du numérique",
                  "Spéciales",
                  "Toutes les orientations"
                ],
                slider: {
                  title: [
                    "Ressource",
                    "Autoévaluation",
                    "Présentation de soi-même",
                    "Une marque personnelle sur Internet",
                    "Motivation",
                    "Attitude",
                    "Effet sur l'acheteur",
                    "Comment faire connaître votre compagnie sur Internet",
                    "Personnes, processus, technologies",
                    "Vendre à travers les valeurs",
                    "Révélation de l'identité",
                    "Comportement de l'acheteur",
                    "Développement d'une marque personnelle",
                    "Élaboration d'une stratégie de développement commercial en ligne",
                    "Comment améliorer l'efficacité des campagnes sur le réseau de recherche"
                  ],
                  descriptions: [
                    "Vous apprendrez comment votre état affecte vos ventes et ce qui vous empêche, vous et vos clients, d'être en forme. Apprenez à connaître les canaux de perception par lesquels les gens reçoivent des informations.",
                    "Le client est le reflet de votre personnalité. La première chose à faire n'est donc pas de comprendre comment vendre au client, mais comment  vendre à soi-même. Regardez au fond de vous et analysez la manière dont vous vous présentez et dont vous êtes perçu.",
                    "La présentation de soi est la capacité à créer une image positive de soi, pour intéresser son client ou son public. La présentation de soi est une compétence clé qui marque le début du développement d'une marque personnelle.",
                    "Le développement d'une marque personnelle est impossible dans le monde d'aujourd'hui sans les médias sociaux. Dans ce cours, vous apprendrez à trouver votre niche dans les médias sociaux, à vous démarquer de la concurrence et à monétiser votre blog.",
                    "N'avez-vous jamais eu envie de quelque chose, mais vous l'avez remis à plus tard, et cela ne s'est jamais produit ? La raison en est le manque de motivation. Dans ce cours, nous verrons d'où vient la motivation et comment l'augmenter vous-même.",
                    "Quelle est la différence entre la pensée des \"pauvres\" et celle des \"riches\" ? Comment se fait-il que certains traversent la vie avec facilité et réussissent, alors que d'autres doutent sans cesse de leurs capacités et de leurs forces?",
                    "La règle principale d'un bon manager est que le client passe toujours en premier. Le plus important, c'est son bien-être et sa santé.",
                    "Choisissez votre parcours de formation : affaires, marque personnelle ou marketing. Apprenez à attirer plus de clients et de followers sur Instagram.",
                    "Il ne s'agit pas d'un produit ou d'un service que nous achetons, mais de l'état que ces produits ou services ou les personnes qui les vendent nous donnent. C'est ce qu'on appelle \"l'effet de contagion\".",
                    "Vous apprendrez ce que sont les valeurs dans la vente et comment les utiliser comme moyen de réussite. Vous serez initié au concept de \"révélation de l'identité\" et apprendrez comment éviter de faire des erreurs dans le processus.",
                    "Une marque personnelle est ce qui vous distingue de vos concurrents, votre approche individuelle de la présentation d'un produit ou de la conduite des affaires. Faites le premier pas pour en créer une!",
                    "Apprenez comment présenter la valeur d'un produit à travers la communication, et comment créer une stratégie de promotion et de mise sur le marché. Renforcez vos compétences en marketing grâce à l'approche produit"
                  ],
                  modules: [
                    "2 modules",
                    "4 modules",
                    "5 modules",
                    "6 modules",
                    "8 modules"
                  ]
                },
                footer: {
                  text: "<span>Rejoins-nous dès maintenant</span> et choisis une orientation"
                }
              },
              authors: {
                title: "<span class=\"text-stroke text-stroke__green\">Auteurs <br></span>des cours",
                description: "Nos experts <span>montrent la voie au but</span> et veillent à ce que l'intérêt pour l'apprentissage ne faiblisse pas",
                list: [
                  {
                    name: "Aïnur ZINNATULIN",
                    description: "Entrepreneur, <br> présentateur de télévision et de radio. <br> Lauréat du prix Teffi",
                    more_info: "Auteur des livres \"La pilule contre la peur\", \"5 pas vers l'entretien parfait\", \"La seule chose qui t'empêche, c'est la peur.\", et \"L'art de charmer les étrangers\". Un formateur en art oratoire et en prise de parole en public. Un homme avec un grand sens de l'humour.",
                  },
                  {
                    name: "Aliya <br>Khurmatova",
                    description: "Une pratique réussie de la vente en ligne<br class=\"mobile_break\"> et hors ligne.<br> Auteur d'une série de cours en ligne<br> et consultante personnelle",
                    more_info: "Aliya Khurmatova est une experte des ventes, de la promotion hors ligne et en ligne, ainsi qu'une spécialiste de consultation commerciale. Elle est une coach commerciale professionnelle avec plus de 14 ans d'expérience. Elle conseille et dispense des formations d'entreprise pour de grandes sociétés de réseau depuis 2016, et est également l'auteur de cours de formation pour les dirigeants et les cadres supérieurs dans divers domaines d'activité. Son cours vous permettra d'augmenter sensiblement votre niveau de compétence en matière de vente."
                  },
                  {
                    name: "Julia Dolgova",
                    description: "Entrepreneuse, psychologue, coach énergétique. Auteur du livre \"Le principe de Dolgova\"",
                    more_info: "En 13 ans, Julia Dolgova a rassemblé les meilleures pratiques dans des programmes de formation sur la création et la monétisation de son activité, destinés aux entrepreneurs débutants et expérimentés. Son approche systématique de la formation vous permettra d'éliminer l'instabilité dans les ventes. Elle est également organisatrice et conférencière pour des événements en ligne et hors ligne de grande envergure."
                  },
                  {
                    name: "Anna Semenova",
                    description: "Entrepreneuse, coach commerciale. <br> Auteur du cours<br class=\"mobile_break\"> \"Des gens importants, des chèques importantss\". Puissante motivatrice et grande chef d'équipe",
                    more_info: "La vaste expérience pratique d'Anna Semenova a permis d'accumuler et de systématiser les connaissances dans un système de formation \"à cycle complet\". Organisatrice et conférencière de marathons en ligne à thème. Dans un langage toujours simple et accessible, à travers des exemples concrets, elle enseigne comment vendre de façon régulière, sans stress ni crainte."
                  },
                  {
                    name: "MILA MATVEEVA",
                    description: "Spécialiste du marketing, conférencière, motivatrice",
                    more_info: "Plus de 20 ans d'expérience dans le secteur du marketing de réseau. Elle a gravi les échelons, passant d'une vendeuse débutante à une dirigeante de haut niveau. Elle s'est développée avec succès dans des entreprises de différents secteurs d'activité. Dans le cadre de cette formation, Mila Matveeva vous dévoilera des techniques pratiques qui vous aideront à devenir un grand psychologue pour vous-même, à découvrir votre potentiel intérieur et à ouvrir votre trésorerie."
                  },
                  {
                    name: "Anastasia Kotova",
                    description: "Experte en prise de parole en public <br>et en discours sur scène",
                    more_info: "Auteure du guide pour débutants \"Premiers pas\" et créatrice du cours \"Les 5 étapes de la vente\". Le cours d'Anastasia Kotova vous aidera à développer votre appareil d'expression orale et à vous débarrasser des blocages. Vous élargirez votre vocabulaire et apprendrez à faire en sorte que les auditeurs regardent littéralement \"dans votre bouche\"."
                  },
                  {
                    name: "SVETLANA SKORNYAKOVA",
                    description: "Entrepreneuse. Auteure du cours \"Public cible\" <br> et des trainings sur la promotion dans les médias sociaux",
                    more_info: "En 4 ans de travail actif sur Internet, Svetlana Skornyakova a sélectionné des outils efficaces qui vous permettent de recevoir un flux entrant de clients et de partenaires dans votre business. Le cours \"Public cible\" vous aidera à identifier vos groupes-cibles et à composer votre argument commercial pour chaque groupe. Vous découvrirez des méthodes et des techniques, élaborerez votre propre plan de contenu et apprendrez à trouver des partenaires commerciaux en ligne."
                  },
                  {
                    name: "EVGENY ET OLGA ZHARKOV",
                    description: "Entrepreneurs en marketing de réseau. <br>Des experts du marketing direct, le travail avec de nouveaux clients",
                    more_info: "Au cours d'Evgeny et Olga Zharkova, vous apprendrez où obtenir les numéros de téléphone de partenaires potentiels, et comment entretenir correctement votre annuaire du téléphone avec les contacts des candidats en affaires. Vous apprendrez à identifier votre public cible, à obtenir des scripts d'appels téléphoniques et à maîtriser la technique du \"cold calling\". Eugène et Olga vous apprendront à surmonter la peur et partageront des techniques psychologiques pour un travail efficace."
                  }
                ]
              },
              opportunities: {
                title: "Vous <span class=\"opportunities-header__white\">n'êtes pas restreint</span> dans votre possibilité d'apprendre",
                list: [
                  {
                    title: "Où que ce soit",
                    text: "Apprenez à la maison, sur la route, en vacances ou pendant votre pause déjeuner"
                  },
                  {
                    title: "Quand c'est possible",
                    text: "Apprenez à votre rythme, sans limite de temps"
                  },
                  {
                    title: "Dans n'importe quel ordre",
                    text: "Suivez plus d'un cours à la fois ou un par un"
                  }
                ]
              },
              community: {
                title: "La plus grande <span class=\"text-stroke text-stroke__green\">communauté</span> de spécialistes, d'experts, d'utilisateurs expérimentés et de débutants",
                list: [
                  {
                    title: "Les compagnons d'idées",
                    text: "Vous apprenez, discutez des problèmes avec le mentor et aidez les débutants"
                  },
                  {
                    title: "Communication",
                    text: "Communication avec les auteurs des cours, les intervenants, les chats, les vidéo-conférences"
                  },
                  {
                    title: "Ambiance",
                    text: "C'est chaud et confortable sur notre plateforme, tout comme à la maison"
                  }
                ]
              },
              tools: {
                title: "Nous avons créé de meilleurs outils<span class=\"text-stroke text-stroke__green\">d'apprentissage",
                text: "Une plateforme d'apprentissage <br><span>avec des fonctionnalités complètes</span>",
                list: [
                  {
                    title: "Base de connaissances",
                    text: "Des programmes de formation longs, des stages intensifs courts"
                  },
                  {
                    title: "Apprentissage personnalisé",
                    text: "Vous choisissez vous-même les cours, les chats et les webinaires qui vous intéressent"
                  },
                  {
                    title: "Webinaires et chats en ligne",
                    text: "Discussions en ligne avec les mentors et les équipes, émissions audio et vidéo"
                  },
                  {
                    title: "Contrôle de ses propres progrès",
                    text: "Grâce à votre compte personnel, vous pouvez suivre vos progrès dans l'apprentissage"
                  },
                  {
                    title: "Réussites, récompenses et classements",
                    text: "Compétitions, tâches originales et réussites"
                  },
                  {
                    title: "Jeux et loisirs",
                    text: "Des jeux, des forums et des communications sur de divers sujets sont disponibles sur la plate-forme"
                  }
                ],
                footer: {
                  text: "<span>Suis le cours d'introduction gratuit</span> sur le travail dans la plateforme"
                }
              },
              history: {
                header: "Inspire-toi <br><span class=\"text-stroke text-stroke__green\">des histoires de réussite</span> <br> et des avis sur la formation",
                successful_stories: "Histoires de réussite",
                review: "Avis sur la formation"
              },
              create: {
                title: "Crée et <span class=\"opportunities-header__white2 create-header__white\">vends</span> <span class=\"create-header__stroke text-stroke\">tes <img loading=\"lazy\" src=\"img/create/star.png\" alt=\"\"> cours</span> <br class=\"hidden-desktop\"> dans le monde entier",
                list: [
                  {
                    title: "interface",
                    text: "<span>Interface facile à utiliser.</span> Tout est clair <br>même sans instructions"
                  },
                  {
                    title: "fonctionnalité",
                    text: "Des outils pour tous les <br> formats d'apprentissage en ligne</span>"
                  },
                  {
                    title: "capacité d'adaptation",
                    text: "L'interface de la plateforme est adaptée à tous les gadgets"
                  },
                  {
                    title: "Magasin de cours",
                    text: "Thèmes d'intérêt utiles"
                  },
                  {
                    title: "Post marché",
                    text: "Statistiques et gestion de tous les processus depuis le compte personnel"
                  },
                  {
                    title: "Possibilités",
                    text: "Développe et vends tes connaissances dans tous les domaines d'activité"
                  },
                  {
                    title: "Des Bonus",
                    text: "Des cours en cadeau pour les réussites sur la plateforme"
                  },
                  {
                    title: "Programmes de partenariat",
                    text: "Récompenses automatiques pour l'extension du réseau de clients"
                  }
                ],
                footer: {
                  title: "<span>Crée des cours séduisants et <span class=\"text-stroke text-stroke__green\">gagne de l'argent</span> <br> sur ton <img loading=\"lazy\" src=\"img/create/star_green.png\" alt=\"\"> expertise</span>"
                }
              },
              talk: {
                title: "Parle des possibilités de la plateforme et <span><div class=\"talk-header__circles\"><div class=\"talk-header__circle\"></div><div class=\"talk-header__circle\"></div></div> gagne de l'argent </span> <br> dans des programmes de partenariat",
                list_info: [
                  "<div class=\"talk-circle__text\">plus de</div><div class=\"talk-circle__title talk-circle__title-small\">300<span>к</span></div><div class=\"talk-circle__text\">partenaires <br> dans le monde <br> entier</div>",
                  "<div class=\"talk-circle__text\">plus de</div><div class=\"talk-circle__title talk-circle__title-small\">50<span>к <span class=\"talk-circle__text__dollar\">$</span></div><div class=\"talk-circle__text\">payés<br> aux partenaires</div>",
                  "<div class=\"talk-circle__title\">1500<span>+</span></div><div class=\"talk-circle__text\">nouveaux clients<br> chaque<br> mois</div>",
                  "<div class=\"talk-circle__text\">plus de</div><div class=\"talk-circle__title talk-circle__title-small\">2 <span>ans</span></div><div class=\"talk-circle__text\">dans la formation <br> en ligne</div>"
                ]
              },
              calculator: {
                title: "À qui cela convient-il?",
                list: [
                  "A tous ceux qui veulent gagner de l'argent <br> en vendant des produits <br> éducatifs",
                  "Aux blogueurs, aux propriétaires <br> de chaînes Telegram et de sites web",
                  "Aux débutants et entrepreneurs en ligne expérimentés<br>aux spécialistes du marketing, <br> aux experts du commerce en réseau"
                ],
                footer: {
                  title: "Commencez à gagner de l'argent <span>dès maintenant</span>",
                  text: "Recommandez-nous simplement à vos amis"
                },
                main: {
                  title: "Combien puis-je gagner en vendant mon cours ?",
                  text: "Sélectionnez la <span>devise</span>",
                  sold_courses: "<span>Nombre</span> <br class=\"hidden-mobile\"> de cours vendus <br class=\"hidden-mobile\"> en mois",
                  average_cost: "<span>Le coût <br class=\"hidden-mobile\"> du cours <br class=\"hidden-mobile\"></span> moyen",
                  remuneration: "Votre récompense: <br class=\"hidden-desktop\"> <span>en mois <span class=\"calculator-main__total-result\">700</span></span>"
                }
              },
              answer: {
                title: "À qui cela convient-il?",
                list: [
                  {
                    title: "Est-il possible d'utiliser la plateforme depuis un appareil mobile?",
                    text: "La plateforme est accessible à partir d'une variété d'appareils, notamment un ordinateur de bureau, un ordinateur portable, une tablette ou un téléphone."
                  },
                  {
                    title: "Combien de temps dois-je consacrer à la formation? Je travaille, n'est-ce pas?",
                    text: "Vous choisissez vous-même votre rythme et vos horaires de formation. La plupart des utilisateurs combinent notre Académie avec un emploi. Beaucoup d'entre eux ont déjà complètement abandonné leur activité salariée pour se développer et gagner de l'argent uniquement en ligne."
                  },
                  {
                    title: "Comment choisir le bon cours?",
                    text: "Vous devez vous inscrire gratuitement sur la plateforme, suivre le cours d'introduction, lire une brève description des produits de votre compte personnel et choisir le cours qui vous intéresse. <br /> Vous pouvez également demander aux utilisateurs actifs et aux experts de la plateforme de vous aider à vous orienter et à choisir le bon cours."
                  },
                  {
                    title: "En quoi êtes-vous meilleur que les autres plateformes?",
                    text: "Il n'y a pas de limite à la perfection... Dire que quelqu'un est meilleur et que quelqu'un est pire n'est pas tout à fait exact ou correct. Notre objectif est de parvenir à un résultat positif pour toutes les personnes concernées. Nous faisons simplement notre travail et essayons de le faire bien. Comment nous le faisons - la meilleure façon est de demander à nos utilisateurs. Jetez un coup d'œil aux témoignages. Nous vous invitons également à vous inscrire gratuitement et à découvrir la plateforme de l'intérieur. Nous sommes sûrs que vous l'apprécierez!"
                  },
                  {
                    title: "Comment se déroule la formation?",
                    text: "Chaque cours est basé sur des conférences, qui peuvent inclure des vidéos, des diapositives, du texte, des instructions et des applications pratiques. La plateforme comporte également des chats où les utilisateurs communiquent dans le cadre du processus d'apprentissage et partagent leurs expériences, des forums sur des sujets pertinents, ainsi que des diffusions en ligne et des webinaires réguliers."
                  },
                  {
                    title: "Je veux apprendre à gagner de l'argent. Votre plateforme m'aidera-t-elle à le faire?",
                    text: "Tout à fait ! Notre plateforme contient des cours basés sur l'expérience personnelle d'entrepreneurs en ligne et de leaders du commerce de réseaux en exercice. En outre, nous disposons d'un programme de bonus de parrainage très généreux, ce qui signifie que vous pouvez gagner de l'argent tout en apprenant. Vous pouvez également devenir auteur de cours sur notre plateforme et gagner de l'argent en les vendant!"
                  }
                ]
              },
              footer: {
                copyright: "Copyright 2022 <br> Tous les droits sont réservés",
                platform_policy: "Politique de la plateforme (télécharger)",
                privacy_policy: "Politique de confidentialité",
                application: [
                  "Annexe №1",
                  "Annexe №2",
                  "Annexe №3",
                  "Annexe №4",
                  "Annexe №5"
                ],
                paradigma: "Fait avec amour <br> sur paradigma.website"
              },
              popup_login: {
                button: "Ouverture de session",
                forgot_password: "Mot de passe oublié?"
              },
              popup_register: {
                button: "S'inscrire",
                account_exists: "Vous avez déjà un compte? <span>Identifiez-vous</span>",
                register_button: "Inscrivez-vous",
                learn_more: "pour en savoir plus"
              },
              popup_leave: {
                title: "Vous quittez déjà?",
                text: "En guise de salutation, téléchargez un manuel utile:",
                footer: {
                  title: "Comment gagner de l'argent à tout âge en apprenant?",
                  agree: "Vous acceptez les conditions de traitement des données personnelles"
                }
              }
            }
          },
          tr: {
            translation: {
              header: {
                logo: "Uluslararası Çevrimiçi Telif Hakkı Kursları Platformu",
                navbar: {
                  courses: "Kurslar",
                  authors: "Yazarlar",
                  about_platform: "Platform hakkında",
                  partners_program: "Ortaklık Programı",
                  successful_stories: "Başarı Öyküleri",
                  own_course: "Kendi Rotası",
                  answers: "Soruların cevapları"
                }
              },
              button: {
                sign_in: "Giriş yap",
                sign_up: "Kaydol",
                register: "Kaydolun ve daha fazla bilgi edinin",
                start_free: "Ücretsiz başlayın",
                find_out_more: "Daha fazla bilgi edinin",
                download: "İndir"
              },
              main: {
                title: "Modern kısıtlamalar<span>sız</span> eğitim",
                description: "gelir elde etme imkanı ile",
                list_info: {
                  any_age: "Her <br> yaş için",
                  unlimited_access: "Sınırsız <br> erişim",
                  areas_of_study: "<br> Eğitimin 8 yönü"
                }
              },
              become: {
                title: "Modern <br> ve talep edilen <br><span class=\"text-stroke\">uzman</span>ol",
                description: "<br>dünyanın dört bir yanındaki farklı faaliyet alanlarından <span>kendi alanında profesyoneller, acemi profesyoneller ve sadece hevesli insanlardan oluşan eşsiz bir topluluğa</span> sizi davet ediyoruz",
                main: {
                  intro: "Lime Academy'de yeni internet mesleklerine hakim olmak ve potansiyellerini başarılı bir şekilde gerçekleştirmek için<span>güncel bilgi ve gerekli becerileri satın alabilirsiniz</span> ",
                  info: "Biz, platformumuzun kullanıcılarının eğitim sırasında zaten kazanmaya başladıkları sayesinde <span>teori ve pratiği bir sisteme birleştirdik</span>!",
                  mission: "Misyonumuz, dünyanın dört bir yanındaki </strong> insanları ortak bir topluluğa birleştirmek, yaratıcılıklarını açığa çıkarmak için bir ortam yaratmak ve her bir kişiye modern teknolojiyle para kazanmalarını öğretmektir"
                },
                about: {
                  programs: "<div class=\"become-circle__title\">80<span>+</span></div> <div class=\"become-circle__text\">eğitici programlar</div>",
                  trainers: "<div class=\"become-circle__title\">50<span>+</span></div> <div class=\"become-circle__text\">uzman eğitmenler</div>",
                  members: "<div class=\"become-circle__text\">daha</div> <div class=\"become-circle__title become-circle__title-small\">300<span>K</span></div> <div class=\"become-circle__text\">kişi topluluğumuzda</div>"
                }
              },
              direction: {
                header: {
                  title: "Kendine en iyi <span class=\"text-stroke text-stroke__green\">yönünü</span>",
                  text: "<p><span>Her düzeyde bilgi ve amaç için kurslar</span> </p> <p>Yüksek öğrenim veya herhangi bir ön hazırlık <span>gerekli değildır</span></p>"
                },
                buttons: [
                  "Kişisel gelişim",
                  "Pazarlama",
                  "Genel eğitim",
                  "Yabancı diller",
                  "Finans",
                  "Dijital okuryazarlık",
                  "Özeller",
                  "Tüm yönler"
                ],
                slider: {
                  title: [
                    "Kaynaklar",
                    "İç gözlem",
                    "Kendini sunması",
                    "İnternette kişisel marka",
                    "Motivasyon",
                    "Kurulumlar",
                    "Alıcı üzerindeki etki",
                    "Şirketiniz hakkında çevrimiçi olarak nasıl konuşulur",
                    "İnsanlar, süreçler, teknoloji",
                    "Değerlerle satışlar",
                    "Kişiliğin ambalajından çıkarılması",
                    "Alıcının davranışı",
                    "Kişisel marka geliştirme",
                    "Çevrimiçi iş geliştirme stratejisi geliştirme",
                    "Arama ağı kampanyalarınızın performansını nasıl artırabilir"
                  ],
                  descriptions: [
                    "Servetinizin satışları nasıl etkilediğini ve sizi ve müşterilerinizin kaynakta olmasını engelleyen şeyleri öğreneceksiniz. İnsanların bilgi aldığı algı kanallarını tanırsınız.",
                    "Müşteri sizin bir yansımanızdır. Bu nedenle, her şeyden önce, müşteriye nasıl satacağınızı değil, kendinize nasıl satacağınızı anlamanız gerekir. Kendinize daha derine bakın ve kendinize nasıl hizmet ettiğinizi ve nasıl algılandığınızı analiz edin.",
                    "Kendini sunma, kendiniz hakkında olumlu bir imaj oluşturma, müşteri veya izleyicinizi ilgilendirme yeteneğidir. Kendini sunma becerisi, kişisel bir markanın gelişiminin başladığı önemli bir beceridir.",
                    "Sosyal ağlar olmadan modern bir dünyada kişisel bir markanın geliştirilmesi mümkün değildir. Kursta, yerinizi sosyal medyada nasıl bulacağınızı, rakipleriniz arasında kaybolmayacağınızı ve blogunuzdan nasıl para kazanacağınızı öğreneceksiniz.",
                    "Daha önce hiç bir şeyin gerçekten olmasını istediğiniz bir şeyiniz oldu, ama bunu asla gelmeyecek bir “sonraya” erteler misiniz? Nedeni motivasyon eksikliğidir. Kursta, motivasyonun nereden geldiğini ve kendi seviyenizi kendiniz için nasıl artıracağınızı inceleyeceğiz.",
                    "«Fakir» ve «zengin» düşüncelerinin farkı nedir? Neden birisi hayat boyunca kolaylıkla yürüyor ve her şeyi başarıyor, diğerleri ise kendi yeteneklerinden ve güçlerinden sonsuz şüphe duyuyorlar?",
                    "İyi bir yöneticinin ana kuralı, müşterinin her zaman ilk sırada yer almasıdır. En önemli şey onun sağlığı ve esenliğidir.",
                    "Öğrenme yörüngenizi seçin: iş, kişisel marka veya pazarlama. İnstagram'da daha fazla müşteri ve takipçiyi nasıl çekeceğinizi öğrenin",
                    "Mal ya da hizmet satın almıyoruz, bu malların bize verdiği serveti ya da onları satan kişileri satın alıyoruz. Buna “Enfeksiyon Etkisi\" denir.",
                    "Satışlardaki değerlerin ne olduğunu ve bunları başarıya ulaşmanın bir yolu olarak nasıl kullanacağınızı öğreneceksiniz. \"Kişiliğin ambalajından çıkarılması\" kavramını tanıyın ve bu süreçte bir hatadan nasıl kaçınacağınızı öğrenin.",
                    "Kişisel bir marka, sizi rakiplerinizden ayıran, bir ürünü sunma veya iş yapma konusundaki bireysel yaklaşımınızdır. Onu yaratmak için ilk adımı atın!",
                    "Bir ürünün değerini iletişimde paketlemeyi, ürünü pazara tanıtmak ve piyasaya sürmek için bir strateji oluşturmayı öğrenin. Pazarlama becerilerinizi ürün yaklaşımıyla güçlendirin"
                  ],
                  modules: [
                    "2 modül",
                    "4 modül",
                    "5 modül",
                    "6 modül",
                    "8 modül"
                  ]
                },
                footer: {
                  text: "<span>Şimdi katıl</span> ve yönünü seç"
                }
              },
              authors: {
                title: "Kursların<span class=\"text-stroke text-stroke__green\">Yazarları<br></span>",
                description: "Uzmanlarımız <span>sizi hedefe götürür</span> ve öğrenmeye olan ilginin azalmadığından emin oluyorlar",
                list: [
                  {
                    name: "Aynur ZİNNATULİN",
                    description: "Girişimci, <br> televizyon ve radyo sunucusu. <br> Teffie Ödülü Sahibi",
                    more_info: " «Korku Hapı», «Mükemmel Röportajınıza 5 Adım», «Sadece korku sizi engelliyor», «Yabancıları Büyüleme Sanatı» adlı kitapların yazarıdır. Topluluk Önünde Konuşma ve Hitabet Koçu. Harika bir mizah anlayışı olan bir insan."
                  },
                  {
                    name: "Aliya <br>Hurmatova",
                    description: "Başarılı çevrimiçi <br class=\"mobile_break\"> ve çevrimdışı satışların uygulayıcısı.<br> Çevrimiçi kurs döngüsünün yazarı<br> ve kişisel danışman",
                    more_info: "Aliya Hurmatova, satış, çevrimdışı ve çevrimiçi tanıtım konusunda uzman ve iş danışmanlığı konusunda uzmandır. 14 yılı aşkın deneyime sahip profesyonel bir iş koçu. 2016 yılından bu yana büyük ağ şirketleri için kurumsal eğitimlere danışmanlık yapıyor ve yürütüyor ve aynı zamanda çeşitli iş alanlarında yöneticiler ve üst düzey yöneticiler için eğitimlerin yazarıdır. Kursu, satış alanındaki yetkinliklerinizi önemli ölçüde artırmanıza olanak tanır."
                  },
                  {
                    name: "Yulia Dolgova",
                    description: "Girişimci, psikolog,<br> enerji koçu.<br> «Dolgova İlkesi» adlı kitabın yazarıdır",
                    more_info: "13 yıldır Yulia Dolgova, hem yeni başlayanlar hem de deneyimli girişimciler için işini kurmak ve para kazanmak için eğitim programlarına en iyi uygulamaları paketledi. Eğitimdeki sistematik yaklaşımı, satışlardaki istikrarsızlığı ortadan kaldırmanıza izin verecektir. Aynı zamanda çevrimiçi ve çevrimdışı büyük ölçekli etkinliklerin organizatörü ve konuşmacısıdır."
                  },
                  {
                    name: "Anna Semyonova",
                    description: "Girişimci, iş koçu. <br> <br class=\"mobile_break\"> «Büyük insanlar büyük çekler demektir» adlı kursun yazarıdır. <br> Güçlü bir motive edici ve büyük bir takımın lideri",
                    more_info: "Anna Semenova'nın geniş pratik deneyimi, bilgiyi «tam döngü» öğrenme sistemine biriktirmeyi ve sistemleştirmeyi mümkün kıldı. Tematik çevrimiçi maratonların organizatörü ve konuşmacısı. Her zaman basit ve erişilebilir bir dille, somut örneklerle, gerginlik ve korku olmadan sürekli satış yapmayı öğretir."
                  },
                  {
                    name: "MİLA MATVEEVA",
                    description: "Pazarlamacı, konuşmacı, motive edici",
                    more_info: "Ağ pazarlama endüstrisinde 20 yılı aşkın bir süredir deneyimine sahiptir. Yeni başlayan bir satıcıdan Üst düzey bir lidere doğru yol almıştır. Farklı faaliyet alanlarına sahip şirketlerde başarılı bir şekilde gelişmiştir. Eğitim kursunda Mila Matveeva, kendiniz için harika bir psikolog olmanıza, iç potansiyelinizi ortaya çıkarmanıza ve nakit akışınızı açmanıza yardımcı olacak pratik teknikleri ortaya çıkaracaktır."
                  },
                  {
                    name: "Anastasia Kotova",
                    description: "Hitabet sanatı <br> ve sahne konuşmasında uzman ",
                    more_info: "Yeni başlayanlar için «İlk Adımlar» başlatma kılavuzunun yazarı ve «5 Satış Adımı Diyalog yapma sanatı.» kursunun geliştiricisidir. Anastasia Kotova'nın kursu, artikülasyon geliştirmenize ve çekinmelerinizden kurtulmanıza yardımcı olacaktır. Kelime dağarcığınızı genişletebilir ve dinleyicilerin kelimenin tam anlamıyla “ağzınıza bakmalarını” nasıl sağlayacağınızı öğrenebilirsiniz."
                  },
                  {
                    name: "SVETLANA SKORNYAKOVA",
                    description: "Girişimci. «Hedef Kitle» <br>kursunun ve sosyal ağlarda tanıtım eğitimlerin yazarı ",
                    more_info: "4 yıllık aktif internet çalışması için Svetlana Skornyakova, gelen müşteri ve ortak akışını işe almanızı sağlayan etkili araçları seçtmiştir. «Hedef Kitle» kursu, hedef kitlenizin gruplarını tanımlamanıza ve her bir grup için USP oluşturmanıza yardımcı olur. Çalışmanın yöntemlerini ve tekniklerini öğrenecek, içerik planınızı oluşturacak, internet üzerinden iş ortaklarını nasıl bulacağınızı öğreneceksiniz."
                  },
                  {
                    name: "EVGENİY ZHARKOV ve OLGA ZHARKOVA",
                    description: "MLM girişimciler. <br> «Soğuk» çevre çalışması ile ilgili uzmanlar",
                    more_info: "Evgeniy Zharkov ve Olga Zharkova'nın kursunda, potansiyel ortakların telefon numaralarını nereden alacağınızı, telefon rehberinizi iş başvuru sahiplerinin rehberleriyle nasıl doğru bir şekilde tutacağınızı öğreneceksiniz. Hedef kitlenizi tanımlamayı ve telefon görüşmesi komut dosyalarını almayı öğrenecek, «soğuk» çevre tekniğinde ustalaşacaksınız. Evgeniy ve Olga korkunun üstesinden gelmeyi öğretecek ve etkili bir şekilde çalışmak için psikolojik teknikleri paylaşacaklar."
                  }
                ]
              },
              opportunities: {
                title: " Öğrenme fırsatlarında <span class=\"opportunities-header__white\">sınırlı değilsiniz</span>",
                list: [
                  {
                    title: "Her yerde",
                    text: "Evde, yolda, tatilde veya öğle yemeğinde öğrenin"
                  },
                  {
                    title: "Uygun olduğunda",
                    text: "Herhangi bir zaman sınırı olmadan kendi hızınızda öğrenin"
                  },
                  {
                    title: "Herhangi bir sırayla",
                    text: "Birden fazla kursu aynı anda veya sırayla tamamlayın"
                  }
                ]
              },
              community: {
                title: "Uzmanlar, uzmanlar, güç kullanıcıları ve yeni başlayanların en büyük <span class=\"text-stroke text-stroke__green\">topluluğu</span>",
                list: [
                  {
                    title: "Hemfikirler",
                    text: "Eğitim alıyorsunuz, soruları bir akıl hocasıyla tartışıyorsunuz ve yeni başlayanlara yardım ediyorsunuz"
                  },
                  {
                    title: "İletişim",
                    text: "Kurs yazarları, konuşmacılar, sohbetler, video konferanslar ile iletişim kurun"
                  },
                  {
                    title: "Atmosfer",
                    text: "Platformumuzda, evde sıcak ve rahat bir şekilde"
                  }
                ]
              },
              tools: {
                title: "Biz <span class=\"text-stroke text-stroke__green\">öğrenme için en iyi araçları oluşturduk",
                text: "Öğrenme platformu <br><span>tam işlevsellik ile</span>",
                list: [
                  {
                    title: "Bilgi Bankası",
                    text: "Uzun eğitim programları, kısa yoğunlukta"
                  },
                  {
                    title: "Kişiselleştirilmiş eğitim",
                    text: "İlginç kursları, sohbetleri ve web seminerlerini kendiniz seçersiniz"
                  },
                  {
                    title: "Web seminerleri ve çevrimiçi sohbetler",
                    text: "mentorlar ve ekiplerle çevrimiçi sohbetler, sesli ve görüntülü yayınlar"
                  },
                  {
                    title: "Kendi ilerlemenizi kontrol etme",
                    text: "Kişisel bir hesapla, öğrenme ilerlemenizi takip edebilirsiniz"
                  },
                  {
                    title: "Başarılar, ödüller ve sıralamalar",
                    text: "Yarışmalar, benzersiz görevler ve başarılar"
                  },
                  {
                    title: "Oyunlar ve boş zaman etkinlikleri",
                    text: "Platformda oyunlar, forumlar ve çeşitli konularda iletişim mevcuttur"
                  }
                ],
                footer: {
                  text: "Platformda çalışması hakkında <span>ücretsiz giriş kursunu tamamla</span>"
                }
              },
              history: {
                header: "<span class=\"text-stroke text-stroke__green\">Başarı öyküleri</span> <br> ve eğitimle ilgili geri bildirimlerden ilham al",
                successful_stories: "Başarı Öyküleri",
                review: "Eğitim ile ilgili geri bildirimler"
              },
              create: {
                title: "Yarat ve <span class=\"opportunities-header__white2 create-header__white\">sat</span> <span class=\"create-header__stroke text-stroke\">kendi <img loading=\"lazy\" src=\"img/create/star.png\" alt=\"\"> kurslarını</span> <br class=\"hidden-desktop\"> tüm dünyada",
                list: [
                  {
                    title: "arayüz",
                    text: "<span>Kullanıcı dostu arayüz.</span> Her şey açık <br> talimatlar olmadan bile"
                  },
                  {
                    title: "işlevsellik",
                    text: "Herhangi bir <br>çevrimiçi eğitim biçimi</span> için araçlar"
                  },
                  {
                    title: "uyarlanabilirlik",
                    text: "Platform arayüzü tüm araçlar için uyarlanmıştır"
                  },
                  {
                    title: "Kurs Mağazası",
                    text: "İlgi alanlarına göre yararlı konular"
                  },
                  {
                    title: "Arka ofis",
                    text: "Kişisel hesabınızdaki tüm süreçlerin istatistikleri ve yönetimi"
                  },
                  {
                    title: "Olanaklar",
                    text: "Herhangi bir faaliyet alanında uzmanlığınızı geliştirin ve pazarlayın"
                  },
                  {
                    title: "Bonuslar",
                    text: "Kurslar platformdaki başarılar için bir hediye olarak"
                  },
                  {
                    title: "Bağlı Programlar",
                    text: "İstemci ağınızı genişletmek için otomatik ödüller"
                  }
                ],
                footer: {
                  title: "<span>İlgi çekici kurslar oluştur ve <span class=\"text-stroke text-stroke__green\">kazan</span> <br> kendi <img loading=\"lazy\" src=\"img/create/star_green.png\" alt=\"\"> uzmanlık sayesinde</span>"
                }
              },
              talk: {
                title: "Platformun olanaklarından bahset ve <br> bağlı kuruluş programlarında <span><div class=\"talk-header__circles\"><div class=\"talk-header__circle\"></div><div class=\"talk-header__circle\"></div></div> kazan </span>",
                list_info: [
                  "<div class=\"talk-circle__text\">daha</div><div class=\"talk-circle__title talk-circle__title-small\">300<span>K</span></div><div class=\"talk-circle__text\">ortaktaklar <br> her yerde <br> dünyaya</div>",
                  "<div class=\"talk-circle__text\">daha fazlası</div><div class=\"talk-circle__title talk-circle__title-small\">50<span><span class=\"talk-circle__text__dollar\">$</span></div><div class=\"talk-circle__text\"><br>ortaklarına ödendi</div>",
                  "<div class=\"talk-circle__title\">1500<span>+</span></div><div class=\"talk-circle__text\">yeni müşteriler<br> her<br> ay</div>",
                  "<div class=\"talk-circle__text\">daha</div><div class=\"talk-circle__title talk-circle__title-small\">2 <span>yazların</span></div><div class=\"talk-circle__text\">çevrimiçi olarak-<br> eğitim</div>"
                ]
              },
              calculator: {
                title: "Kime uygun olacak?",
                list: [
                  " <br>Eğitim<br> ürünlerin satışında para kazanmak isteyen herkese",
                  "Blogcular, <br> Telegram-kanallar ve site sahiplere",
                  "Yeni başlayanlar ve deneyimli internet-<br>girişimciler, pazarlamacılar, <br> ağ endüstrisi uzmanlarına"
                ],
                footer: {
                  title: "Kazanmaya başla <span>hemen şimdi</span>",
                  text: "Sadece arkadaşlarınıza bize tavsiyede bulunun"
                },
                main: {
                  title: "Kursunuzun satışından ne kadar kazanabilirsiniz?",
                  text: "Seçin <span>dövizi</span>",
                  sold_courses: "<span>Sayı</span> <br class=\"hidden-mobile\"> satılan kurslar <br class=\"hidden-mobile\"> ayda",
                  average_cost: "Kursun <span>orta <br class=\"hidden-mobile\"> maliyeti <br class=\"hidden-mobile\"></span>",
                  remuneration: "Ödülünüz: <br class=\"hidden-desktop\"> <span>aylık<span class=\"calculator-main__total-result\">700</span></span>"
                }
              },
              answer: {
                title: "Kime uygun olacak?",
                list: [
                  {
                    title: "Platformu bir mobil cihazdan kullanmak mümkün mü?",
                    text: "Platforma masaüstü, dizüstü bilgisayar, tablet veya telefon dahil olmak üzere çeşitli cihazlardan erişilebilir."
                  },
                  {
                    title: "Eğitime ne kadar zaman ayırmam gerekiyor? Ben hem de çalışıyorum!",
                    text: "Rahat bir ritim ve eğitim programını kendiniz seçersiniz. Çoğu kullanıcı Akademimizi ve işlerini işe alımda birleştiriyor. Birçoğu zaten işe alımdan tamamen ayrıldı ve şimdi sadece çevrimiçi olarak gelişiyor ve para kazanıyorlar."
                  },
                  {
                    title: "Doğru rotayı nasıl seçmeliyim?",
                    text: "Platformumuzda ücretsiz kayıt yaptırmanız, tanıtım kursundan geçmeniz, kişisel hesabınızdaki ürünlerin kısa bir açıklamasını okumanız ve kendiniz için güncel bir kurs seçmeniz gerekir. <br> Ayrıca, platformumuzun aktif kullanıcılarına ve uzmanlarına yönelmenize ve doğru rotayı seçmenize yardımcı olacak şekilde başvurabilirsiniz."
                  },
                  {
                    title: "Diğer platformlardan daha iyi olan nedir?",
                    text: "Mükemmelliğin bir sınırı yoktur ... Birinin daha iyi olduğunu ve birinin daha kötü olduğunu söylemek tamamen doğru ve doğru değildir. Bizim görevimiz her katılımcının olumlu bir sonucudur. Biz sadece kendi işimizi yapıyoruz ve bunu iyi yapmaya çalışıyoruz. Bunu nasıl başardığımızı kullanıcılarımıza sormanız en iyisidir. Yorumları inceleyin. Ayrıca ücretsiz kayıt yaptırmayı ve platformumuzu içeriden tanımanızı da öneriyoruz. Bizden hoşlanacağınıza eminiz!"
                  },
                  {
                    title: "Eğitim nasıl gerçekleştiriyor?",
                    text: "Videolar, slaytlar, metinler, talimatlar ve uygulama uygulamalarını içerebilen dersler her kursun temelidir Platformumuzda ayrıca, kullanıcıların öğrenme sürecinde iletişim kurdukları ve deneyimlerini paylaştıkları sohbet odaları, güncel konulara ilişkin forumlar, düzenli çevrimiçi yayınlar ve web seminerleri düzenlenmektedir."
                  },
                  {
                    title: "Para kazanmayı öğrenmek istiyorum. Platformunuz bu konuda bana yardımcı olacak mı?",
                    text: "Elbette! Platformumuzda, internet girişimcilerinin ve ağ işletmelerinin liderlerinin kişisel deneyimlerine dayanan kurslar toplanmaktadır. Buna ek olarak, çok cömert bir sevk bonusu biriktirme programımız var ve bu nedenle eğitim sürecinde zaten para kazanabilirsiniz. Ayrıca platformumuzda kursların yazarı olma ve satışlarından para kazanma fırsatı da var!"
                  }
                ]
              },
              footer: {
                copyright: "Copyright 2022 <br> Tüm hakları saklıdır",
                platform_policy: "Platform Politikası (indir)",
                privacy_policy: "Gizlilik Politikası",
                application: [
                  "Ek No 1",
                  "Ek No 2",
                  "Ek No 3",
                  "Ek No 4",
                  "Ek No 5"
                ],
                paradigma: "<br> paradigma.website'de sevgiyle yapılmış"
              },
              popup_login: {
                button: "Giriş yap",
                forgot_password: "Şifreyi unuttunuz mu?"
              },
              popup_register: {
                button: "Kaydol",
                account_exists: "Zaten bir hesabınız var mı? <span>Giriş yap</span>",
                register_button: "Kaydol",
                learn_more: "daha fazla bilgi edinmek için"
              },
              popup_leave: {
                title: "HEMEN GİDİYOR MUSUNUZ?",
                text: "Arkadaşlığımızın bir işareti olarak, yararlı kılavuzu indirin:",
                footer: {
                  title: "Her yaşta öğrenerek nasıl para kazanılır?",
                  agree: "Kişisel verilerin işlenmesinin şartlarını kabul etmiş oluyorsunuz"
                }
              }
            }
          },
          it: {
            translation: {
              header: {
                logo: "Piattaforma online internazionale di corsi d'autore",
                navbar: {
                  courses: "Corsi",
                  authors: "Autori",
                  about_platform: "Descrizione della piattaforma",
                  partners_program: "Programma di affiliazione",
                  successful_stories: "Storie di successo",
                  own_course: "Proprio corso",
                  answers: "Risposte alle domande"
                }
              },
              button: {
                sign_in: "Accedi",
                sign_up: "Registrazione",
                register: "Registrati e scopri di più",
                start_free: "Inizia gratis",
                find_out_more: "Scopri di più",
                download: "Scarica"
              },
              main: {
                title: "Formazione moderna <span>senza</span> limiti",
                description: "con l'opportunità di ottenere il guadagno",
                list_info: {
                  any_age: "Per qualsiasi <br> età",
                  unlimited_access: "Accesso <br> illimitato",
                  areas_of_study: "8 campi di <br> formazione"
                }
              },
              become: {
                title: "Diventa uno specialista <br> moderno e <br><span class=\"text-stroke\">ricercato</span>",
                description: "Ti invitiamo ad unirti ad una <span>comunità unica di veri professionisti, giovani specialisti e semplicemente persone appassionate</span><br />da vari settori in tutto il mondo",
                main: {
                  intro: "Nella \"Lime Academy\" <span>si può ottenere conoscenze pertinenti e competenze necessarie</span> per padroneggiare nuove professioni online e realizzare con successo il proprio potenziale",
                  info: "Abbiamo <span>unito la teoria e la pratica in un sistema</span> grazie al quale gli utenti della nostra piattaforma iniziano a guadagnare già durante gli studi!",
                  mission: "La nostra missione è quella di unire le persone </strong> da tutto il mondo in una comunità di partner, creare un ambiente per la rializzazione del loro potenziale creativo e insegnare ad ognuno a guadagnare utilizzando tecnologie moderne"
                },
                about: {
                  programs: "<div class=\"become-circle__title\">80<span>+</span></div> <div class=\"become-circle__text\">programmi formativi</div>",
                  trainers: "<div class=\"become-circle__title\">50<span>+</span></div> <div class=\"become-circle__text\">esperti e coach</div>",
                  members: "<div class=\"become-circle__text\">oltre</div> <div class=\"become-circle__title become-circle__title-small\">300<span>к</span></div> <div class=\"become-circle__text\">membri della nostra comunità </div>"
                }
              },
              direction: {
                header: {
                  title: "Seleziona il <span class=\"text-stroke text-stroke__green\">campo</span> migliore per te",
                  text: "<p><span>Corsi formativi per qualsiasi livello di conoscenze e qualsiasi obiettivo</span> </p> <p>Non è obbligatorio avere un titolo di alta formazione o seguire qualsiasi addestramento <span>preliminare</span></p>"
                },
                buttons: [
                  "Sviluppo personale",
                  "Marketing",
                  "Formazione generale",
                  "Lingue straniere",
                  "Finanza",
                  "Cultura digitale",
                  "Speciali",
                  "Tutti i campi"
                ],
                slider: {
                  title: [
                    "Rirorsa",
                    "Auto-analisi",
                    "Autopresentazione",
                    "Brand personale sull'internet",
                    "Motivazione",
                    "Atteggiamenti",
                    "Impatto sul consumatore",
                    "Come presentare la propra azienda sull'internet",
                    "Persone, processi, tecnologie",
                    "Vendite attraverso i valori",
                    "Estrazione della personalità",
                    "Comportamento dei clienti",
                    "Sviluppo del brand personale",
                    "Elaborazione di una strategia dello sviluppo del business online",
                    "Come far crescere l'efficienza di campagne nella rete di ricerca"
                  ],
                  descriptions: [
                    "Scoprirai quale impatto il tuo stato d'animo fa sulle vendite e cosa impedisce a te e ai tuoi clienti di essere pieni di risorse. Saprai di più dei canali percettivi attraverso i quali le persone ottengono delle informazioni.",
                    "Il cliente è la tua riflessione. Ecco perché prima di tutto bisogna capire come riuscire a vendere il prodotto non ad un cliente ma a se stessi. Guarda dentro di te e analizza come ti presenti e come ti percepiscono gli altri.",
                    "L'autopresentazione è un'abilità di creare un'immagine positiva di se stessi e incuriosire il proprio cliente o il pubblico. Saper autopresentarsi è una competenza importantissima che dà inizio allo sviluppo del brand personale.",
                    "Lo sviluppo del brand personale nel mondo di oggi è impossibile senza le reti sociali. A questo corso scoprirai come trovare la propria nicchia nelle reti sociali, come distinguersi dai competitori e monetizzare il proprio blog.",
                    "Ti è mai capitato di avere una gran voglia di fare qualcosa che rimandi sempre a domani mentre questo giorno non arriva mai? La causa è la mancanza di motivazione. A questo corso analizzeremo da dove proviene la motivazione e come farla crescere da se stessi.",
                    "Qual è la differenza tra la mentalità dei ricchi e quella dei poveri? Perché qualcuno vive la sua vita in modo facile e riesce a raggiungere tutto quello che vuole mentre gli altri dubitano sempre delle proprie capacità e forze?",
                    "La regola numero uno di ogni bravo manager è che il cliente sta sempre al primo posto. La cosa più importante è il suo stato d'animo e il suo benessere.",
                    "Seleziona il tuo indirizzo formativo: business, brand personale o marketing. Scopri come attrarre più clienti e follower su Instagram",
                    "Acquistiamo non un prodotto o un servizio ma un'emozione che ci regalano questi prodotti, servizi o persone che li vendono. Si chiama \"l'effetto di contagio\".",
                    "Scoprirai cosa sono i valori nelle vendite e come utilizzarli per raggiungere il successo. Saprai di più del concetto \"estrazione della personalità\" e scoprirai come farlo senza errori.",
                    "Il brand personale è quello che ti distingue dai competitori, il tuo approccio individuale alla presentazione del tuo prodotto o alle tue attività imprenditoriali. Fai il primo passo alla creazione del tuo brand personale!",
                    "Impara a trasmettere il valore del tuo prodotto ed elaborare strategie per promuoverlo e metterlo sul mercato. Rafforza le tue capacità di marketing con un nuovo approccio di prodotto"
                  ],
                  modules: [
                    "2 moduli",
                    "4 moduli",
                    "5 moduli",
                    "6 moduli",
                    "8 moduli"
                  ]
                },
                footer: {
                  text: "<span>Unisciti ora</span> e seleziona un campo"
                }
              },
              authors: {
                title: "<span class=\"text-stroke text-stroke__green\">Autori <br></span>dei corsi",
                description: "I nostri esperti <span>ti porteranno fino al traguardo</span> e baderanno a non farti perdere l'interesse verso il processo formativo",
                list: [
                  {
                    name: "Aynur ZINNATULIN",
                    description: "Imprenditore, <br> presentatore televisivo e radiofonico. <br> Vincitore del premio \"TEFI\"",
                    more_info: "Autore dei libri \"Medicinale contro la paura\"», \"5 passi alla tua intervista ideale\", \"Ti impedisce solo la paura\", \"L'arte di affascinare gli sconosciuti\". Coach del discorso pubblico e dell'arte del dire. Ha un meraviglioso senso d'umorismo",
                  },
                  {
                    name: "Aliya <br>Khurmatova",
                    description: "Esperto pratico delle vendite online<br class=\"mobile_break\"> e offline.<br> Autore di corsi online<br> e consulente personale",
                    more_info: "Aliya Khurmatova è un esperto delle vendite, della promozione offline e online e della consulenza imprenditoriale. Business coach professionale con più di 14 anni di esperienza. Dal 2016, offre consulenze e organizza formazione aziendale per grandi reti di imprese. È anche autore di numerosi training per dirigenti e top manager in vari settori del business. Il suo corso ti permetterà di sviluppare notevolmente le tue competenze nel campo delle vendite."
                  },
                  {
                    name: "Yulia Dolgova",
                    description: "Imprenditrice, psicologa,<br> coach energetico.<br>Autore del libro \"Il principio di Dolgova\"",
                    more_info: "Nell'arco di 13 anni, Yulia Dolgova è riuscita ad unire le migliori tecniche in vari programmi formativi mirati all'organizzazione e monetizzazione della propria impresa, sia per giovani imprenditori che per quelli con esperienza. Il suo approccio di sistema nei confronti del processo formativo ti permetterà di evitare instabilità delle vendite. Yulia è anche organizzatrice e speaker di eventi online e offline su larga scala."
                  },
                  {
                    name: "Anna Semenova",
                    description: "Imprenditrice, business coach. <br> Autore del corso<br class=\"mobile_break\"> \"Grandi persone - grandi fatture\". <br> Forte motivatrice e leader di un grande team",
                    more_info: "Una vasta esperienza pratica ha acconsentito ad Anna Semenova di accumulare e sistematizzare le proprie conoscenze in un sistema formativo di \"ciclo completo\". Organizzatrice e speaker di varie maratone online tematiche. Utilizzando sempre parole semplici e chiare e fornendo esempi pratici, insegna a vendere in maniera stabile senza tensione e paura",
                  },
                  {
                    name: "MILA MATVEEVA",
                    description: "Esperto del mercato, speaker, motivatrice",
                    more_info: "Ha un'esperienza lavorativa nel campo del marketing di rete di oltre 20 anni. Aver iniziato come giovane imprenditrice, si è fatta strada fino a un top leader. Ha lavorato con successo in aziende in vari settori del business. Nel suo corso formativo, Mila Matveeva presenterà alcuni metodi pratici che ti aiuteranno a diventare un ottimo psicologa, realizzare il tuo potenziale interno e aprire il proprio flusso di denaro."
                  },
                  {
                    name: "Anastasia Kotova",
                    description: "Esperto dell'arte del dire <br> e del discorso pubblico",
                    more_info: "Autore del manuale per giovani imprenditori \"I primi passi\" e creatore del corso \"5 passi verso le vendite. L'arte di dialogare.\" Il corso di Anastasia Kotova ti permetterà di sviluppare il proprio apparato fonatorio e liberarsi dalle barriere. Riuscirai ad espandere il tuo vocabolario e imparare a far sì che il tuo pubblico ti guardi appunto nella bocca\"",
                  },
                  {
                    name: "SVETLANA SKORNYAKOVA",
                    description: "Imprenditrice. Autore del corso \"Target di riferimento\" <br> e dei business training per la promozione nelle reti sociali",
                    more_info: "Nell'arco di 4 anni del lavoro intenso sull'Internet Svetlana Skornyakova ha selezionato degli strumenti efficaci che permettono di ottenere un flusso di clienti e partner per il proprio business. Il corso \"Target di riferimento\" ti aiuterà ad individuare dei gruppi nell'ambito del tuo target di riferimento e creare il tuo Unique Selling Point per ogni gruppo. Scoprirai i metodi e gli approcci del lavoro, elaborerai il tuo content plan e imparerai a trovare dei business partner tramite l'internet.",
                  },
                  {
                    name: "EVGENY E OLGA ZHARKOV",
                    description: "Imprenditori MLM. <br>Esperti del lavoro con le \"chiamate a freddo\"",
                    more_info: "Al corso di Evgeny e Olga Zharkov scoprirai dove prendere i numeri di telefono di clienti potenziali e come tenere in modo efficace il proprio elenco telefonico con i numeri telefonici di partner potenziali. Imparerai a definire il tuo target di riferimento, ottenerai degli script delle chiamate telefoniche e padroneggerai la tecnica di \"chiamate a freddo\". Evgeny e Olga ti insegneranno a superare la paura e condivideranno con te degli strumenti psicologici per un lavoro efficace."
                  }
                ]
              },
              opportunities: {
                title: "Le tue <span class=\"opportunities-header__white\">opportunità di studiare</span> non sono limitate",
                list: [
                  {
                    title: "Dove vuoi",
                    text: "Studia a casa, in viaggio verso l'ufficio, in vacanza o durante una pausa pranzo"
                  },
                  {
                    title: "Quando vuoi",
                    text: "Studia al tuo proprio ritmo senza alcun limite di tempo"
                  },
                  {
                    title: "In qualsiasi ordine",
                    text: "Puoi fare alcuni corsi contemporaneamente o uno dopo l'altro"
                  }
                ]
              },
              community: {
                title: "La pi grande <span class=\"text-stroke text-stroke__green\">comunità</span> dei professionisti, esperti, utenti con esperienza e novizi",
                list: [
                  {
                    title: "Compagni di idee",
                    text: "Mentre studi, discuti vari temi con il tuo tutor e aiuti ai giovani specialisti"
                  },
                  {
                    title: "Comunicazione",
                    text: "Opportunità di comunicare con gli autori dei corsi e gli speaker nonché partecipare ai chat e videoconferenze"
                  },
                  {
                    title: "Atmosfera",
                    text: "Sulla nostra piattaforma ti sentirai tranquillo e comodo, come a casa"
                  }
                ]
              },
              tools: {
                title: "Abbiamo creato dei migliori strumenti per <span class=\"text-stroke text-stroke__green\">lo studio",
                text: "Piattaforma formativa <br><span>con l'intera gamma di funzioni</span>",
                list: [
                  {
                    title: "Base di conoscenza",
                    text: "Programmi formativi di lunga durata, corsi corti intensi"
                  },
                  {
                    title: "Formazione personalizzata",
                    text: "Sei tu a scegliere dei corsi, chat e webinar più interessanti per te"
                  },
                  {
                    title: "Webinar e chat online",
                    text: "Chat online con dei tutor e dei team, trasmissione di audio e video in diretta"
                  },
                  {
                    title: "Controllo del proprio rendimento accademico",
                    text: "Accedendo all'area riservata, puoi monitorare i tuoi progressi"
                  },
                  {
                    title: "Risultati, premi e rating",
                    text: "Gare, compiti interessanti e risultati"
                  },
                  {
                    title: "Giochi e intrattenimenti",
                    text: "Sulla piattaforma ci sono vari giochi, forum e opportunità di parlare di vari temi"
                  }
                ],
                footer: {
                  text: "<span>Fai un corso introduttivo gratuito</span> dedicato all'utilizzo della piattaforma"
                }
              },
              history: {
                header: "Ispirati <span class=\"text-stroke text-stroke__green\">da storie di successo</span> <br> e recensioni sulla formazione",
                successful_stories: "Storie di successo",
                review: "Recensioni sulla formazione"
              },
              create: {
                title: "Crea e <span class=\"opportunities-header__white2 create-header__white\">vendi</span> <span class=\"create-header__stroke text-stroke\">i propri <img loading=\"lazy\" src=\"img/create/star.png\" alt=\"\"> corsi</span> <br class=\"hidden-desktop\"> in tutto il mondo",
                list: [
                  {
                    title: "Interfaccia",
                    text: "<span>Una comoda interfaccia.</span> Tutto è chiaro <br> anche senza istruzioni"
                  },
                  {
                    title: "Funzionalità",
                    text: "Инструменты для любых <br> форматов онлайн-обучения</span>"
                  },
                  {
                    title: "Adattività",
                    text: "L'interfaccia della piattaforma è compatibile con tutti i gadget"
                  },
                  {
                    title: "Negozio di corsi",
                    text: "Temi utili per tutti i gusti"
                  },
                  {
                    title: "Back office",
                    text: "Statistica e gestione di tutti i processi dalla propria area utenti"
                  },
                  {
                    title: "Opportunità",
                    text: "Sviluppa e vendi le tue competenze in qualsiasi campo"
                  },
                  {
                    title: "Bonus",
                    text: "Corsi in regalo per i risultati conseguiti sulla piattaforma"
                  },
                  {
                    title: "Programmi di affiliazione",
                    text: "Compensi automatici per l'espansione della rete di clienti"
                  }
                ],
                footer: {
                  title: "<span>Crea dei corsi coinvolgenti e <span class=\"text-stroke text-stroke__green\">monetizza</span> <br> le proprie <img loading=\"lazy\" src=\"img/create/star_green.png\" alt=\"\"> competenze</span>"
                }
              },
              talk: {
                title: "Parla delle opportunità della piattaforma e <span><div class=\"talk-header__circles\"><div class=\"talk-header__circle\"></div><div class=\"talk-header__circle\"></div></div> guadagna </span> <br> partecipando ai programmi di affiliazione",
                list_info: [
                  "<div class=\"talk-circle__text\">oltre</div><div class=\"talk-circle__title talk-circle__title-small\">300<span>к</span></div><div class=\"talk-circle__text\">partner <br> in tutto <br> il mondo</div>",
                  "<div class=\"talk-circle__text\">oltre</div><div class=\"talk-circle__title talk-circle__title-small\">50<span>к <span class=\"talk-circle__text__dollar\">$</span></div><div class=\"talk-circle__text\">pagati ai<br> partner</div>",
                  "<div class=\"talk-circle__title\">1500<span>+</span></div><div class=\"talk-circle__text\">nuovi clienti<br> ogni<br> mese</div>",
                  "<div class=\"talk-circle__text\">oltre</div><div class=\"talk-circle__title talk-circle__title-small\">2 <span>anni</span></div><div class=\"talk-circle__text\">di esperienza nella formazione-<br> online</div>"
                ]
              },
              calculator: {
                title: "Per chi è utile?",
                list: [
                  "Per chi vuole guadagnare <br> vendendo i propri prodotti <br> formativi",
                  "Per i bloger o proprietari di <br> canali Telegram e siti web",
                  "Per<br>imprenditori su Internet, esperti del mercato e <br> altri professionisti nell'industria di rete, sia giovani che con esperienza"
                ],
                footer: {
                  title: "Inizia a guadagnare <span>ora</span>",
                  text: "Racconta di noi ai tuoi amici e conoscenti"
                },
                main: {
                  title: "Quanto si può guadagnare vendendo il proprio corso?",
                  text: "Seleziona <span>la valuta</span>",
                  sold_courses: "<span>Numero</span> <br class=\"hidden-mobile\"> di corsi venduti <br class=\"hidden-mobile\"> al mese",
                  average_cost: "<span>Prezzo <br class=\"hidden-mobile\"> medio <br class=\"hidden-mobile\"></span> di un corso",
                  remuneration: "Tua rimunerazione: <br class=\"hidden-desktop\"> <span>al mese <span class=\"calculator-main__total-result\">700</span></span>"
                }
              },
              answer: {
                title: "Per chi è utile?",
                list: [
                  {
                    title: "Si può utilizzare la piattaforma da un dispositivo mobile?",
                    text: "La piattaforma è disponibile da vari dispositivi, compresi i computer fissi, i PC, i tablet e gli smartphone."
                  },
                  {
                    title: "Quanto tempo ci si mette per studiare? Lavoro full time!",
                    text: "Sei tu a scegliere un ritmo conveniente e l'orario degli studi. La maggior parte degli utenti cumulano gli studi nella nostra Accademia con il lavoro subordinato. Molti di loro hanno già abbandonato il lavoro subordinato e ora sviluppano la loro carriera su Internet e guadagnano solo online."
                  },
                  {
                    title: "Come si fa a selezionare un corso che mi va?",
                    text: "Bisogna effettuare la registrazione gratuita sulla piattaforma, completare il corso introduttivo, leggere una breve descrizione dei prodotti nell'area riservata e selezionare il corso che è più adatto a te. <br /> Si può anche contattare gli utenti attivi e esperti della nostra piattaforma che ti aiuteranno ad orientarsi e selezionare il corso necessario."
                  },
                  {
                    title: "Perché siete migliori di altre piattaforme?",
                    text: "Non ci sono limiti alla perfezione… Non è molto giusto dire che qualcuno è migliore o peggiore degli altri. La nostra missione è aiutare ogni utente a raggiungere l'obiettivo che si è prefisso. Stiamo semplicemente facendo il nostro lavoro e cerchiamo di farlo bene. Come ci riusciamo - meglio chiederlo ai nostri utenti, perciò ti invitiamo a leggere le recensioni. Si consiglia inoltre ad effettuare la registrazione gratuita per poter conoscere la piattaforma per filo e per segno. Siamo sicuri che ti piacerà lavorare con noi!"
                  },
                  {
                    title: "Come si svolge il processo formativo?",
                    text: "L'elemento principale di ogni corso sono le lezioni che possono comprendere dei video, slide, testi, istruzioni e app per lavoro pratico. Sulla piattaforma ci sono anche delle chat dove gli utenti interagiscono durante il processo formativo e scambiano esperienza, dei forum dedicati ai temi più interessanti, nonché trasmissioni live e webinar online."
                  },
                  {
                    title: "Voglio imparare a guadagnare. La vostra mi aiuterà a farlo?",
                    text: "Certo! Sulla nostra piattaforma sono accumulati i corsi basati sull'esperienza personale degli imprenditori online e dei leader del business su Internet. Abbiamo inoltre un programma di bonus e di affiliazione molto profittevole, il che vuol dire che si può iniziare a guadagnare durante gli studi. C'è anche l'opportunità di diventare un autore di corsi sulla nostra piattaforma e venderli per guadagnare i soldi!"
                  }
                ]
              },
              footer: {
                copyright: "Copyright 2022 <br> Tutti i diritti riservati",
                platform_policy: "Politica della Piattaforma (scarica)",
                privacy_policy: "Informativa sulla Privacy",
                application: [
                  "Applicazione №1",
                  "Applicazione №2",
                  "Applicazione №3",
                  "Applicazione №4",
                  "Applicazione №5"
                ],
                paradigma: "Fatto con l'amore <br> sul paradigma.website"
              },
              popup_login: {
                button: "Accedi",
                forgot_password: "Password dimenticata?"
              },
              popup_register: {
                button: "Registrati",
                account_exists: "Hai già un account? <span>Accedi</span>",
                register_button: "Registrati",
                learn_more: "per scoprire di più"
              },
              popup_leave: {
                title: "TE NE STAI GIÀ ANDANDO?",
                text: "Ti invitiamo a scaricare una guida utile in segno della nostra conoscenza:",
                footer: {
                  title: "Come guadagnare in qualsiasi età facendo i propri studi?",
                  agree: "Esprimi il tuo consenso alle condizioni del trattamento dei dati personali"
                }
              }
            }
          },
          uk: {
            translation: {
              header: {
                logo: "Міжнародна онлайн-платформа авторських курсів",
                navbar: {
                  courses: "Курси",
                  authors: "Автори",
                  about_platform: "Про платформу",
                  partners_program: "Партнерська програма",
                  successful_stories: "Історії успіху",
                  own_course: "Свій курс",
                  answers: "Відповіді на питання"
                }
              },
              button: {
                sign_in: "Увійти",
                sign_up: "Реєстрація",
                register: "Зареєструйтеся і дізнайтеся докладніше",
                start_free: "Почати безкоштовно",
                find_out_more: "Дізнатися детальніше",
                download: "Завантажити"
              },
              main: {
                title: "Сучасна освіта <span>без</span> обмежень",
                description: "з можливістю отримання прибутку",
                list_info: {
                  any_age: "Для будь-якого <br> віку",
                  unlimited_access: "Необмежений <br> доступ",
                  areas_of_study: "8 напрямків <br> навчання"
                }
              },
              become: {
                title: "Стань сучасним <br> і затребуваним <br><span class=\"text-stroke\">спеціалістом</span>",
                description: "Запрошуємо до <span>унікальної спільноти спрофесіоналів своєї справи, спеціалістів-початківців і просто захоплених людей</span><br />з різних сфер діяльності у всьому світі",
                main: {
                  intro: "У «Lime Academy» <span>можня отримати актуальні знання та необхідні нвички</span> для опранування нових інтернет-професій і успішної реалізації свого потенціалу",
                  info: "Ми <span>об'єднали теорію і практику в систему,</span> завдяки якій користувачі нашої платформи починають заробляти вже під час навчання!",
                  mission: "Наша мисія - об'єднати людей </strong> усього світу у партнерське товариство, створити умови для розкриття їхнього творчого потенціалу та навчити кожного заробляти за допомогою сучасних технологій"
                },
                about: {
                  programs: "<div class=\"become-circle__title\">80<span>+</span></div> <div class=\"become-circle__text\">навчальних програм</div>",
                  trainers: "<div class=\"become-circle__title\">50<span>+</span></div> <div class=\"become-circle__text\">тренерів экспертів</div>",
                  members: "<div class=\"become-circle__text\">більше</div> <div class=\"become-circle__title become-circle__title-small\">300<span>к</span></div> <div class=\"become-circle__text\">осіб у нашій спільноті</div>"
                }
              },
              direction: {
                header: {
                  title: "Обери найкращий <span class=\"text-stroke text-stroke__green\">напрямок</span> для себе",
                  text: "<p><span>Курси для будь-якого рівня знань і цілей</span> </p> <p>Вища освіта або будь-яка попередня підготовка <span>не потрібна</span></p>"
                },
                buttons: [
                  "Особистісне зростання",
                  "Маркетинг",
                  "Загальноосвітні",
                  "Іноземні мови",
                  "Фінанси",
                  "Цифрова грамотність",
                  "Спеціальні",
                  "Усі напрямки"
                ],
                slider: {
                  title: [
                    "Ресурс",
                    "Самоаналіз",
                    "Самопрезентація",
                    "Особистий бренд в інтернеті",
                    "Мотивація",
                    "Настанови",
                    "Вплив на покупця",
                    "Як розказати про свою компанію в інтернеті",
                    "Люди, процеси, технології",
                    "Продажі через цінності",
                    "Розпакування особистості",
                    "Поведінка покупця",
                    "Розвиток особистого бренду",
                    "Розробка стратегії розвитку бізнесу онлайн",
                    "Як підвищити ефективність кампаній у пошуковій мережі"
                  ],
                  descriptions: [
                    "Ви дізнаєтеся, як Ваш стан впливає на продажі і що заважає Вам і Вашим покупцям бути в ресурсі. Познайомитеся з каналами сприйняття, через які люди отримують інформацію.",
                    "Клієнт - це відображення вас. Тому у першу чергу ви маєте зрозуміти не як продати клієнту, а як продати себе. Зазирніть у себе глибше та проаналізуйте те, як ви падаєте себе, і як вас сприймають.",
                    "Самопрезентація - це вміння скласти про себе позитивний образ, зацікавити своего клієнта або аудиторію. Навичка самопрезентації - ключова навичка, з якої починається розвиток особистого бренду.",
                    "Розвиток особистого бренду неможливий у сучасному світі без соцмереж. На курсі ви дізнаєтеся, як знайти свю нішу у соціальних мережах, не загубитися серед конкурентів і монетизувати свій блог.",
                    "Чи бувало у вас таке, що чогось дуже хочеться, але ви відкладаєте це на \"потім\", яке не настає ніколи? Причина - нестача мотивації. На курсі розберемо: звідки береться мотивація і як самостійно підвищити для себе її рівень.",
                    "Чим відрізняється мишлення «бідних» і «багатих»? Чому хтось іде по життю з легкістю і йому все вдається, а інші безкінечно сумніваються в особистих здатностях і силах?",
                    "Головне правило гарного менеджера - клієнт завжди на першому місці. Найголовніше - його самопочуття і добробут.",
                    "Оберіть свою траєкторию навчання: бізнес, особистий бренд або маркетинг. Дізнайтеся, як привабити більше клієнтів і підписників в Instagram",
                    "Ми купуємо не товар або послугу, а той стан, який нам дають ці товари, постуги і люди, які їх продають. Це называеться “Эфект зараження”.",
                    "Ви дізнаєтеся, що таке цінності у продажах і як використовувати їх у якості засобу досягнення успіху. Познайомитеся з поняттям “розпакування особистості” і дізнаєтеся, як уникнути помилки у цьому процесі.",
                    "Особистий бренд - це те, що виділяє вас серед конкурентів, ваш індивідуальний підхід до презентації товару або ведення бізнесу. Зробіть перший крок до його створення!",
                    "Навчіться упаковувати цінність продукту в комунікацію, складати стратегію просування й виводу продукту на ринок. Підсильте маркетингові навички продуктовим підходом"
                  ],
                  modules: [
                    "2 модулі",
                    "4 модулі",
                    "5 модулів",
                    "6 модулів",
                    "8 модулів"
                  ]
                },
                footer: {
                  text: "<span>Приєднуйся зараз</span> і обирай напрям"
                }
              },
              authors: {
                title: "<span class=\"text-stroke text-stroke__green\">Автори <br></span>курсів",
                description: "Наші експерти <span>ведуть до мети</span> і слідкують, щоб інтерес до навчання не вгасав",
                list: [
                  {
                    name: "Айнур ЗІННАТУЛІН",
                    description: "Підприємець, <br> телеведучий і радіоведучий. <br> Володар премії «Теффі»",
                    more_info: "Автор книжок «Таблетка від страху», «5 кроків до вашого ідеального інтерв'ю», «Тобі заважає тільки страх», «Мистецтво очаровувати незнайомців». Тренер з публічних виступів і ораторського мистецтва. Людина з чудовим почуттям гумору."
                  },
                  {
                    name: "Алія <br>Хурматова",
                    description: "Успішний практик онлайн<br class=\"mobile_break\"> і офлайн продажів.<br> Автор циклу онлайн-курсів<br> і особистий консультант",
                    more_info: "Алія Хурматова є экспертом у продажах, офлайн і онлайн-просуненні, а також спеціалистом в області бізнес-консалтінгу. Професійний бізнес-тренер з досвідом більше 14 років. З 2016 року вона консультує і проводить корпоративне навчання для великих мереждевих копаній, а також є автором тренингів для керівників і топ-менеджерів у різних сферах бізнесу. Її курс дозволить Вам істотно підвищити свій рівень компетенцій в області продажів."
                  },
                  {
                    name: "Юлія Долгова",
                    description: "Підприємець, психолог,<br> енергетичний коуч.<br>Автор книжки «Принцип Долгової»",
                    more_info: "За 13 років Юлія Долгова упакувала кращі практики у программи навчання з побудови й монетизації своєї справи як для початківців, так і для досвічених підприємців. Її системний підхід у навчанні дозволить Вам виключити нестабільність у продажах. Вона також є організатором і спікером масштабних заходів онлайн і офлайн."
                  },
                  {
                    name: "Ганна Семенова",
                    description: "Підприємець, бізнес тренер. <br> Автор курсу<br class=\"mobile_break\"> «Великі люди – великі чеки». <br> Потужний мотиватор і лідер великої команди",
                    more_info: "Великий практичний досвід Ганни Семенової дозволив накопичити й систематизувати знання у систему навчання «повного циклу». Організатор і спікер тематичних онлайн-марафонів. Завжди простою і доступною мовою, через конкретні приклади, вона вчить стабільно продавати без напруги і страху."
                  },
                  {
                    name: "МІЛА МАТВЕЄВА",
                    description: "Маркетолог, спікер, мотиватор",
                    more_info: "Досвід роботи в індустріїї мережевого маркетингу більше 20 років. Пройшла шлях від продавця-початківця до топ-лідера. Успішно розвивалася в компаніях з різними напрямками діяльності. У навчальному курсі Міла Матвеєва розкриє практичні методики, які допоможуть Вас стати чудовим психологом для самого себе, розкрити Ваш внутрішній потенціал та відкрити свій грошовий потік."
                  },
                  {
                    name: "Анастасія Котова",
                    description: "Експерт в області ораторського мистецтва <br> та сценічної промови",
                    more_info: "Автор гайду з запуску новачка «Перші кроки\" і укладач курсу \"5 кроків продажів. Мистецтво вести діалог.\" Курс Анастасії Котової допоможе Вам розробити свій мовний апарат і позбавитися затисків. Ви зможете розширити словниковий запас і навчитеся робити так, щоб слухачі буквально “заглядали вам у рот”.",
                  },
                  {
                    name: "СВІТЛАНА СКОРНЯКОВА",
                    description: "Підприємець. Автор курсу «Цільова аудиторія» <br> та тренінгів із просунення у соцмережах",
                    more_info: "За 4 роки активної роботи у мережі інтернет Світлана Скорнякова відібрала ефективні інструменти, які дозволяють отримувати вхідний потік клієнтів і партнерів у бізнес. Курс «Цільова аудиторія» допоможе Вам визначити групи своєї цільової аудиторії, скласти УТП для кожної з груп. Ви дізнаєтеся про методи і прийоми роботи, складете свій контент-план, навчитеся знаходити парнерів у бізнес через інтернет."
                  },
                  {
                    name: "ЄВГЕН та ОЛЬГА ЖАРКОВИ",
                    description: "МЛМ підприємці. <br>Експерти з роботи з «холодним» колом",
                    more_info: "На курсі Євгена та Ольги Жаркових Ви дізнаєтеся, де брати номери телефонів потенційних партнерів, як правильно вести свій телефонний довідник з контактами кандидатів у бізнес. Ви навчитеся визначати цільову аудиторію і отримаєте скрипти телефонних дзвінків, опануєте майстерність тіхніки «холодного дзвінку». Євген та Ольга навчать долати страх і поділяться психологічними прийомами для ефективної роботи."
                  }
                ]
              },
              opportunities: {
                title: "Ви <span class=\"opportunities-header__white\">не обмежені</span> у можливостях для навчання",
                list: [
                  {
                    title: "Де завгодно",
                    text: "Вчіться вдома, у дорозі, під час відпустки або обідньої перерви"
                  },
                  {
                    title: "Де зручно",
                    text: "Вчіться у своєму темпі без жодних обмежень у часі"
                  },
                  {
                    title: "У будь-якому порядку",
                    text: "Проходьте декілька курсів одразу або по черзі"
                  }
                ]
              },
              community: {
                title: "Найбільше <span class=\"text-stroke text-stroke__green\">товариство</span> спеціалістів, експертів, досвічених користувачів і новачків",
                list: [
                  {
                    title: "Однодумці",
                    text: "Ви навчаєтеся, обговорюєте питання з наставником і допомагаєте початківцям"
                  },
                  {
                    title: "Комунікація",
                    text: "Спілкування з авторами курсів, спікерами, чати, відеоконференції"
                  },
                  {
                    title: "Атмосфера",
                    text: "На нашій платформі - по-домашньому тепло і комфортно"
                  }
                ]
              },
              tools: {
                title: "Ми створили кращі інструменти для <span class=\"text-stroke text-stroke__green\">навчання",
                text: "Навчальна платформа <br><span>з повним функціоналом</span>",
                list: [
                  {
                    title: "База знань",
                    text: "Тривалі програми навчання, короткі інтенсиви"
                  },
                  {
                    title: "Персоналізоване навчання",
                    text: "Ви самі обираєте цікаві курси, чати і вебінари"
                  },
                  {
                    title: "Вебінари та онлайн-чати",
                    text: "онлайн-чати з наставниками і командами, аудіо- та відеотрансляції"
                  },
                  {
                    title: "Контроль власної успішності",
                    text: "За допомогою особистого кабінету Ви можете відстежувати свої успіхи у навчанні"
                  },
                  {
                    title: "Досягнення, нагороди та рейтинг",
                    text: "Змагання, унікальні завдання і досягнення"
                  },
                  {
                    title: "Ігри та дозвілля",
                    text: "На платформі доступні ігри, форуми та спілкування на різні теми"
                  }
                ],
                footer: {
                  text: "<span>Пройди безкоштовний ввідний курс</span> з роботи на платформі"
                }
              },
              history: {
                header: "Надихніться <br><span class=\"text-stroke text-stroke__green\">історіями успіху</span> <br> та відгуками про навчання",
                successful_stories: "Історії успіху",
                review: "Відгуки про навчання"
              },
              create: {
                title: "Створюй і <span class=\"opportunities-header__white2 create-header__white\">продавай</span> <span class=\"create-header__stroke text-stroke\">свої <img loading=\"lazy\" src=\"img/create/star.png\" alt=\"\"> курси</span> <br class=\"hidden-desktop\"> у всьому світі",
                list: [
                  {
                    title: "інтерфейс",
                    text: "<span>Зручний інтерфейс.</span> Все зрозуміло <br> навіть без інструкцій"
                  },
                  {
                    title: "функціональність",
                    text: "Інструменти для будь-яких <br> форматів онлайн-навчання</span>"
                  },
                  {
                    title: "адаптивність",
                    text: "Інтерфейс платформи адаптований для всіх гаджетів"
                  },
                  {
                    title: "Магазин курсів",
                    text: "Корисні теми за інтересами"
                  },
                  {
                    title: "Бек-офіс",
                    text: "Статистика та управління всіма процесами з особистого кабінету"
                  },
                  {
                    title: "Можливості",
                    text: "Розвивай і продавай свою експертність у будь-якій сфері діяльності"
                  },
                  {
                    title: "Бонуси",
                    text: "Курси в подарунок за досягнення на платформі"
                  },
                  {
                    title: "Партнерські програми",
                    text: "Автоматичні винагороди за розширення клієнтської мережі"
                  }
                ],
                footer: {
                  title: "<span>Створюй курси, що затягують, та <span class=\"text-stroke text-stroke__green\">заробляй</span> <br> на своїй <img loading=\"lazy\" src=\"img/create/star_green.png\" alt=\"\"> експертності</span>"
                }
              },
              talk: {
                title: "Розповідай про можливості платформи та <span><div class=\"talk-header__circles\"><div class=\"talk-header__circle\"></div><div class=\"talk-header__circle\"></div></div> заробляй </span> <br> у партнерських програмах",
                list_info: [
                  "<div class=\"talk-circle__text\">більше</div><div class=\"talk-circle__title talk-circle__title-small\">300<span>к</span></div><div class=\"talk-circle__text\">партнерів <br> у всьому <br> світі</div>",
                  "<div class=\"talk-circle__text\">більше</div><div class=\"talk-circle__title talk-circle__title-small\">50<span>к <span class=\"talk-circle__text__dollar\">$</span></div><div class=\"talk-circle__text\">виплачено<br> партнерам</div>",
                  "<div class=\"talk-circle__title\">1500<span>+</span></div><div class=\"talk-circle__text\">нових клієнтів<br> кожного<br> місяця</div>",
                  "<div class=\"talk-circle__text\">більше</div><div class=\"talk-circle__title talk-circle__title-small\">2 <span>років</span></div><div class=\"talk-circle__text\">в онлайн-<br> світі</div>"
                ]
              },
              calculator: {
                title: "Кому підійде?",
                list: [
                  "Усім, хто хоче заробляти <br> на продажі освітніх <br> продуктів",
                  "Блогерам, власникам <br> Telegram-каналів і сайтів",
                  "Початківцям і дозвіченим інтернет-<br>підприємцям, <br> експертам мережевої індустрії"
                ],
                footer: {
                  title: "Почніть заробляти <span>просто зараз</span>",
                  text: "Просто порадьте нас своїм знайомим"
                },
                main: {
                  title: "Скільки можна заробити від продажу свого курсу?",
                  text: "Виберіть <span>валюту</span>",
                  sold_courses: "<span>Кількість</span> <br class=\"hidden-mobile\"> проданих курсів <br class=\"hidden-mobile\"> на місяць",
                  average_cost: "<span>Середня <br class=\"hidden-mobile\"> варість <br class=\"hidden-mobile\"></span> курсу",
                  remuneration: "Ваша винагорода: <br class=\"hidden-desktop\"> <span>на місяць <span class=\"calculator-main__total-result\">700</span></span>"
                }
              },
              answer: {
                title: "Кому підійде?",
                list: [
                  {
                    title: "Чи можна користуватися платформою з мобільного пристрою?",
                    text: "Платформа доступна з різних пристроїв, включно з настільним комп'ютером, ноутбуком, планшетом або телефоном."
                  },
                  {
                    title: "Скільки часу потрібно приділяти навчанню? Я ще й працюю!",
                    text: "Ви самі обираєте зручний ритм і графік навчання. Більшість користувачів суміщають нашу Академію та роботу за наймом. Багато з них вже повністю пішли з найму і тепер розвиваються та заробляють тільки в онлайн."
                  },
                  {
                    title: "Як мені підібрати підходящий курс?",
                    text: "Необхідно оформити безкоштовну реєстрацію на платформі, пройти ввідний курс, ознайомитися з коротким описом продуктів в особистому кабінеті та вибрати актуальний для себе курс. <br /> Також можна звернутися до активних користувачів та експертів ношаї платформи, які допоможуть зорієнтуватися й підібрати підходящий курс."
                  },
                  {
                    title: "Чим ви краще інших платформ?",
                    text: "Немає межі досконалості… Говорити, що хтось краще, а хтось гірше, не зовсім коректно і правильно. Наша задача - це позитивний результат кожного учасника. Ми просто робимо свою справу і намагаємося робити це добре. Як це в нас виходить - краще за все спитати у наших користувачів. Подивіться відгуки. Також пропонуємо пройти безкоштовну реєстрацію та ознайомитися з платформою зсередини. Вневнені, що Вам сподобається!"
                  },
                  {
                    title: "Як проходить навчання?",
                    text: "Основою кожного курсу є лекції, які можуть включати відео, слайди, текст, інструкції і додатки для практичних занять. Також на платформі організовані чати, де користувачі спілкуються в процесі навчання та обмінюються досвідом, форуми на актуальні теми, проводяться регулярні онлайн трансляції та вебінари."
                  },
                  {
                    title: "Хочу навчитися заробляти. Ваша платформа допоможе мені в цьому?",
                    text: "Звичайно! На нашій платформі зібрані курси, засновані на особистому досвіді практикуючих інтернет-підприємців і лідерів мережевого бізнесу. Крім того, у нас дуже щедра реферальна бонусно-накопичувальна програма, а,значить, можна заробляти вже у процесі навчання. Також є можливість стати автором курсів на нашій платформі та заробляти на їхньому продажі!"
                  }
                ]
              },
              footer: {
                copyright: "Copyright 2022 <br> Усі права захищені",
                platform_policy: "Політика Платформы (завантажити)",
                privacy_policy: "Політика конфіденційності",
                application: [
                  "Додаток №1",
                  "Додаток №2",
                  "Додаток №3",
                  "Додаток №4",
                  "Додаток №5"
                ],
                paradigma: "Зроблено з любов'ю <br> в paradigma.website"
              },
              popup_login: {
                button: "Вхід",
                forgot_password: "Забули пароль?"
              },
              popup_register: {
                button: "Зареєструватися",
                account_exists: "Вже є аккаунт? <span>Увійдіть</span>",
                register_button: "Зареєструйтеся",
                learn_more: "щоб дізнатися докладніше"
              },
              popup_leave: {
                title: "ВЖЕ ЙДЕТЕ?",
                text: "На знак нашого знайомства завантажте корисний посібник:",
                footer: {
                  title: "Як у будь-якому віці заробляти навчаючись?",
                  agree: "Ви погоджуєтеся з умовами обробки персональних даних"
                }
              }
            }
          },
          az: {
            translation: {
              header: {
                logo: "Mütəxəssisləri tərəfindən hazırlanmış kursların beynəlxalq onlayn platforması",
                navbar: {
                  courses: "Kurslar",
                  authors: "Müəliflər",
                  about_platform: "Platform haqqında",
                  partners_program: "Tərəfdaşlıq proqramı",
                  successful_stories: "Uğur hekayələri",
                  own_course: "Öz kursu",
                  answers: "Suallar və cavablar"
                }
              },
              button: {
                sign_in: "Daxil ol",
                sign_up: "Qeydiyyat",
                register: "Qeydiyyatdan keçin və daha çox məlumat əldə edin",
                start_free: "Pulsuz başlayın",
                find_out_more: "Daha çox məlumat əldə edin",
                download: "Yükləyin"
              },
              main: {
                title: "<span>Məhdudiyyətsiz</span> müasir təhsil",
                description: "gəlir əldə etmək imkanı ilə",
                list_info: {
                  any_age: "İstənilən <br> yaş üçün",
                  unlimited_access: "Məhdudiyyətsiz <br> giriş",
                  areas_of_study: "Təlimin <br> 8 istiqaməti"
                }
              },
              become: {
                title: "Müasir <br> və axtarılan <br><span class=\"text-stroke\">mütəxəssis ol</span>",
                description: "Biz dünyada müxtəlif fəaliyyət sahələrindən <span>öz sahəsində peşəkarlar, yeni mütəxəssislər və sadəcə həvəsli insanlardan ibarət unikal cəmiyyətə dəvət edirik</span><br />",
                main: {
                  intro: "«Lime Academy»-də siz yeni onlayn peşələrə öyrənmək və potensialınızı uğurla reallaşdırmaq üçün <span>müasir bilik və lazımi bacarıqlar əldə edə bilərsiniz</span>",
                  info: "Biz <span>nəzəriyyə və təcrübəni bir sistemdə birləşdirdik</span> və bu sistemin sayəsində platformamızın istifadəçiləri təlim zamanı qazanmağa başlayırlar!",
                  mission: "Bizim missiyamız </strong>dünyanın hər yerindən insanları tərəfdaşlıq cəmiyyətində birləşdirmək, onların yaradıcı potensialının üzə çıxarılması üçün şərait yaratmaq və hər bir insana müasir texnologiyaların köməyi ilə pul qazanmağı öyrətməkdir"
                },
                about: {
                  programs: "<div class=\"become-circle__title\">80<span>+</span></div> <div class=\"become-circle__text\">təlim proqramlar</div>",
                  trainers: "<div class=\"become-circle__title\">50<span>+</span></div> <div class=\"become-circle__text\">mütəxəssis-təlimçilər</div>",
                  members: "<div class=\"become-circle__text\">cəmiyyətimizdə</div> <div class=\"become-circle__title become-circle__title-small\">300<span>к</span></div> <div class=\"become-circle__text\">-dən çox iştirakçı var </div>"
                }
              },
              direction: {
                header: {
                  title: "Öz üçün <span class=\"text-stroke text-stroke__green\">ən yaxşı istiqaməti</span> seç",
                  text: "<p><span>İstənilən səviyyəli bilik və məqsədlər üçün kurslar</span> </p> <p>Ali təhsil və ya hər hansı əvvəlki təlim tələb <span>olunmur</span></p>"
                },
                buttons: [
                  "Fərdi inkişaf",
                  "Marketinq",
                  "Ümumi təhsil",
                  "Xarici dillər",
                  "Maliyyə",
                  "Rəqəmsal savadlılıq",
                  "Xüsusi",
                  "Bütün istiqamətlər"
                ],
                slider: {
                  title: [
                    "Vəsait",
                    "Özünüdərketmə",
                    "Özünü təqdim etmə",
                    "İnternetdə şəxsi brend",
                    "Motivasiya",
                    "Münasibətlər",
                    "Alıcılar üzərindəki təsiri",
                    "Şirkətinizi onlayn necə reklam etmək olar",
                    "İnsanlar, proseslər, texnologiyalar",
                    "Dəyərə əsaslanan satışlar",
                    "Şəxsiyyətin təqdimatı",
                    "Alıcının davranışı",
                    "Şəxsi brendin inkişafı",
                    "Onlayn biznesin inkişafı strategiyasının hazırlanması",
                    "Axtarış şəbəkəsində kampaniyalarınızın effektivliyi necə yüksəltmək olar"
                  ],
                  descriptions: [
                    "Vəziyyətinizin satışa necə təsir etdiyini və sizin və müştərilərinizin hazır vəsaitda olmağınıza nəyin mane olduğunu öyrənəcəksiniz. İnsanların məlumat aldıqları qavrayış kanalları ilə tanış olacaqsınız.",
                    "Müştəri sizin əksinizdir. Ona görə də ilk növbədə müştəriyə necə satacağınızı deyil, özünüzə necə satacağınızı başa düşməlisiniz. Özünüzə daha dərindən baxın və özünüzü necə təqdim etdiyinizi və necə qəbul edildiyinizi təhlil edin.",
                    "Özünü təqdim etmə öz müsbət obrazı yaratmaq, müştərini və ya auditoriyanı maraqlandırmaq üçün bacarığıdır. Özünü təqdim etmə bacarığı şəxsi brendin inkişafının başladığı əsas bacarıqdır.",
                    "Müasir dünyada sosial şəbəkələrsiz şəxsi brendin inkişafı mümkün deyil. Kursda siz sosial şəbəkələrdə öz yerinizi tapmağı, rəqiblər arasında itməməyi və bloqunuzdan pul qazanmağı öyrənəcəksiniz.",
                    "Heç olubmu ki, həqiqətən istədiyiniz bir şey, amma onu gəlməyən \"sonra\" ilə təxirə salınır? Səbəb motivasiya çatışmazlığıdır. Kursda biz təhlil edirik: motivasiya haradan gəlir və öz motivasiyanızı necə artırmaq olar.",
                    "Kasıb\"la \"zəngin\"in təfəkkürü arasında nə fərq var? Nə üçün kimsə həyatdan asanlıqla keçir və hər şeydə uğur qazanır, digərləri isə öz qabiliyyətlərinə və gücünə sonsuz şübhə ilə yanaşır?",
                    "Yaxşı menecerin əsas qaydası müştərinin həmişə birinci yerdə olmasıdır. Ən əsası müştərinin əhvalı və rifahıdır",
                    "Öyrənmə yolunuzu seçin: biznes, şəxsi brend və ya marketinq. Instagram-da daha çox müştəri və izləyici əldə etməyi öyrənin.",
                    "Biz bir məhsul və ya xidməti almırıq, biz bu malların, xidmətlərin və ya onları satan insanların bizə verdiyi əhvalı alırıq. Buna \"Yoluxma Effekti\" deyilir.",
                    "Satışda hansı dəyərlərin olduğunu və onlardan müvəffəqiyyət vasitəsi kimi necə istifadə edəcəyinizi öyrənəcəksiniz. \"Şəxsiyyətin təqdimatı\" anlayışını öyrənin və bu prosesdə səhvlərdən qaçınmağı öyrənin.",
                    "Şəxsi brend sizi rəqiblərinizdən fərqləndirən, məhsulun təqdimatına və ya biznesin aparılmasına fərdi yanaşmanızdır. Onu yaratmaq üçün ilk addımı atın!",
                    "Məhsulun dəyərini ünsiyyətə daxil etməyi öyrənin, məhsulun tanıtımı və bazara çıxarılması üçün strategiya hazırlayın. Məhsul yanaşması ilə marketinq bacarıqlarınızı gücləndirin."
                  ],
                  modules: [
                    "2 modul",
                    "4 modul",
                    "5 modul",
                    "6 modul",
                    "8 modul"
                  ]
                },
                footer: {
                  text: "<span>İndi qoşul </span> və öz istiqamətini seç"
                }
              },
              authors: {
                title: "<span class=\"text-stroke text-stroke__green\">Kursların <br></span>müəlifləri",
                description: "Mütəxəssislərimiz məqsədə doğru aparır və öyrənməyə marağın azalmamasını təmin edirlər",
                list: [
                  {
                    name: "Aynur ZİNNATULİN",
                    description: "Sahibkardır, <br>tele- və radio aparıcısıdır. «Teffi» mükafatının qalibi",
                    more_info: "«Qorxuya qarşı həb», «Mükəmməl müsahibəniz üçün 5 addım», «Yalnız qorxu səni dayandırır», «Tanış olmayan insanları cəlb etmək bacarığı» kitablarının müəllifidir. Natiqlik və ictimai çıxış üzrə təlimçidir. Böyük yumor hissi olan insandır."
                  },
                  {
                    name: "Aliya <br>Hurmatova",
                    description: "Onlayn<br class=\"mobile_break\"> və oflayn satışlar üzrə müvəffəqiyyətli mütəxəssisdir.<br> Bir sıra onlayn kursların yaradıcı<br> və şəxsi məsləhətçidir.",
                    more_info: "Aliyə Hurmatova satışlar, oflayn və onlayn təşviqat üzrə ekspertdir, eləcə də biznes konsaltinq üzrə mütəxəssisdir. 14 ildən artıq təcrübəsi olan peşəkar biznes təlimçidir. 2016-cı ildən iri şəbəkə şirkətləri üçün məsləhətlər verir və korporativ təlimlər keçirir, həmçinin müxtəlif biznes sahələri üzrə menecerlər və top menecerlər üçün təlimlərin müəllifidir. Onun kursu sizə satış sahəsində bacarıq səviyyənizi əhəmiyyətli dərəcədə artırmağa imkan verəcəkdir."
                  },
                  {
                    name: "Yuliya Dolqova",
                    description: "Sahibkardır, psixoloqdur,<br> insanın enerjisinin yüksəltməsi barədə təlimçidir.<br>«Dolqovanın prinsipi» kitabının müəllifidir",
                    more_info: "13 il ərzində Yuliya Dolqova həm yeni başlayanlar, həm də təcrübəli sahibkarlar üçün biznesin qurulması və monetizasiya üzrə təlim proqramlarında ən yaxşı təcrübələri toplayıb. Onun təlimin sistemli yanaşması satışdakı qeyri-sabitliyi aradan qaldırmağa imkan verəcək. O, həmçinin onlayn və oflayn genişmiqyaslı tədbirlərin təşkilatçısı və spikeridir."
                  },
                  {
                    name: "Anna Semyonova",
                    description: "Sahibkardır, biznes təlimçisidir. <br> «Böyük insanlar böyük çeklərdir»<br class=\"mobile_break\"> kursun yaradıcıdır. <br> Güclü motivator və böyük komandanın lideri",
                    more_info: "Anna Semyonovanın geniş praktiki təcrübəsi ona bilikləri «tam dövrəli» təlim sisteminə toplamağa və sistemləşdirməyə imkan verdi. Tematik onlayn marafonların təşkilatçısı və spikeri. Həmişə sadə və əlçatan bir dildə, konkret misallar vasitəsilə o, stress və qorxu olmadan ardıcıl satış etməyi öyrədir."
                  },
                  {
                    name: "MİLA MATVEYEVA",
                    description: "Marketoloqdur, spikerdir və motivatordur",
                    more_info: "Şəbəkə marketinqi sənayesində 20 ildən artıq təcrübədir. Təcrübəsiz bir satıcıdan yüksək səviyyəli liderə keçdi. Fərqli fəaliyyət göstərən şirkətlərdə uğurla inkişaf edir. Təlim kursunda Mila Matveyeva sizə özünüz üçün böyük psixoloq olmağınıza, daxili potensialınızı açmaqda və pul axınınızı açmağa kömək edəcək praktiki üsulları açıqlayacaq."
                  },
                  {
                    name: "Anastasiya Kotova",
                    description: "İctimai çıxış və səhnə nitqi <br> üzrə mütəxəssisdir",
                    more_info: "Yeni istifadəçilər üçün «İlk addımlar» təqdimatın müəllifi və «Satışda 5 addımlar. Dialoq sənəti.» kursun yarıdıcıdır. Anastasiya Kotovanın kursu nitq aparatınızı inkişaf etdirməyə və sıxaclardan qurtulmağa kömək edəcəkdir. Siz söz ehtiyatınızı genişləndirə və dinləyicilərinizin diqqətini necə cəlb etməyi öyrənə biləcəksiniz."
                  },
                  {
                    name: "SVETLANA SKORNYAKOVA",
                    description: "Sahibkardır. «Hədəf auditoriyası» kursunun <br> və sosial şəbəkələrdə təbliğatla bağlı təlimlərin müəllifidir.",
                    more_info: "İnternetdə 4 illik aktiv iş üçün Svetlana Skornyakova biznesinizə daxil olan müştərilərin və tərəfdaşların axınını qəbul etməyə imkan verən effektiv vasitələr seçdi. “Hədəf auditoriyası” kursu sizə hədəf auditoriyanızın qruplarını müəyyən etməyə, qrupların hər biri üçün unikal satış təklifi tərtib etməyə kömək edəcək. Siz iş üsulları və yolları haqqında məlumat əldə edəcək, məzmun planınızı tərtib edəcək, İnternet vasitəsilə biznes tərəfdaşları tapmağı öyrənəcəksiniz."
                  },
                  {
                    name: "YEVQENİY JARKOV VƏ OLQA JARKOVA",
                    description: "Çoxsəviyyəli marketinq sahibkarlardı. <br>«Soyuq» müştərilərin dairəsi ilə işləməyidə mütəxəssislərdi",
                    more_info: "Yevqeniy və Olqa Zharkovların kursunda siz potensial tərəfdaşların telefon nömrələrini haradan əldə edəcəyinizi, işgüzar namizədlərin kontaktları ilə telefon kataloqunuzu necə düzgün saxlamağı öyrənəcəksiniz. Hədəf auditoriyasını necə müəyyənləşdirməyi və telefon zəngləri üçün skriptləri qəbul etməyi, «soyuq zəng» texnikasının bacarıqlarını mənimsəməyi öyrənəcəksiniz. Yevqeniy və Olqa sizə qorxuya qalib gəlməyi və effektiv iş üçün psixoloji üsulları paylaşmağı öyrədərlər."
                  }
                ]
              },
              opportunities: {
                title: "Öyrənmə imkanlarınız <br><span class=\"opportunities-header__white\">məhdudiyyət yoxdur</span>",
                list: [
                  {
                    title: "Hər yerdə",
                    text: "Evdə, yolda, tətildə və ya nahar fasiləsində öyrənin"
                  },
                  {
                    title: "Rahat vaxtda",
                    text: "Heç bir vaxt məhdudiyyəti olmadan öz sürətinizlə öyrənin"
                  },
                  {
                    title: "İstənilən qaydada",
                    text: "Eyni anda və ya ardıcıl olaraq bir neçə kurs keçin"
                  }
                ]
              },
              community: {
                title: "Mütəxəssislərin, ekspertlərin, təcrübəli və yeni istifadəçilərin ən böyük <span class=\"text-stroke text-stroke__green\">cəmiyyətimiz",
                list: [
                  {
                    title: "Məsləkdaşlar",
                    text: "Siz öyrənirsiniz, təlimçi ilə məsələləri müzakirə edirsiniz və yeni istifadəçilərə kömək edirsiniz"
                  },
                  {
                    title: "Ünsiyyət",
                    text: "Kurs müəllifləri və spikerləri ilə, ya da söhbətlər və video konfranslar vasitəsi ilə ünsiyyət"
                  },
                  {
                    title: "Atmosfer şəaraiti",
                    text: "Bizim platformada evdəki kimi isti və rahat atmosferdir"
                  }
                ]
              },
              tools: {
                title: "Biz ən yaxşı <br><span class=\"text-stroke text-stroke__green\">təlim alətlərini yaratmışıq",
                text: "<br><span>Tam funksional</span> öyrənmə platforması",
                list: [
                  {
                    title: "Bilik bazası",
                    text: "Uzun müddətli təlim proqramları, qısa intensivliklər"
                  },
                  {
                    title: "Fərdiləşdirilmiş təlim",
                    text: "Siz özünüz maraqlı kurslar, söhbətlər və vebinarlar seçirsiniz"
                  },
                  {
                    title: "Vebinarlar və onlayn söhbətlər",
                    text: "Təlimçilər və komandalar ilə onlayn söhbətlər, audio və video yayımlar"
                  },
                  {
                    title: "Öz müvəffəqiyyət dərəcəsinə nəzarəti",
                    text: "Şəxsi hesabınızın köməyi ilə siz öyrənmədə irəliləyişinizi izləyə bilərsiniz"
                  },
                  {
                    title: "Nailiyyət, mükafatlar və reytinq",
                    text: "Müsabiqələr, unikal tapşırıqlar və nailiyyətlər"
                  },
                  {
                    title: "Oyunlar və istirahət",
                    text: "Platformada müxtəlif mövzularda oyunlar, forumlar və ünsiyyət mövcuddur"
                  }
                ],
                footer: {
                  text: "Platformada işləməyi haqqında <span>pulsuz tanışlıq kursu keç</span>"
                }
              },
              history: {
                header: "<span class=\"text-stroke text-stroke__green\">Uğur hekayələri</span> <br> və təlim üzrə rəylərindən ilham al",
                successful_stories: "Uğur hekayələri",
                review: "Təlim üzrə rəylər"
              },
              create: {
                title: "<span class=\"create-header__stroke text-stroke\">Öz <img loading=\"lazy\" src=\"img/create/star.png\" alt=\"\"> kursları</span> <br class=\"hidden-desktop\"> dünya üzrə yarat və <span class=\"opportunities-header__white2 create-header__white\">sat</span>",
                list: [
                  {
                    title: "interfeys",
                    text: "<span>Rahat interfeys.</span> Əlavə təlimat olmadan da <br> hər şey aydındır"
                  },
                  {
                    title: "funksionallıq",
                    text: "İstənilən formatda onlayn təlim<br> üçün alətlər</span>"
                  },
                  {
                    title: "uyğunlaşma qabiliyyəti",
                    text: "Platformanın interfeysi bütün qadcetlər üçün uyğunlaşdırılıb"
                  },
                  {
                    title: "Kurslar marketi",
                    text: "Maraqlar üzrə faydalı mövzular"
                  },
                  {
                    title: "Əməliyyatlar üzrə ofis",
                    text: "Şəxsi hesabdan bütün proseslərin statistikası və idarə edilməsi"
                  },
                  {
                    title: "Fürsətlər",
                    text: "İstənilən fəaliyyət sahəsində təcrübənizi inkişaf et və sat"
                  },
                  {
                    title: "Bonuslar",
                    text: "Platformada nailiyyətlərə üçün hədiyyəlik kursları"
                  },
                  {
                    title: "Tərəfdaşlıq proqramları",
                    text: "Müştəri şəbəkənizi genişləndirmək üçün avtomatik mükafatlar"
                  }
                ],
                footer: {
                  title: "<span>Maraqlı kurslar yarat və <span class=\"text-stroke text-stroke__green\"> öz </span> <br>təcrübədən <img loading=\"lazy\" src=\"img/create/star_green.png\" alt=\"\"> qazan</span>"
                }
              },
              talk: {
                title: "Platformanın imkanları haqqında danış və ortaq <span><div class=\"talk-header__circles\"><div class=\"talk-header__circle\"></div><div class=\"talk-header__circle\"></div></div> proqramlarda qazan</span> <br>",
                list_info: [
                  "<div class=\"talk-circle__text\">dünya üzrə</div><div class=\"talk-circle__title talk-circle__title-small\">300<span>к</span></div><div class=\"talk-circle__text\">-dən çox <br> tərəfdaş <br></div>",
                  "<div class=\"talk-circle__text\">tərəfdaşlara</div><div class=\"talk-circle__title talk-circle__title-small\">50<span>к <span class=\"talk-circle__text__dollar\">$</span></div><div class=\"talk-circle__text\">-dan çox ödənilir<br></div>",
                  "<div class=\"talk-circle__title\">hər ay</div><div class=\"talk-circle__text\">1500<span>+</span><br>yeni<br> müştəri</div>",
                  "<div class=\"talk-circle__text\">onlayn təhsildə</div><div class=\"talk-circle__title talk-circle__title-small\">2 <span>ildən</span></div><div class=\"talk-circle__text\">çox<br></div>"
                ]
              },
              calculator: {
                title: "Kim üçün yaradılıb?",
                list: [
                  "Təhsil məhsulları sataraq <br> pul qazanmaq istəyən <br> hər kəs üçün",
                  "Bloggerlər, Telegram kanallarının və saytlarının <br> sahiblər üçün",
                  "Yeni başlayanlar və təcrübəli İnternet<br> sahibkarları, marketoloqlar, <br> şəbəkə sənayesi ekspertlər üçün"
                ],
                footer: {
                  title: "<span>İndidən </span>qazanmağa başlayın",
                  text: "Sadəcə bizi dostlarınıza tövsiyə edin"
                },
                main: {
                  title: "Kursunuzu satmaqla nə qədər qazana bilərsiniz?",
                  text: "<span>Valyuta</span> seçin",
                  sold_courses: "Ayda <br class=\"hidden-mobile\">satılan kursların<br class=\"hidden-mobile\"> <span>sayı</span>",
                  average_cost: "Kursun <span>orta <br class=\"hidden-mobile\"> qiyməti<br class=\"hidden-mobile\"></span>",
                  remuneration: "Mükafatınız: <br class=\"hidden-desktop\"> <span>ayda <span class=\"calculator-main__total-result\">700</span></span>"
                }
              },
              answer: {
                title: "Kim üçün yaradılıb?",
                list: [
                  {
                    title: "Mən platformanı mobil cihazdan istifadə edə bilərəm?",
                    text: "Platformaya masa üstü, noutbuk, planşet və ya telefon daxil olmaqla müxtəlif cihazlardan daxil olmaq mümkündür."
                  },
                  {
                    title: "Təlimə nə qədər vaxt ayrılmalıyam? Mən hələ də işləyirəm!",
                    text: "Rahat bir ritm və təlim cədvəlini özünüz seçirsiniz. Əksər istifadəçilər Akademiyamızdaki təlimi və öz məşğulluğu uyğunlaşdırır. Onların bir çoxu artıq öz iş yerindən tamamilə ayrılıb və indi yalnız internet vasitəsilə inkişaf edir və qazanır."
                  },
                  {
                    title: "Mənə lazım olan kursu necə tapa bilərəm?",
                    text: "Siz platformada pulsuz qeydiyyatdan sonra tanışlıq kursu keçib, şəxsi hesabınızda məhsulların qısa təsvirini oxumalı və sizə uyğun kursu seçməlisiniz. <br /> Siz həmçinin platformada istiqamətlənməyə və sizə uyğun kursu seçməyə kömək üçün platformamızın aktiv istifadəçiləri və ekspertləri ilə əlaqə saxlaya bilərsiniz."
                  },
                  {
                    title: "Niyə digər platformalardan sizi seçməliyəm?",
                    text: "Mükəmməlliyin həddi yoxdur... Kiminsə daha yaxşı, kiminsə pis olduğunu demək tam düzgün deyil. Bizim məqsədimiz hər bir iştirakçının müsbət nəticəsidir. Biz sadəcə öz işimizi görürük və onu yüksək səviyyədə görməyə çalışırıq. Bunun haqqında siz ən yaxşısı rəylərə baxanda və istifadəçilərimizdən soruşa bilərisiniz. Biz həmçinin pulsuz qeydiyyat və daxil olduqdan sonra platforma ilə tanış olmaq təklif edirik. Əminik ki, bəyənəcəksiniz!"
                  },
                  {
                    title: "Təlim necə keçir?",
                    text: "Hər bir kurs videolar, slaydlar, mətn, təlimatlar və təcrübə proqramlarından ibarət mühazirələrə əsaslanır. İstifadəçilərin təlim prosesində ünsiyyət qurduğu və təcrübə mübadiləsi apardığı platformada söhbətlər də təşkil edilir, aktual mövzular üzrə forumlar, müntəzəm onlayn yayımlar və vebinarlar keçirilir."
                  },
                  {
                    title: "Mən pul qazanmağı öyrənmək istəyirəm. Platformanız bu işdə mənə kömək edəcəkmi?",
                    text: "Əlbəttə! Platformamız internet sahibkarlarının və şəbəkə biznesi liderlərinin şəxsi təcrübəsinə əsaslanan kursları ehtiva edir. Bundan əlavə, bizdə çox səxavətli referal bonuslar toplama proqramı var, yəni siz artıq öyrənmə prosesində pul qazana bilərsiniz. Platformamızda kursların müəllifi olmaq və onları sataraq pul qazanmaq imkanı da var!"
                  }
                ]
              },
              footer: {
                copyright: "Copyright 2022 <br> Bütün hüquqlar qorunur",
                platform_policy: "Platforma siyasəti (yüklə)",
                privacy_policy: "Gizlilik siyasəti",
                application: [
                  "Qoşma №1",
                  "Qoşma №2",
                  "Qoşma №3",
                  "Qoşma №4",
                  "Qoşma №5"
                ],
                paradigma: "<br>paradigma.website tərəfindən sevgi ilə hazırlanmışdır"
              },
              popup_login: {
                button: "Giriş",
                forgot_password: "Şifrəni unutmusunuz?"
              },
              popup_register: {
                button: "Qeydiyyatdan keçin",
                account_exists: "Hesabınız var? <span>Daxil olun</span>",
                register_button: "Qeydiyyatdan keçin",
                learn_more: "daha çox məlumat almaq üçün"
              },
              popup_leave: {
                title: "ARTIQ GEDİRSİNİZ?",
                text: "Tanışlığımızın əlaməti olaraq, faydalı təlimatı yükləyin:",
                footer: {
                  title: "İstənilən yaşda təlimi keçərək necə pul qazanmaq olar?",
                  agree: "Siz şəxsi məlumatların emalı şərtləri ilə razılaşırsınız"
                }
              }
            }
          },
        }
      },
      (err, t) => {
        if (err) return console.error(err);
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });
        $('body').localize();
      }
    )
  ;
});

