import React from 'react';
import { MainPageConfig } from '../../../config.style';

function AboutProject() {
  const aboutProjectData = MainPageConfig.aboutProject.itemList;
  const { tableData } = MainPageConfig.aboutProject;

  return (
    <section className="about-project">
      <div className="about-project__title-container">
        <h2 className="about-project__title">{MainPageConfig.aboutProject.titleText}</h2>
        <hr className="about-project__separating-line" />
      </div>
      <ul className="about-project__list">
        { aboutProjectData.map((item) => (
          <li className="about-project__list-item">
            <h3 className="about-project__item-title">{item.title}</h3>
            <p className="about-project__item-info">{item.info}</p>
          </li>
        ))}
      </ul>
      <table className="about-project__table">
        {
          tableData.map((row) => (
            <tr className="about-project__table-row">
              {
                row.map((cell) => (
                  <td className="about-project__table-cell">{cell}</td>
                ))
              }
            </tr>
          ))
        }
      </table>
    </section>
  );
}

export default AboutProject;
