import styles from './style.module.scss'

import { Link as Scrolling} from 'react-scroll';

export default function BannerHome(){
    return (
      <>
        <section className={styles.banner__bg}>
          <span>
            Viage com <b>Segurança</b>
          </span>
          <button>
            <Scrolling
              activeClass="active"
              to="plans"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              CONHEÇA OS PLANOS
            </Scrolling>
          </button>
        </section>
      </>
    );
}