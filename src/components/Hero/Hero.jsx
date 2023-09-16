import React from 'react';
import sass from './Hero.module.scss';
import Container from 'components/Container/Container';

const { heroSection } = sass;

export default function Home() {
  return (
    <section className={heroSection}>
      <Container>
        <p>Hero</p>
      </Container>
    </section>
  );
}
