import React from 'react';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import { MainPageConfig } from '../../../config.style';
import studentPhoto from '../../../images/student-photo.jpg';
import SectionHeader from '../SectionHeader/SectionHeader';

function AboutMe() {
  const {
    header,
    data,
    github,
    photoDescription,
    portfolio,
  } = MainPageConfig.aboutMe;

  return (
    <SectionWrapper>
      <SectionHeader headerTitle={header} />
      <div className="about-me">
        <div className="about-me__container">
          <img className="about-me__photo" src={studentPhoto} alt={photoDescription} />
          <div className="about-me__data">
            <h2 className="about-me__name">{data.name}</h2>
            <p className="about-me__status">{data.status}</p>
            <p className="about-me__description">{data.description}</p>
            <a className="about-me__github-link" href={github.link} target="_blank" rel="noreferrer">{github.name}</a>
          </div>
        </div>
        <div className="about-me__portfolio">
          <h3 className="about-me__portfolio-title">{portfolio.header}</h3>
          <ul className="about-me__portfolio-list">
            {
              portfolio.list.map((item) => (
                <li key={Math.floor(Math.random() * 1000 + 1)} className="about-me__portfolio-item">
                  <a href={item.link} className="about-me__portfolio-link" target="_blank" rel="noreferrer">
                    {item.name}
                    <div className="about-me__portfolio-link-arrow" />
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default AboutMe;
