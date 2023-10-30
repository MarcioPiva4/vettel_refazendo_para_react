import styles from './style.module.scss'

export default function FormularioHome(){
    return(
        <section className={styles.form}>
            <h1>Contato</h1>
            <form>
                <label>Nome</label>
                <input type="text"></input>

                <label>E-mail</label>
                <input type="email"></input>

                <label>Telefone</label>
                <input type="tel"></input>

                <label>Assunto</label>
                <input type="text"></input>

                <label>Mensagem</label>
                <textarea></textarea>

                <div>
                    <button type="submit">Enviar</button>
                    <button type="reset">Limpar</button>
                </div>
            </form>
        </section>
    )
}