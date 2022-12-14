import styles from './Post.module.css';

import { Comment } from './Comment.jsx';

export function Post() {
    /* 
        - No HTML, atributo com nome composto é separado por hifen, já no React o padrão é camelCase
        - Tag tag possui o atributo dateTime, recebendo uma string no padrão YYYY-MM-DD HH:mm:ss
        - Tag time também pode ter o atributo title (similar ao alt no img), exibindo um texto auxiliar ao passar o mouse pelo conteúdo
        - Espaçamento entre elementos HTML dentro do JSX: pode ser feito com CSS ou adicionando um espaço entre chaves {'  '}
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
                <p>Text post</p>
            </div>

            <form className={styles.commentForm}>
                <strong> Deixe seu comentário</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}