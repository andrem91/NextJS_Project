import Navbar from '../components/Navbar';
import Image from 'next/image'
import styles from '../styles/home.module.css';
function Home() {

  return (
    <div>
      <Navbar />
      <main>
        <h1>Bem vindo ao Projeto Next.JS!</h1>
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}>
        <Image
        src="/nextjs.png"
        alt="Next.JS"
        width="700"
        height="466"
        />
        </div>
      </main>
    </div>
  );
};

export default Home;