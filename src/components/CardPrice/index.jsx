import styles from './style.module.scss'

export default function CardPrice({ planTitle, bgTitle, listBenefits, pricePromotion, priceDefault, priceYearly}){
    return(
        <div className={styles.card}>
            <div className={styles.card__title} style={{"backgroundColor": bgTitle }}>
            <h1 id="plans">{planTitle}</h1> 
            </div>
            <div className={styles.card__list_benefits}>
                <ul>
                    {listBenefits.map((e,i) => 
                        <li key={i}>{e[0]} <p>{e[1]}</p></li>
                    )}
                </ul>
            </div>
            <div className={styles.card__prices}>
                <div className={styles.card__prices_content_price}> 
                    <div>
                        <span>De:</span>
                        <p>R$ {pricePromotion}/mês</p>
                    </div>

                    <div>
                        <span>Por</span>
                        <p><span style={{'color': bgTitle}}>R$</span> <b><span  style={{'color': bgTitle}}>{priceDefault}</span> <span  style={{'color': bgTitle}}>/mês</span></b> </p>
                    </div>
                </div>

                <div className={styles.card__prices_yearly}>
                    <span>
                        Pagamento anual
                        <svg width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.289062" width="4" height="4" rx="2" fill="black"  fillOpacity="0.4"/></svg>
                        Total R${priceYearly}
                    </span>
                </div>

                <div className={styles.card__prices_button}>
                    <button>Escolher</button>
                </div>                        
            </div>
        </div>
    )
}