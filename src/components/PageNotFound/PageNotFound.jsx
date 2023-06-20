import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundPageConfig } from '../../config.style';

function PageNotFound() {
  const navigate = useNavigate();

  const onBackHandler = () => navigate(-1);

  return (
    <div className="not-found">
      <h1 className="not-found__header">{NotFoundPageConfig.headerText}</h1>
      <p className="not-found__sub-header">{NotFoundPageConfig.subheaderText}</p>
      <button className="not-found__back-button" type="button" onClick={onBackHandler}>{NotFoundPageConfig.backButtonText}</button>
    </div>
  );
}

export default PageNotFound;
