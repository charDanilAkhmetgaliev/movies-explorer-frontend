import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';

function SectionWrapper({ headerTitle, children }) {
  return (
    <section className="section-wrapper">
      <SectionHeader headerTitle={headerTitle} />
      {children}
    </section>
  );
}

export default SectionWrapper;
