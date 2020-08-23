import React from 'react';

const HeaderPrimary = ({ title, subtitle }) => {
  return (
    <section className='header hero is-primary is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title is-1'>{title}</h1>
          <h2 className='subtitle my-1'>{subtitle}</h2>
        </div>
      </div>
    </section>
  );
};

export default HeaderPrimary;
