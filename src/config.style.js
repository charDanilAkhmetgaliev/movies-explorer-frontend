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
    photoDescription: 'Фотография студента',
    data: {
      name: 'Виталий',
      status: 'Фронтенд-разработчик, 30 лет',
      description: 'Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.',
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
