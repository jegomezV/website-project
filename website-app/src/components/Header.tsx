import React from 'react';
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>HOME</li>
          <li>ACERCA DEL PROYECTO</li>
          <li>Creditos</li>
          <li>Modelos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;