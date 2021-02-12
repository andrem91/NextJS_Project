import { useState } from 'react';
import styles from './Contador.module.css';

function Contador() {
  const [contador, setContador] = useState(1);
  function adicionarContador() {
    setContador(contador + 1)
  }
  return (
    <div className={styles.container}>
      <h2>Contador: {contador}</h2>
      <button className={styles.primary} onClick={adicionarContador}>Adicionar</button>
    </div>
  );
};

export default Contador;