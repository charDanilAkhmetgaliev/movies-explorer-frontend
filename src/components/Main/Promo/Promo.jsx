import React from 'react';
import { MainPageConfig } from '../../../config.style';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">{MainPageConfig.promo.title}</h1>
      <div className="promo__logo" />
    </section>
  );
}

export default Promo;
