import React from 'react';
import { MainPageConfig } from '../../../config.style';

function AboutProject() {
  return (
    <div className="about-project">
      <h2 className="about-project__title">{MainPageConfig.aboutProject.titleText}</h2>
      <div className="about-project__separating-line" />
      <ul className="about-project__list">
        <li className="about-project__list-item">
          <h3 className="about-project__item-header">{MainPageConfig.aboutProject.itemList.firstItem.headerText}</h3>
          <p className="about-project__item-info">{MainPageConfig.aboutProject.itemList.firstItem.infoText}</p>
        </li>
        <li className="about-project__list-item">
          <h3 className="about-project__item-header">{MainPageConfig.aboutProject.itemList.secondItem.headerText}</h3>
          <p className="about-project__item-info">{MainPageConfig.aboutProject.itemList.secondItem.infoText}</p>
        </li>
      </ul>
    </div>
  );
}

export default AboutProject;
