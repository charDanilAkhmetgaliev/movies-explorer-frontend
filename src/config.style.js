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
    titleText: 'О проекте',
    itemList: {
      firstItem: {
        headerText: 'Дипломный проект включал 5 этапов',
        infoText: 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
      },
      secondItem: {
        headerText: 'На выполнение диплома ушло 5 недель',
        infoText: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
      },
    },
  },
};

export {
  NotFoundPageConfig,
  HeaderConfig,
  MainPageConfig,
};
