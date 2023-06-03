import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                   <img className={styles.avatar} 
                        src="https://pps.whatsapp.net/v/t61.24694-24/328714349_219329397177460_1170962623550889006_n.jpg?ccb=11-4&oh=01_AdSwR5p0FaIN7nLGKVf43bEu8Bsogw55yKAmGW7ues2edw&oe=64877C3B" alt="" /> 
                        <div className={styles.authorInfo}>
                            <strong>Soni</strong>
                            <span>Troll Profissional</span>
                        </div>
                </div>

                <time title="02 de Junho de 2023 às 17h15" dateTime="2023-06-02 17:15:23">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Boa tarde, gostaria de informar a todos que sou um bonobão fresco que pega traço no fut</p>
                <p>
                    <a href="#">#Bonobo</a>{' '}
                    <a href="#">#Eu</a>{' '}
                    <a href="#">#Orgulho</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea 
                    placeholder="Deixe um comentário"
                />

               <footer>
                   <button type="Submit">Publicar</button>
               </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
            </div>
        </article>
    )
}