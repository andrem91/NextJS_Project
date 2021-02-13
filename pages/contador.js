import Contador from '../components/Contador';
import Navbar from '../components/Navbar';

function contador() {

  return (
    <div>
      <Navbar />
      <main>
      <h1>Bem vindo ao contador!</h1>
      <Contador />
      </main>
    </div>
  );
};

export default contador;