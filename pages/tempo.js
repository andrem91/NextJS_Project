import Link from 'next/link';
import Tempo from '../components/Tempo';

function tempo() {
  return (
    <div>
      <Link href="/">
        <a>Página Home</a>
      </Link>
      <Tempo />
    </div>
  );
};

export default tempo;