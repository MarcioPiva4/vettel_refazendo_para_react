import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import React, { useEffect, useState } from "react";

import { Link as Scrolling} from 'react-scroll';
export default function Header({ bg, isDashboard}) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
 

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleScroll = () => {
    if (window.scrollY > 550) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      {isDashboard ? (
        <header
          className={styles.header}
          style={
            openMenu ? { backgroundColor: "#E40101" } : { backgroundColor: bg }
          }
        >
          <h1>
            <Link to="/">Vettel</Link>
          </h1>
          <div
            className={
              openMenu
                ? styles.icon__hamburguer__open
                : styles.icon__hamburguer__close
            }
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div
            className={openMenu ? styles.menu__active : styles.menu__disabled}
          >
            <ul className={styles.ul__dashboard}>
              <li onClick={closeMenu}>
                <Link to="/painel">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 37 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 13.5V0H36.5V13.5H20ZM0.5 19.5V0H17V19.5H0.5ZM20 36V16.5H36.5V36H20ZM0.5 36V22.5H17V36H0.5ZM3.5 16.5H14V3H3.5V16.5ZM23 33H33.5V19.5H23V33ZM23 10.5H33.5V3H23V10.5ZM3.5 33H14V25.5H3.5V33Z"
                      fill="#E40101"
                    />
                  </svg>
                  Dashboard
                </Link>
              </li>

              <li onClick={closeMenu}>
                <Link to="/painel/planos">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 37 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 40C2.675 40 1.96875 39.7062 1.38125 39.1188C0.79375 38.5312 0.5 37.825 0.5 37V7C0.5 6.175 0.79375 5.46875 1.38125 4.88125C1.96875 4.29375 2.675 4 3.5 4H13.75C13.9167 2.83333 14.45 1.875 15.35 1.125C16.25 0.375 17.3 0 18.5 0C19.7 0 20.75 0.375 21.65 1.125C22.55 1.875 23.0833 2.83333 23.25 4H33.5C34.325 4 35.0312 4.29375 35.6188 4.88125C36.2062 5.46875 36.5 6.175 36.5 7V37C36.5 37.825 36.2062 38.5312 35.6188 39.1188C35.0312 39.7062 34.325 40 33.5 40H3.5ZM3.5 37H33.5V7H3.5V37ZM8.5 32H22.15V29H8.5V32ZM8.5 23.5H28.5V20.5H8.5V23.5ZM8.5 15H28.5V12H8.5V15ZM18.5 6.15C18.9667 6.15 19.375 5.975 19.725 5.625C20.075 5.275 20.25 4.86667 20.25 4.4C20.25 3.93333 20.075 3.525 19.725 3.175C19.375 2.825 18.9667 2.65 18.5 2.65C18.0333 2.65 17.625 2.825 17.275 3.175C16.925 3.525 16.75 3.93333 16.75 4.4C16.75 4.86667 16.925 5.275 17.275 5.625C17.625 5.975 18.0333 6.15 18.5 6.15Z"
                      fill="#E40101"
                    />
                  </svg>
                  Meus planos
                </Link>
              </li>

              <li onClick={closeMenu}>
                <Link to="/painel/contato">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 24C17.6 24 18.5417 23.6083 19.325 22.825C20.1083 22.0417 20.5 21.1 20.5 20C20.5 18.9 20.1083 17.9583 19.325 17.175C18.5417 16.3917 17.6 16 16.5 16C15.4 16 14.4583 16.3917 13.675 17.175C12.8917 17.9583 12.5 18.9 12.5 20C12.5 21.1 12.8917 22.0417 13.675 22.825C14.4583 23.6083 15.4 24 16.5 24ZM8.5 32H24.5V30.85C24.5 30.05 24.2833 29.3167 23.85 28.65C23.4167 27.9833 22.8167 27.4833 22.05 27.15C21.1833 26.7833 20.2917 26.5 19.375 26.3C18.4583 26.1 17.5 26 16.5 26C15.5 26 14.5417 26.1 13.625 26.3C12.7083 26.5 11.8167 26.7833 10.95 27.15C10.1833 27.4833 9.58333 27.9833 9.15 28.65C8.71667 29.3167 8.5 30.05 8.5 30.85V32ZM29.5 40H3.5C2.7 40 2 39.7 1.4 39.1C0.8 38.5 0.5 37.8 0.5 37V3C0.5 2.2 0.8 1.5 1.4 0.9C2 0.3 2.7 0 3.5 0H20.55L32.5 11.95V37C32.5 37.8 32.2 38.5 31.6 39.1C31 39.7 30.3 40 29.5 40ZM29.5 37V13.3L19.2 3H3.5V37H29.5Z"
                      fill="#E40101"
                    />
                  </svg>
                  Contato
                </Link>
              </li>

              <li onClick={closeMenu}>
                <Link to="/painel/perfil">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.6 31.25C9.7 29.7833 11.7833 28.6583 13.85 27.875C15.9167 27.0917 18.1333 26.7 20.5 26.7C22.8667 26.7 25.0917 27.0917 27.175 27.875C29.2583 28.6583 31.35 29.7833 33.45 31.25C34.9167 29.45 35.9583 27.6333 36.575 25.8C37.1917 23.9667 37.5 22.0333 37.5 20C37.5 15.1667 35.875 11.125 32.625 7.875C29.375 4.625 25.3333 3 20.5 3C15.6667 3 11.625 4.625 8.375 7.875C5.125 11.125 3.5 15.1667 3.5 20C3.5 22.0333 3.81667 23.9667 4.45 25.8C5.08333 27.6333 6.13333 29.45 7.6 31.25ZM20.4907 21.5C18.5636 21.5 16.9417 20.8386 15.625 19.5157C14.3083 18.1928 13.65 16.5678 13.65 14.6407C13.65 12.7136 14.3114 11.0917 15.6343 9.775C16.9572 8.45833 18.5822 7.8 20.5093 7.8C22.4364 7.8 24.0583 8.46143 25.375 9.7843C26.6917 11.1072 27.35 12.7322 27.35 14.6593C27.35 16.5864 26.6886 18.2083 25.3657 19.525C24.0428 20.8417 22.4178 21.5 20.4907 21.5ZM20.5234 40C17.7745 40 15.1833 39.475 12.75 38.425C10.3167 37.375 8.19167 35.9417 6.375 34.125C4.55833 32.3083 3.125 30.1872 2.075 27.7617C1.025 25.3362 0.5 22.7445 0.5 19.9867C0.5 17.2289 1.025 14.6417 2.075 12.225C3.125 9.80833 4.55833 7.69167 6.375 5.875C8.19167 4.05833 10.3128 2.625 12.7383 1.575C15.1638 0.525 17.7555 0 20.5133 0C23.2711 0 25.8583 0.525 28.275 1.575C30.6917 2.625 32.8083 4.05833 34.625 5.875C36.4417 7.69167 37.875 9.80887 38.925 12.2266C39.975 14.6443 40.5 17.2277 40.5 19.9766C40.5 22.7255 39.975 25.3167 38.925 27.75C37.875 30.1833 36.4417 32.3083 34.625 34.125C32.8083 35.9417 30.6911 37.375 28.2734 38.425C25.8557 39.475 23.2723 40 20.5234 40ZM20.5 37C22.3333 37 24.125 36.7333 25.875 36.2C27.625 35.6667 29.35 34.7333 31.05 33.4C29.35 32.2 27.6167 31.2833 25.85 30.65C24.0833 30.0167 22.3 29.7 20.5 29.7C18.7 29.7 16.9167 30.0167 15.15 30.65C13.3833 31.2833 11.65 32.2 9.95 33.4C11.65 34.7333 13.375 35.6667 15.125 36.2C16.875 36.7333 18.6667 37 20.5 37ZM20.5 18.5C21.6333 18.5 22.5583 18.1417 23.275 17.425C23.9917 16.7083 24.35 15.7833 24.35 14.65C24.35 13.5167 23.9917 12.5917 23.275 11.875C22.5583 11.1583 21.6333 10.8 20.5 10.8C19.3667 10.8 18.4417 11.1583 17.725 11.875C17.0083 12.5917 16.65 13.5167 16.65 14.65C16.65 15.7833 17.0083 16.7083 17.725 17.425C18.4417 18.1417 19.3667 18.5 20.5 18.5Z"
                      fill="#E40101"
                    />
                  </svg>
                  Perfil
                </Link>
              </li>

              <li onClick={closeMenu}>
                <Link to="/painel/configuracoes">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9 40L14.9 33.7C14.2667 33.4667 13.6 33.15 12.9 32.75C12.2 32.35 11.5833 31.9333 11.05 31.5L5.15 34.2L0.5 26L5.9 22.05C5.83333 21.75 5.79167 21.4083 5.775 21.025C5.75833 20.6417 5.75 20.3 5.75 20C5.75 19.7 5.75833 19.3583 5.775 18.975C5.79167 18.5917 5.83333 18.25 5.9 17.95L0.5 14L5.15 5.8L11.05 8.5C11.5833 8.06667 12.2 7.65 12.9 7.25C13.6 6.85 14.2667 6.55 14.9 6.35L15.9 0H25.1L26.1 6.3C26.7333 6.53333 27.4083 6.84167 28.125 7.225C28.8417 7.60833 29.45 8.03333 29.95 8.5L35.85 5.8L40.5 14L35.1 17.85C35.1667 18.1833 35.2083 18.5417 35.225 18.925C35.2417 19.3083 35.25 19.6667 35.25 20C35.25 20.3333 35.2417 20.6833 35.225 21.05C35.2083 21.4167 35.1667 21.7667 35.1 22.1L40.5 26L35.85 34.2L29.95 31.5C29.4167 31.9333 28.8083 32.3583 28.125 32.775C27.4417 33.1917 26.7667 33.5 26.1 33.7L25.1 40H15.9ZM20.5 26.5C22.3 26.5 23.8333 25.8667 25.1 24.6C26.3667 23.3333 27 21.8 27 20C27 18.2 26.3667 16.6667 25.1 15.4C23.8333 14.1333 22.3 13.5 20.5 13.5C18.7 13.5 17.1667 14.1333 15.9 15.4C14.6333 16.6667 14 18.2 14 20C14 21.8 14.6333 23.3333 15.9 24.6C17.1667 25.8667 18.7 26.5 20.5 26.5ZM20.5 23.5C19.5333 23.5 18.7083 23.1583 18.025 22.475C17.3417 21.7917 17 20.9667 17 20C17 19.0333 17.3417 18.2083 18.025 17.525C18.7083 16.8417 19.5333 16.5 20.5 16.5C21.4667 16.5 22.2917 16.8417 22.975 17.525C23.6583 18.2083 24 19.0333 24 20C24 20.9667 23.6583 21.7917 22.975 22.475C22.2917 23.1583 21.4667 23.5 20.5 23.5ZM18.3 37H22.7L23.4 31.4C24.5 31.1333 25.5417 30.7167 26.525 30.15C27.5083 29.5833 28.4 28.9 29.2 28.1L34.5 30.4L36.5 26.8L31.8 23.35C31.9333 22.7833 32.0417 22.225 32.125 21.675C32.2083 21.125 32.25 20.5667 32.25 20C32.25 19.4333 32.2167 18.875 32.15 18.325C32.0833 17.775 31.9667 17.2167 31.8 16.65L36.5 13.2L34.5 9.6L29.2 11.9C28.4333 11.0333 27.5667 10.3083 26.6 9.725C25.6333 9.14167 24.5667 8.76667 23.4 8.6L22.7 3H18.3L17.6 8.6C16.4667 8.83333 15.4083 9.23333 14.425 9.8C13.4417 10.3667 12.5667 11.0667 11.8 11.9L6.5 9.6L4.5 13.2L9.2 16.65C9.06667 17.2167 8.95833 17.775 8.875 18.325C8.79167 18.875 8.75 19.4333 8.75 20C8.75 20.5667 8.79167 21.125 8.875 21.675C8.95833 22.225 9.06667 22.7833 9.2 23.35L4.5 26.8L6.5 30.4L11.8 28.1C12.6 28.9 13.4917 29.5833 14.475 30.15C15.4583 30.7167 16.5 31.1333 17.6 31.4L18.3 37Z"
                      fill="#E40101"
                    />
                  </svg>
                  Configurações
                </Link>
              </li>
            </ul>
          </div>
        </header>
      ) : (
        <header
          className={isScrolled ? styles.header__color : styles.header}
          style={
            openMenu ? { backgroundColor: "#E40101" } : { backgroundColor: bg }
          }
        >
          <h1>
            <Link to="/">Vettel</Link>
          </h1>
          <div
            className={
              openMenu
                ? styles.icon__hamburguer__open
                : styles.icon__hamburguer__close
            }
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div
            className={openMenu ? styles.menu__active : styles.menu__disabled}
          >
            <ul>
              <Scrolling
                activeClass="active"
                activeStyle={{color:"#E40101",textDecoration:'underline'}}
                to="plans"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <li onClick={closeMenu}>planos</li>
              </Scrolling>
              <Scrolling
                activeClass="active"
                activeStyle={{color:"#E40101",textDecoration:'underline'}}
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li onClick={closeMenu}>sobre nos</li>
              </Scrolling>
              <Scrolling
                activeClass="active"
                activeStyle={{color:"#E40101",textDecoration:'underline'}}
                to="benefits"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li onClick={closeMenu}>Beneficios</li>
              </Scrolling>

              <Scrolling
                activeClass="active"
                activeStyle={{color:"#E40101",textDecoration:'underline'}}
                to="assessment"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li onClick={closeMenu}>avaliações</li>
              </Scrolling>
              <Scrolling
                activeClass="active"
                activeStyle={{color:"#E40101",textDecoration:'underline'}}
                to="formHome"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li onClick={closeMenu}>contato</li>
              </Scrolling>
              
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register/tela1"}>Cadastrar-se</Link>
              </li>
            </ul>
          </div>
        </header>
      )}
    </>
  );
}
