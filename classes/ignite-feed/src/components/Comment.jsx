import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';

/* Quando se tratar de icone, envolver com um button e adicionar atributo title, 
com texto explicativo exibido quando passar o mouse */

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/deboragoncalves.png" />
            <div className={styles.commentBox}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Débora Gonçalves</strong>
                        <time title="27 de setembro às 17:43" dateTime="2022-09-27 16:40:00">Cerca de 1h atrás</time>
                    </div>

                    <button title="Deletar comentário">
                        <Trash size={20} />
                    </button>
                </header>
                <p>Text comment</p>
            </div>
            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    )
}