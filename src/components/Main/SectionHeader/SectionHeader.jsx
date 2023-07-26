import React from 'react';

function SectionHeader({ headerTitle }) {
  return (
    <div className="section-header">
      <h1 className="section-header__title">{headerTitle}</h1>
      <div className="section-header__separating-line" />
    </div>
  );
}

export default SectionHeader;
