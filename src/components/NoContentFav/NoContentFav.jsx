import React from 'react';
import sass from './NoContentFav.module.scss';
import Container from 'components/Container/Container';

const { background, text } = sass;

export default function NoContentFav() {
  return (
    <section className={background}>
      <Container>
        <p className={text}>You haven't added any cars to your favorites</p>
      </Container>
    </section>
  );
}
