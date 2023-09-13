import React from 'react';
import sass from './Hero.module.scss';

const { heroSection, home } = sass;

export default function Home() {
  return (
    <section className={heroSection}>
      <div className={home}>
        <p>Hero</p>
      </div>
    </section>
  );
}
