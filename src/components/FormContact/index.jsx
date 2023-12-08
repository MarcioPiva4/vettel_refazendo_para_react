import { useContext } from 'react';
import { ThemeContext } from 'route';
import styles from './style.module.scss'

export default function FormContact({isDashboard}){
  const { themeDark, toggleTheme } = useContext(ThemeContext);
    return isDashboard ? (
      <section className={styles.form}>
        <form>
          <label style={themeDark ? {color:"#fff"} : {}}>Nome</label>
          <input type="text" style={themeDark ? {borderColor:"#fff", backgroundColor:"rgb(40, 45, 53)", color:"#fff"} : {}}></input>

          <label style={themeDark ? {color:"#fff"} : {}}>E-mail</label>
          <input type="email" style={themeDark ? {borderColor:"#fff", backgroundColor:"rgb(40, 45, 53)", color:"#fff"} : {}}></input>

          <label style={themeDark ? {color:"#fff"} : {}}>Telefone</label>
          <input type="tel" style={themeDark ? {borderColor:"#fff", backgroundColor:"rgb(40, 45, 53)", color:"#fff"} : {}}></input>

          <label style={themeDark ? {color:"#fff"} : {}}>Assunto</label>
          <input type="text" style={themeDark ? {borderColor:"#fff", backgroundColor:"rgb(40, 45, 53)", color:"#fff"} : {}}></input>

          <label style={themeDark ? {color:"#fff"} : {}}>Mensagem</label>
          <textarea style={themeDark ? {borderColor:"#fff", backgroundColor:"rgb(40, 45, 53)", color:"#fff"} : {}}></textarea>

          <div className={styles.container__dashboard}>
            <button type="submit">Enviar</button>
            <button type="reset">Limpar</button>
          </div>
        </form>
      </section>
    ) : (
      <section className={styles.form}>
        <h1 id="formHome">Contato</h1>
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
    );
}