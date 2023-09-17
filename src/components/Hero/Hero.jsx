import React from 'react';
import sass from './Hero.module.scss';
import Container from 'components/Container/Container';

const { heroSection, heroTitle, titleWrapper } = sass;

export default function Home() {
  return (
    <section className={heroSection}>
      <Container>
        <div className={titleWrapper}>
          <h1 className={heroTitle}>
            Car <span>rental</span> for every occasions
          </h1>
        </div>
      </Container>
    </section>
  );
}
