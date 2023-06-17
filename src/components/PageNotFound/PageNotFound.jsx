import React from 'react';
import { NotFoundPageConfig } from '../../config.style';

function PageNotFound() {
  return (
    <div className="not-found">
      <div className="not-found__info">
        <h1 className="not-found__header">{NotFoundPageConfig.headerText}</h1>
        <p className="not-found__sub-header">{NotFoundPageConfig.subheaderText}</p>
      </div>
      <button className="not-found__back-button" type="button">{NotFoundPageConfig.backButtonText}</button>
    </div>
  );
}

export default PageNotFound;
