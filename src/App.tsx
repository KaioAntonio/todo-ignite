import './styles.css';
import { Header } from "./components/Header";
import { TaskBar } from './components/TaskBar';
import { Task } from './components/Task';
import { useState } from 'react';

export interface PostType {
  id: number;
  content: string;
  hadFinished: boolean;
}

export function App() {
  const [posts, setPosts] = useState<PostType[]>([
      { id: 1, content: 'Ir para academia hoje.', hadFinished: false },
      { id: 2, content: 'Estudar React.', hadFinished: false },
  ]);

  function addNewPost(content: string) {
      const newPost = {
          id: posts.length + 1,
          content,
          hadFinished: false,
      };
      setPosts([...posts, newPost]);
  }

  function deletePost(id: number) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }

  return (
    <div>
      <Header />
      <TaskBar onAddPost={addNewPost} />
      <Task posts={posts} onDeletePost={deletePost} />
    </div>
  )
}


