import React from 'react';

function SectionHeader({ title }) {
  return (
    <div className="section-header">
      <h1 className="section-header__title">{title}</h1>
      <div className="section-header__separating-line" />
    </div>
  );
}

export default SectionHeader;
