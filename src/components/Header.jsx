import styles from './Header.module.css'

export function Header() {
  return (
    <header>
      <div className={styles.title}>
        <p>FIND YOUR BLOCK</p>
        <h1>Encontre os <span>melhores blocos</span> de carnaval de 2023</h1>
      </div>

      <div className={styles.find}>
        <input placeholder="Pesquise por nome" type="text" />
        <input placeholder="Selecione uma cidade" type="search" />
        <a href="#">BUSCAR AGORA</a>
      </div>
    </header>
  )
}