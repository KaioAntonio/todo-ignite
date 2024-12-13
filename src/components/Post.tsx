import { useState } from "react";
import styles from "./Post.module.css";
import { CheckCircle, Circle, Trash } from 'phosphor-react'

export interface PostProps {
    post: {
        id: number;
        content: string;
        hadFinished: boolean;
    };
    incrementFinishedTasks: () => void;
    decrementFinishedTasks: () => void;
    onDeletePost: (id: number) => void;
}

export function Post({ post, incrementFinishedTasks, decrementFinishedTasks, onDeletePost }: PostProps) {
    const [finished, setFinished] = useState(post.hadFinished);

    const handleMarkAsFinished = () => {
        setFinished(!finished);
        incrementFinishedTasks();
        if(finished) {
            decrementFinishedTasks();
        }
    };

    function handleDeletePost() {
        onDeletePost(post.id);
    }

    return (
        <div className={`${styles.post} ${finished ? styles.finished : ''}`}>
            <button 
            className={`${styles.markButton} ${finished ? styles.finishedButton : ''}`}
            onClick={handleMarkAsFinished}
            >
                 {finished ? <CheckCircle size={24} /> : <Circle size={24} />}
            </button>
            <div className={`${styles.content} ${finished ? styles.finished : ''}`}>
                <span>
                {post.content}
                </span>
            </div>
            <footer>
                <button 
                onClick={handleDeletePost}
                title="Deletar comentário">
                    <Trash size={24}/>
                </button>
            </footer>
        </div>
    )
}