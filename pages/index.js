import Link from 'next/link';
import Contador from '../components/Contador';

function Home() {

  return (
    <div>
      <Link href="/tempo">
        <a>Página Tempo</a>
      </Link>
      <h1>Bem vindo ao contador!</h1>
      <Contador />
    </div>
  );
};

export default Home;