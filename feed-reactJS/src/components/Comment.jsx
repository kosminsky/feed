import { Trash } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/350683251_188656244135716_6152854467726429877_n.jpg?ccb=11-4&oh=01_AdSivlbLfsBLi4_TtPvejmk76_Qrf8wRjzC2sIyKhR65GA&oe=64875433" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Igote</strong>
                            <time tittle="03 de Junho de 2023 às 10h20" dateTime="2023-06-03 11:13:00">Cerca de 1h atrás</time>
                        </div>

                        <button tittle="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Verdade</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}