import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import React, { useEffect, useState } from 'react';

export default function Header({ bg }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu); 
    console.log(openMenu)
  };

  const handleScroll = () => {
    if (window.scrollY > 550) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isScrolled ? styles.header__color : styles.header} style={{ backgroundColor: bg }}>
        <h1><Link to="/">Vettel</Link></h1>
        <div
          className={openMenu ? styles.icon__hamburguer__open : styles.icon__hamburguer__close}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={openMenu ? styles.menu__active  : styles.menu__disabled}>
          <ul>
            <li>planos</li>
            <li>sobre nos</li>
            <li>beneficios</li>
            <li>avaliações</li>
            <li>contato</li>
            <li> <Link to={'/login'}>Login</Link></li>
            <li> <Link to={'/register/screen1'}>Cadastrar-se</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
}
