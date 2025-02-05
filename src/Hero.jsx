import React from 'react';
import heroImg from './assets/hero.svg';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            beatae et itaque obcaecati voluptates quasi dolorem voluptatum,
            ipsum natus mollitia eum atque. In hic nulla doloribus rem possimus
            repellat est.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
}
