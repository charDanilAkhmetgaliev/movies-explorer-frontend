import React from 'react';
import { NotFoundPageConfig } from '../../config.style';
import './PageNotFound.scss';

function PageNotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__header">{NotFoundPageConfig.headerContent}</h1>
      <p className="not-found__sub-header">{NotFoundPageConfig.subheaderContent}</p>
    </div>
  );
}

export default PageNotFound;
