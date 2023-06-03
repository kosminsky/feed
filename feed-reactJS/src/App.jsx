import { Header } from './components/Header';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar.jsx';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Soni"
            content="Sou um bonobão"
          />
          <Post
            author="Igote"
            content="vdd"
          />
        </main>
      </div>
    </div>
  )
}

export default App
