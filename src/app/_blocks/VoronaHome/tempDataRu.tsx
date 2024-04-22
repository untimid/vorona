import {
  BanknotesIcon,
  ClockIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

import type { BenefitsBlockProps } from './BenefitsBlock'
import { ContactFormBlockProps } from './ContactFormBlock'
import { ContactsBlockProps } from './ContactsBlock'
import type { HeroBlockProps } from './HeroBlock'
import { PricingBlockProps } from './PricingBlock'
import { PrinciplesBlockProps } from './PrinciplesBlock'
import type { ServicesBlockProps } from './ServicesBlock'
import { TeamBlockProps } from './TeamBlock'
import type { WhoBlockProps } from './WhoBlock'

export const PROMO_SLIDE = {
  title: "Загляните к нам на youtube канал СТАРТАПЕР'S!",
  description:
    'Отройте мир современного IT: разработка, менеджмент, автоматизация и просто бизнесовые заметки. Море пользы, знаний и развлечения!',
  ctaLink: '#',
  ctaText: 'Поехали!',
  image: '/idea 2.png',
  imageAlt: "Youtube канал Артем Галухин: СТАРТАПЕР'S",
}

export const HERO_BLOCK: HeroBlockProps = {
  header: {
    firstPart: 'Мы создаем высокоэффективные',
    secondPart: 'IT и маркетинговые решения',
    thirdPart: 'для',
    fourthPart: 'стартапов, малого и среднего бизнеса',
  },
  description:
    'VORONA, камерная и эффективная команда, мы работаем напрямую с собственниками бизнеса и выстраиваем самую прямую коммуникацию со специалистами, обеспечивая высокие скорость и качество работы. Мы всегда не гребне технологий чтобы ваш бизнес был конкурентоспособен и шагал в ногу со временем!',
  ctaMain: null,
  ctaAdditional: {
    href: '#',
    text: 'Записаться на консультацию',
  },
}

const WHO_BENEFITS = [
  {
    title: 'Стартап / MVP',
    description:
      'Если у вас есть идея для стартапа и нужна разработка прототипной версии продукта (MVP)',
    helpItems: [
      {
        title: 'Превратим',
        description: 'идею и концепцию в техническое задание',
      },
      {
        title: 'Разработаем',
        description: 'MVP или прототипную версию продукта - от дизайна до запуска и аналитики',
      },
      {
        title: 'А главное',
        description:
          'дадим исчерпывающую документацию и научим как работать с продуктом и что делать дальше',
      },
    ],
  },
  {
    title: 'Онлайн бизнес',
    description: 'Вы хотите повысить эффективность или автоматизировать свой онлайн бизнес.',
    helpItems: [
      {
        title: 'Анализ',
        description: 'бизнес процессов, поиск бутылочных горлышек и инструментов для их устранения',
      },
      {
        title: 'Разработка',
        description: 'и доработка ваших платформ, сайта, веб-сервисов',
      },
      {
        title: 'Маркетинг',
        description:
          'брендинг, реклама, контент менеджмент и продакшн + аналитика и автоматизация всего этого',
      },
    ],
  },
  {
    title: 'Оффлайн бизнес',
    description:
      'Вы еще не продаете в интернете или хотите усилить свое присутствие там и конкурентоспособоность.',
    helpItems: [
      {
        title: 'Разработка',
        description:
          'современного, безопасного, профессионально спроектированного веб-сайта который превосходит конкурентов на WordPress во всем.',
      },
      {
        title: 'Настройка',
        description:
          'рекламной кампании, подбор инструментов, подключение платежных сервисов, сквозная аналитика.',
      },
      {
        title: 'Обучение',
        description:
          'тому как всем этим пользоваться. Мы возможно единственные предоставляем на выходе инструкцию которая поможет вам рулить полученной инфраструктурой.',
      },
    ],
  },
  {
    title: 'Растущий IT продукт',
    description: 'У вас уже есть обкатанный продукт и вы готовы к продвижению и рекламе.',
    helpItems: [
      {
        title: 'Брендинг',
        description: 'разработка брендинга - от фирменного стиля и визиток до дизайн системы!',
      },
      {
        title: 'Разработка',
        description: 'новых фич и исправление багов. Если мы работаем с вашим стеком технологий.',
      },
      {
        title: 'Контент',
        description:
          'менеджмент и продакшн. Youtube, FB, Inst и тп - это уже не вопрос выбора а необходимость.',
      },
    ],
  },
  {
    title: 'Средний бизнес',
    description: 'У вас налажены бизнес процессы, есть кэшфлоу и вы готовы рвать рынок.',
    helpItems: [
      {
        title: 'Анализ',
        description: 'от бизнес процессов до рекламных инструментов - что можно автоматизировать.',
      },
      {
        title: 'Маркетинг',
        description:
          'если вы еще не используете какие-то инструменты, попробуем. А еще будем пилить вам контент.',
      },
      {
        title: 'Автоматизация',
        description:
          'а вы хотите видеть весь свой бизнес в виде ключевых метрик на одном экране телефона? Технологии сейчас это позволяют!',
      },
    ],
  },
]

export const WHO_BLOCK: WhoBlockProps = {
  header: {
    firstPart: 'Вы',
    secondPart: 'максимально выиграете',
    thirdPart: 'от работы с нами',
  },
  description:
    'Мы опытны в онлайн бизнесе, разработке, маркетинге и стартап-движухе! И с радостью поможем вам решить любые задачи и поделимся всем что знаем сами.',
  whoBenefitsItems: WHO_BENEFITS,
}

export const SERVICES = [
  {
    title: 'готовые продукты',
    services: ['mvp', 'стартап', 'веб-сервис', 'корпоративный сайт', 'рекламный лендинг'],
    color: 'bg-indigo-300',
  },
  {
    title: 'дизайн',
    services: ['ui/ux', 'брендинг', 'иллюстрация', 'реклама', 'инфографика', 'печатка и каталоги'],
    color: 'bg-amber-300',
  },
  {
    title: 'разработка',
    services: [
      'доработка продукта',
      'ускорение работы сайта',
      'честная СЕО оптимизация',
      'чатботы',
      'автоматизация',
    ],
    color: 'bg-pink-300',
  },
  {
    title: 'консалтинг',
    services: [
      'команда и процессы',
      'оценка качества разработки',
      'инфраструктура',
      'локализация',
      'инструменты',
    ],
    color: 'bg-yellow-300',
  },
  {
    title: 'маркетинг',
    services: ['перформанс', 'аналитика', 'PR', 'контент', 'инфлюенс'],
    color: 'bg-blue-300',
  },
  {
    title: 'контент-менеджмент',
    services: ['стратегия и площадки', 'контент-план', 'фото и графика', 'youtube под ключ'],
    color: 'bg-cyan-300',
  },
]

export const SERVICES_BLOCK: ServicesBlockProps = {
  header: 'Услуги',
  description:
    'Мы знаем чего вы хотите! Расти и зарабатывать как можно больше. Мы заряжаем бизнесы технологиями, повышаем эффективность и снижаем риски человеческого фактора. А еще прокачиваем маркетинг аутентично, креативно и индивидуально для вас. С нами у вас все козыри для игры в цифровом мире!',
  services: SERVICES,
}

const BENEFITS = [
  {
    title: 'В одном контексте',
    description:
      'Мы пришли в разработку и маркетинг из бизнеса, а не наоборот. Решаем задачи бизнеса а не капризы разработчиков.',
  },
  {
    title: 'Камерная команда',
    description:
      'Быстрая коммуникация, все кто участвуют в проекте на связи в группе в мессенджере.',
  },
  {
    title: 'Полная прозрачность',
    description:
      'Сроки, цены, процессы. А когда вы вообще видели чтобы студии указывали цены на сайте? А еще и не только за час работы!',
  },
  {
    title: 'Эффективность',
    description:
      'У нас нет менеджмента ради бюрократии. Мы не вынуждены кроить бюджеты а значит платим лучшим достойно за топ качество.',
  },
  {
    title: 'Безопасность',
    description:
      'Мы используем самые популярные решения на рынке чтобы вы получили лучшее и были защищены от тирании вендоров.',
  },
  {
    title: 'Система одного окна',
    description: 'У вас в мобильнике на кончике пальцев целая команда разработки и маркетинга!',
  },
  {
    title: 'А в чем подвох?',
    description:
      'Очевидно, в нашем ограниченом времени. Мы идейно сохраняем камерный формат студии, а значит кто успел тот и застолбил :)',
  },
]

export const BENEFITS_BLOCK: BenefitsBlockProps = {
  header: 'Преимущества работы с нами',
  description:
    'Наш любимый принцип - "подобное к подобному". Мы - бутиковая аутентичная эффективная студия, состоящая исключительно из фанатиков своего дела. Если вы такие же, мы нашли друг друга!',
  benefits: BENEFITS,
}

const PRICING_PRINCIPLES = [
  {
    icon: ClockIcon,
    title: 'Расчеты стоимости работ базируются на оценке трудозатрат',
    description:
      'Исходя из ваших потребностей мы резервируем нужное количество часов специалистов и если работы не связаны с высокими рисками то даем смету "фикс-прайс"',
  },
  {
    icon: BanknotesIcon,
    title: 'Стоимость часа зависит от специализации и объема работ',
    description:
      'Чем больше объем работ тем дешевле час и наоборот. Также некоторые специалисты будут стоить дороже в зависимости от специализации.',
  },
]

const PROCESS_STEPS = [
  {
    percentage: '10',
    title: 'Обсуждаем',
    description: 'собираем техзадание и договариваемся',
  },
  {
    percentage: '20',
    title: 'Выбираем',
    description: 'стек технологий, инструменты и оцениваем ресурсоемкость',
  },
  {
    percentage: '30',
    title: 'Планируем',
    description: 'проект, нарезаем на задачи, корректируем оценку по необходимости',
  },
  {
    percentage: '60',
    title: 'Передаем',
    description: 'результат работ и делаем оговоренное кол-во итераций правок',
  },
  {
    percentage: '80',
    title: 'Сдаем результат',
    description:
      'работы, подписываем акты, передаем документацию и проводим обучение вашей команды',
  },
  {
    percentage: '100',
    title: 'Поддержка и доработка',
    description: 'мы всегда на расстоянии сообщения в телеге от вас, решим любой головняк и задачу',
  },
]

const COLLABORATION_PRINCIPLES = [
  {
    icon: RocketLaunchIcon,
    title: 'Длинные проекты',
    description:
      'Мы работаем в соответствии с гибкой методологией SCRUM: набираем фронт работ на месяц, который делится на 2 спринта по 2 недели. Вместе планируем работы так чтобы они вписывались в ваши сроки и финансирование.',
    services: [
      'mvp',
      'стартап',
      'продукт',
      'контент-менеджмент и продакшн',
      'сопровождение рекламы',
      'веб-сервисы',
      'автоматизация',
      'поддержка и доработка',
    ],
    color: 'bg-cyan-300',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Коротнкие проекты',
    description:
      'В этих проектах риски минимальны и мы даем вам фикс-прайс цену и условия на которых уже десятки раз работали сами. Если вам удобнее SCRUM и гибкая разработка, такая опция обсуждаема.',
    services: ['корпоративный вебсайт', 'брендинг', 'чатбот', 'лэндинг', 'настройка рекламы'],
    color: 'bg-amber-300',
  },
]

export const PRINCIPLES_BLOCK: PrinciplesBlockProps = {
  header: {
    firstPart: 'Рабочие',
    secondPart: 'принципы',
  },
  description:
    'Мы абсолютно прозрачны и предлагаем познакомиться с принципами по которым работаем!',
  collaboration: {
    title: 'Сотрудничество',
    description:
      'Мы предлагаем два варианта сотрудничества в зависимости от объема работ/размера продукта и уровня рисков/гибкости в процессе.',
    principles: COLLABORATION_PRINCIPLES,
    videoSrc: 'https://www.youtube.com/embed/-3PUQZqnuuE?si=jgk8_FWdF78_aEaB',
  },
  pricing: {
    title: 'Стоимость и оценка',
    principles: PRICING_PRINCIPLES,
    videoSrc: 'https://www.youtube.com/embed/-3PUQZqnuuE?si=jgk8_FWdF78_aEaB',
  },
  process: {
    title: 'Процесс',
    videoSrc: 'https://www.youtube.com/embed/-3PUQZqnuuE?si=jgk8_FWdF78_aEaB',
    description:
      'Мы работаем по-разному, для больших проектов используем гибкую методологию разрботки Agile, с небольшими проектами все проще.',
    steps: PROCESS_STEPS,
  },
}

const PERSONS = [
  {
    name: 'Артем Галухин',
    role: 'Гендир, глава разработки',
    description:
      'Я тот человек на стыке бизнеса и технологий который говорит с вами на одном языке!',
    highlightDescription: 'Серийный предприниматель, разработчик',
    highlightHeader: '10+ лет опыта',
    competences: ['стратегия', 'разработка', 'маркетинг', 'контент-продакшн', 'реклама'],
    photo: '/artem 1.png',
  },
  {
    name: 'Елена Галухина',
    role: 'Артдир, глава дизайна и контента',
    description: 'I am the man between business and technologies',
    highlightDescription: 'Entrepreneur, web developer',
    highlightHeader: '10+ years',
    competences: ['strategy', 'marketing', 'development', 'content production', 'advert'],
    photo: '/elena 1.png',
  },
]

export const TEAM_BLOCK: TeamBlockProps = {
  header: 'Наша команда',
  description:
    'Давайте познакомимся: наша камерная, высокопродуктивная команда на стыке маркетинга, дизайна, технологий и разработки.',
  persons: PERSONS,
}

export const PRICING_BLOCK: PricingBlockProps = {
  header: 'Ценообразование',
  description:
    'Наша рабочая модель основана на стоимости часа. Мы работаем по предоплате с корректировкой и отчетностью в конце месяца. Второй вариант - поэтапная оплата если оценка стоимости может быть просчитана сразу в формате "фикс прайс"',
  hourlyRate: {
    rate: '$30-$40',
    description: 'Нижняя планка - объем от 20 часов',
  },
  consultRate: {
    rate: '04/2024',
    description: 'Ближайщие свободные слоты для работ',
  },
  urgentProject: {
    title: 'У вас срочный проект и некогда медлить?',
    description: 'Свяжитесь с нами, возможно мы найдем время чтобы быстро закрыть запрос.',
  },
  pricingPolicy: {
    title: 'Наши цены растут в зависимости от загруженности',
    description:
      'Кто успел тот застолбил:) Нас мало и чем больше спрос, тем дороже стоимость часа!',
  },
}

export const CONTACTS_BLOCK: ContactsBlockProps = {
  header: 'Контакты',
  phone: 'https://t.me/untimid',
  email: 'qbeskp@gmail.com',
  address1: 'Работаем со всем миром, на русском и английском языках',
  address2: 'Сейчас личная встреча возможна в: Буэнос Айрес, Аргентина',
  callToAction: 'Пишите прямо сейчас и запланируем созвон-знакомство чтобы обсудить ваши задачи!',
  disclamer:
    'Наша команда распределена по всему миру, мы работаем полностью в удаленном формате, живем как цифровые кочевники. Поэтому у нас нет физического офиса в одном месте. Зато мы можем помочь вам выстроить полностью удаленную работу в команде основываясь на нашем опыте!',
}

export const CONTACT_FORM_BLOCK: ContactFormBlockProps = {
  header: 'Готовы обсудить сотрудничество?',
  nameInput: {
    label: 'Имя',
    placeholder: 'Василий Петров',
  },
  emailInput: {
    label: 'Email',
    placeholder: 'you@example.com',
  },
  descriptionInput: {
    label: 'Описание задачи',
    placeholder: 'Пожалуйста, расскажите кратко о вашей задаче',
  },
  agreementCheckboxText: 'Согласен с обработкой персональных данных',
  submitButtonText: 'Заказать бесплатную консультацию',
}