import Tempo from '../components/Tempo';
import Navbar from '../components/Navbar';


function tempo(props) {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Bem vindo a página de tempo!</h1>
        <Tempo time={props.staticDateString} />
      </main>
    </div>
  );
};

export function getStaticProps() {
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();
  return {
    props: {
      staticDateString
    }
  }
}

export default tempo;