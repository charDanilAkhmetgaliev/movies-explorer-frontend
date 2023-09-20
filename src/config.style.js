const NotFoundPageConfig = {
  headerText: 404,
  subheaderText: 'Страница не найдена',
  backButtonText: 'Назад',
};

const HeaderConfig = {
  introColor: 'rgb(243, 193, 248)',
  loginText: 'Войти',
  registerText: 'Регистрация',
};

const FooterConfig = {
  integration: 'Учебный проект Яндекс.Практикум х BeatFilm.',
  service: 'Яндекс.Практикум',
  github: {
    name: 'Github',
    link: 'https://github.com/charDanilAkhmetgaliev',
  },
  year: '2023',
};

const MainPageConfig = {
  promo: {
    title: 'Учебный проект студента факультета Веб-разработки.',
  },
  aboutProject: {
    header: 'О проекте',
    listData: [
      {
        title: 'Дипломный проект включал 5 этапов',
        info: 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
      },
      {
        title: 'На выполнение диплома ушло 5 недель',
        info: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
      },
    ],
    tableData: [
      ['1 неделя', '4 недели'],
      ['Back-end', 'Front-end'],
    ],
  },
  techs: {
    header: 'Технологии',
    title: '7 технологий',
    info: 'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.',
    listData: [
      'HTML',
      'CSS',
      'JS',
      'React',
      'Git',
      'Express.js',
      'mongoDB',
    ],
  },
  aboutMe: {
    header: 'Студент',
    photoDescription: 'Junior веб-разработчик, 25 лет',
    data: {
      name: 'Даниль',
      status: 'Фронтенд-разработчик, 30 лет',
      description: 'Я родился и живу в Казани, закончил бакалавриат(4 года) и магистратуру(2 года) по направлениям "Информатика и вычислительная техника" и "Бизнес-информатика" соответсвенно. Люблю играть в настольные игры и занимаюсь фитнесом. Обучаюсь веб-разработке 1.5 года, есть четыре завершенных проекта. В данный момент работаю над новым проектом, параллельно изучаю TS и Redux.',
    },
    github: {
      name: 'Github',
      link: 'https://github.com/charDanilAkhmetgaliev',
    },
    portfolio: {
      header: 'Портфолио',
      list: [
        {
          name: 'Статичный сайт',
          link: 'https://chardanilakhmetgaliev.github.io/how-to-learn/',
        },
        {
          name: 'Адаптивный сайт',
          link: 'https://chardanilakhmetgaliev.github.io/russian-travel/',
        },
        {
          name: 'Одностраничное приложение',
          link: '',
        },
      ],
    },
  },
};

export {
  NotFoundPageConfig,
  HeaderConfig,
  FooterConfig,
  MainPageConfig,
};
