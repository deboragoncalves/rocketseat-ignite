import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg'

// Exportar sem default faz com que ao importar, se utilize o mesmo nome do componente
export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    )
}