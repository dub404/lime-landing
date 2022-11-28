import { getCookie } from './cookie.js';

const language = getCookie('language');

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
                title: "Стань современным <br> и востребованным <br> <span class=\"text-stroke\">специалистом</span>",
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
                header: "Вдохновись <br> <span class=\"text-stroke text-stroke__green\">историями успеха</span> <br> и отзывами об обучении",
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
                title: "Become a modern <br> and in-demand <br> <span class=\"text-stroke\">professional</span>",
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
                  header: "Get inspired <br/><span class=\"text-stroke text-stroke__green\">with stories of success</span> <br> and training feedback",
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
          }
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

