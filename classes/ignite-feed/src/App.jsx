import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import { Post } from './components/Post.jsx';

import './global.css';
import styles from './App.module.css';

function App() {

  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
