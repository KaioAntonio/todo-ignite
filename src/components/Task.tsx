import { useState } from 'react';
import { Post } from './Post';
import styles  from './Task.module.css';

export interface PostType {
    id: number;
    content: string;
    hadFinished: boolean;
}


interface TaskProps {
    posts: PostType[];
    onDeletePost: (id: number) => void;
}

export function Task({posts, onDeletePost}: TaskProps) {
    const [finishedCount, setFinishedCount] = useState(0);
    
    function handleDecrement() {
        setFinishedCount(finishedCount - 1);
    }

    function handleIncrement() {
        setFinishedCount(finishedCount + 1);
    }

    function deletePost(id: number) {
        onDeletePost(id);
        
    }
    //const finishedCount = posts.filter((task) => task.hadFinished).length;


    return (
        <div>
            <div className={styles.task}>
                <div>
                    <span className={styles.taskCreated}>Tarefas criadas</span>
                    <span className={styles.statusCount}>{posts.length}</span>
                </div>
                <div>
                    <span className={styles.finished}>Concluídas</span>
                    <span className={styles.statusCount}>{finishedCount}</span>
                </div>
            </div>
            <main>
                {posts.map(post => {
                    return (
                        <Post 
                        key={post.id}
                        post={post}
                        incrementFinishedTasks={handleIncrement}
                        decrementFinishedTasks={handleDecrement}
                        onDeletePost = {deletePost}
                        />
                    )
                })}
            </main>
        </div>
        
    )
}