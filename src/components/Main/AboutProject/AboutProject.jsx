import React from 'react';
import { MainPageConfig } from '../../../config.style';

function AboutProject() {
  const aboutProjectData = MainPageConfig.aboutProject.itemList;
  const { tableData } = MainPageConfig.aboutProject;
  return (
    <section className="about-project">
      <div className="about-project__title-container">
        <h2 className="about-project__title">{MainPageConfig.aboutProject.titleText}</h2>
        <div className="about-project__separating-line" />
      </div>
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
