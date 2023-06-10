import { Header } from './components/Header';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar.jsx';

// author: { avatar_url: "", name: "", role: ""}
//publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/328714349_219329397177460_1170962623550889006_n.jpg?ccb=11-4&oh=01_AdSwR5p0FaIN7nLGKVf43bEu8Bsogw55yKAmGW7ues2edw&oe=64877C3B',
      name: 'Soni',
      role: 'Troll Profissional'
    },
    content: [
      { type: 'paragraph', content: 'Boa tarde, gostaria de informar a todos que sou um bonobão fresco que pega traço no fut. Se tiver alguma dúvida, entre em contato comigo:'},
      { type: 'link', content: 'https://wa.me/559180164594'}
    ],
    publishedAt: new Date('2023-06-07 16:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/351742681_255919237118240_3919252908336163091_n.jpg?ccb=11-4&oh=01_AdR9wa4x4nqyKS60oeLUoOoT3ueKIcU86ivElYGmg3J7_A&oe=648E099A',
      name: 'Igote',
      role: 'Irmão do Troll Profissional'
    },
    content: [
      { type: 'paragraph', content: 'Boa tarde, gostaria de informar a todos que sou o irmão do bonobão fresco que pega traço no fut, mais conhecido como Soni. Se tiver alguma dúvida, entre em contato comigo:'},
      { type: 'link', content: 'https://wa.me/559188038003'}
    ],
    publishedAt: new Date('2023-06-07 17:35:00')
  },
]


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
