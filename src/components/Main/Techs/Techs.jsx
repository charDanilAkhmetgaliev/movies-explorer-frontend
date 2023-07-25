import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { MainPageConfig } from '../../../config.style';

function Techs() {
  const techsData = MainPageConfig.techs;

  return (
    <section className="techs">
      <SectionHeader header={techsData.header} />
      <div className="techs__container">
        <h1 className="techs__title">{techsData.title}</h1>
        <p className="techs__info">{techsData.info}</p>
        <ul className="techs__list">
          {
            techsData.techsList.map((tech) => (
              <li className="techs__tech">{tech}</li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}

export default Techs;
