import React from 'react';
import { AiFillGithub as Icon } from 'react-icons/ai';
import sass from './Footer.module.scss';
import Container from 'components/Container/Container';
import Contacts from 'components/Contacts/Contacts';

const { footer, footerContent, footerText, footerLink } = sass;

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className={footer}>
          <div className={footerContent}>
            <Icon size={20} />
            <p className={footerText}>
              Made by{' '}
              <a
                href="https://github.com/Khayetska"
                target="_blank"
                rel="noreferrer"
                className={footerLink}
              >
                Khayetska
              </a>
            </p>
          </div>
          <Contacts />
        </div>
      </Container>
    </footer>
  );
}
