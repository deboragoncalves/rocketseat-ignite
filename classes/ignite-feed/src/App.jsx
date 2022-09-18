import { Header } from './components/Header.jsx';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar.jsx';

function App() {

  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          Posts
        </main>
      </div>
    </>
  )
}

export default App
