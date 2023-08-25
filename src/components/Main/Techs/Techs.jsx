import React from 'react';
import { MainPageConfig } from '../../../config.style';
import SectionWrapper from '../SectionWrapper/SectionWrapper';

function Techs() {
  const {
    header, title, info, listData,
  } = MainPageConfig.techs;

  return (
    <SectionWrapper headerTitle={header}>
      <div className="techs">
        <h1 className="techs__title">{title}</h1>
        <p className="techs__info">{info}</p>
        <ul className="techs__list">
          {
              listData.map((tech) => (
                <li key={Math.floor(Math.random() * 1000 + 1)} className="techs__tech">{tech}</li>
              ))
          }
        </ul>
      </div>
    </SectionWrapper>
  );
}

export default Techs;
