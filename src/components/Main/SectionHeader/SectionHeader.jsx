import React from 'react';

function SectionHeader({ header }) {
  return (
    <div className="section-header">
      <h1 className="section-header__title">{header}</h1>
      <div className="section-header__separating-line" />
    </div>
  );
}

export default SectionHeader;
