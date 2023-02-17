import { Block } from '../Blocks/Block'
import styles from './Main.module.css'

export function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <strong>Blocos recomendados</strong>
        <div className={styles.link}>
          <a href="#" className={styles.purple}>LISTA</a>
          <a href="#" className={styles.white}>MAPA</a>
        </div>
      </div>

      <div className={styles.grid}>
        <Block 
          src="https://images.unsplash.com/photo-1584477712087-69fa7e911b86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1451&q=80"
          title="O Python do vovô não sobe mais"
          place="São Paulo - SP" 
        />

        <Block 
          src="https://images.unsplash.com/photo-1551972873-b7e8754e8e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
          title="Todo mundo null"
          place="Florianópolis - SC" 
        />

        <Block 
          src="https://images.unsplash.com/photo-1588172561695-a9eed1db3441?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
          title="Hoje dou exception"
          place="Curitiba - PR" 
        />

        <Block 
          src="https://images.unsplash.com/photo-1522008629172-0c17aa47d1ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Manda Node"
          place="Salvador - BA" 
        />

        <Block 
          src="https://images.unsplash.com/photo-1593800026667-ddee5cf4aba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Só no back-end"
          place="São Paulo - SP" 
        />

        <Block 
          src="https://images.unsplash.com/photo-1588172322752-e13df881e89e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
          title="Esse anel não é de Ruby"
          place="São Paulo - SP" 
        />

        <Block 
          src="https://images.unsplash.com/photo-1593800026666-77f9dd4f6a9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Pimenta no C# dos outros é refresco"
          place="Rio de Janeiro - RJ" 
        />

        <Block 
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          title="EnCACHE aqui"
          place="Porto Alegre - RS" 
        />

         <Block 
          src="https://images.unsplash.com/photo-1562539853-78e07f4dd87f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          title="Não valho nada mas JAVA li"
          place="São Paulo - SP" 
        />
      </div>
    </div>
  )
}