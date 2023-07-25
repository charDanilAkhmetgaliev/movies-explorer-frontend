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

const MainPageConfig = {
  promo: {
    titleText: 'Учебный проект студента факультета Веб-разработки.',
  },
  aboutProject: {
    header: 'О проекте',
    itemList: [
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
    techsList: [
      'HTML',
      'CSS',
      'JS',
      'React',
      'Git',
      'Express.js',
      'mongoDB',
    ],
  },
};

export {
  NotFoundPageConfig,
  HeaderConfig,
  MainPageConfig,
};
