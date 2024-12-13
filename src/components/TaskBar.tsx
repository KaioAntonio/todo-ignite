
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './TaskBar.module.css';
import {PlusCircle} from 'phosphor-react';

interface TaskBarProps {
    onAddPost: (content: string) => void;
}

export function TaskBar({ onAddPost }: TaskBarProps) {
    const [newPostText, setNewPostText] = useState('');

    function handleNewPostChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewPostText(event.target.value);
    }

    function handleCreateNewPost(event: FormEvent) {
        event.preventDefault();
        if (newPostText.trim()) {
            onAddPost(newPostText.trim());
            setNewPostText('');
        }
        console.log(newPostText)
    }

    return (
        <div className={styles.taskBar}>
            <form onSubmit={handleCreateNewPost}>
                <textarea
                    name="post"
                    placeholder="Adicione uma nova tarefa"
                    value={newPostText}
                    onChange={handleNewPostChange}
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>
        </div>
    )
}