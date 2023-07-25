import React from 'react';
import { MainPageConfig } from '../../../config.style';
import SectionHeader from '../SectionHeader/SectionHeader';

function AboutProject() {
  const aboutProjectData = MainPageConfig.aboutProject.itemList;
  const { tableData } = MainPageConfig.aboutProject;
  return (
    <section className="about-project">
      <SectionHeader title={MainPageConfig.aboutProject.titleText} />
      <ul className="about-project__list">
        { aboutProjectData.map((item) => (
          <li key={Math.floor(Math.random() * 1000 + 1)} className="about-project__list-item">
            <h3 className="about-project__item-title">{item.title}</h3>
            <p className="about-project__item-info">{item.info}</p>
          </li>
        ))}
      </ul>
      <table className="about-project__table">
        <tbody className="about-project__table-body">
          {
            tableData.map((row) => (
              <tr key={Math.floor(Math.random() * 100 + 1)} className="about-project__table-row">
                {
                  row.map((cell) => (
                    <td key={Math.floor(Math.random() * 100 + 1)} className="about-project__table-cell">{cell}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  );
}

export default AboutProject;
