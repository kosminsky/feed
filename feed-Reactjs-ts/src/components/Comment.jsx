import { Trash } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://pps.whatsapp.net/v/t61.24694-24/351742681_255919237118240_3919252908336163091_n.jpg?ccb=11-4&oh=01_AdR9wa4x4nqyKS60oeLUoOoT3ueKIcU86ivElYGmg3J7_A&oe=648E099A" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Igote</strong>
                            <time tittle="03 de Junho de 2023 às 10h20" dateTime="2023-06-03 11:13:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} tittle="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}