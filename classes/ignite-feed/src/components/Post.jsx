import styles from './Post.module.css';

export function Post() {
    /* 
        - No HTML, atributo com nome composto é separado por hifen, já no React o padrão é camelCase
        - Tag tag possui o atributo dateTime, recebendo uma string no padrão YYYY-MM-DD HH:mm:ss
        - Tag time também pode ter o atributo title (similar ao alt no img), exibindo um texto auxiliar ao passar o mouse pelo conteúdo
    */
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/deboragoncalves.png" />
                    <div className={styles.authorInfo}>
                        <strong>Débora Gonçalves</strong>
                        <span>Frontend Developer</span>
                    </div>
                </div>
                <time title="27 de setembro às 17:43" dateTime="2022-09-27 16:40:00">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Conteúdo Post</p>
            </div>
        </article>
    )
}