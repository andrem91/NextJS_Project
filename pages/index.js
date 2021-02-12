import Contador from './components/Contador';
import styles from './index.module.css';

function Home() {
  return (
  <div className={styles.body}>
    <h1 className={styles.title}>Bem vindo ao contador!</h1>
    <Contador />
    </div>)
}

export default Home;