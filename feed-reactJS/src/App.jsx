import { Post } from './Post'
import { Header } from './components/Header.jsx'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      
      <Post
        author="Soni"
        content="Sou um bonobão"
      />
      <Post
        author="Igote"
        content="vdd"
      />
    </div>
  )
}

export default App
