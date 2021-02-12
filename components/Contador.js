import { useState } from 'react';
import styles from '../styles/Contador.module.css';

function Contador() {
  const [contador, setContador] = useState(1);
  function adicionarContador() {
    setContador(contador + 1)
  }
  return (
    <div className={styles.containerContador}>
      <h2>Contador: {contador}</h2>
      <button className={styles.buttonContador} onClick={adicionarContador}>Adicionar</button>
    </div>
  );
};

export default Contador;