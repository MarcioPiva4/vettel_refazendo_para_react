import styles from './style.module.scss'

import { Link as Scrolling} from 'react-scroll';

export default function BannerHome(){
    return (
      <>
        <section className={styles.banner__bg}>
          <span className={styles.banner__bg__title__mobile}>
            Viage com <b>Segurança</b>
          </span>
          <span className={styles.banner__bg__title__tablet}>
            Você busca dirigir com <br></br><b>Segurança</b> e <b>Emoção?</b>
          </span>
          <Scrolling
              activeClass="active"
              to="plans"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
          <button>
              CONHEÇA OS PLANOS
          </button>
          </Scrolling>
        </section>
      </>
    );
}