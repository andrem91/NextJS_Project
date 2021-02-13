import Link from 'next/link';

function Navbar() {
  return (
    <header>
      <h2>Next.JS</h2>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contador">
          <a>Contador</a>
        </Link>
        <Link href="/tempo">
          <a>Tempo</a>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;