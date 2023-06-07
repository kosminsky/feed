import { Trash } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://pps.whatsapp.net/v/t61.24694-24/351002278_639539798035929_1533787489786895302_n.jpg?ccb=11-4&oh=01_AdS_YcBdCpjYHKyfkMlmRBS8K3X-CycKazmaIU62tVgQFQ&oe=6488FC5E" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Igote</strong>
                            <time tittle="03 de Junho de 2023 às 10h20" dateTime="2023-06-03 11:13:00">Cerca de 1h atrás</time>
                        </div>

                        <button tittle="Deletar comentário">
                            <Trash size={24} />
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