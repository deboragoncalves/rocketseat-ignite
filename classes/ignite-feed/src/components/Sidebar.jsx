import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';


export function Sidebar() {
    return (
        <>
            <aside className={styles.sidebar}>
                <img className={styles.cover} src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></img>

                <div className={styles.profile}>
                    <img src="https://github.com/deboragoncalves.png" className={styles.avatar} />
                    <strong>Débora</strong>
                    <span>Froentend Developer</span>
                </div>

                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar seu perfil</a>
                </footer>
            </aside>
        </>
    )
}