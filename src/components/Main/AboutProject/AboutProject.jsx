import React from 'react';
import { MainPageConfig } from '../../../config.style';
import SectionWrapper from '../SectionWrapper/SectionWrapper';

function AboutProject() {
  const { header, listData, tableData } = MainPageConfig.aboutProject;

  return (
    <SectionWrapper headerTitle={header}>
      <div className="about-project">
        <ul className="about-project__list">
          { listData.map((item) => (
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
      </div>
    </SectionWrapper>
  );
}
export default AboutProject;
