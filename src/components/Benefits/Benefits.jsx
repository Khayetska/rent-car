import React from 'react';
import Container from 'components/Container/Container';
import {
  TbBoxMultiple1,
  TbBoxMultiple2,
  TbBoxMultiple3,
  TbBoxMultiple4,
} from 'react-icons/tb';
import sass from './Benefits.module.scss';

const {
  benefitsWrapper,
  benefitsSection,
  background,
  contentWrapper,
  title,
  benefitsList,
  benefitsItem,
  iconWrapper,
  icon,
} = sass;

export default function Benefits() {
  return (
    <section className={benefitsSection}>
      <div className={benefitsWrapper}>
        <div className={background}></div>
        <Container>
          <div className={contentWrapper}>
            <h2 className={title}>
              Why do people <span>choose us</span>?
            </h2>
            <ul className={benefitsList}>
              <li className={benefitsItem}>
                <div className={iconWrapper}>
                  <TbBoxMultiple1 size={50} className={icon} color="#121417" />
                </div>
                Wide variety of cars.
              </li>
              <li className={benefitsItem}>
                <div className={iconWrapper}>
                  <TbBoxMultiple2 size={50} className={icon} color="#121417" />
                </div>
                Quality and reliability.
              </li>
              <li className={benefitsItem}>
                <div className={iconWrapper}>
                  <TbBoxMultiple3 size={50} className={icon} color="#121417" />
                </div>
                Easy online booking.
              </li>
              <li className={benefitsItem}>
                <div className={iconWrapper}>
                  <TbBoxMultiple4 size={50} className={icon} color="#121417" />
                </div>
                Professional service.
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}
