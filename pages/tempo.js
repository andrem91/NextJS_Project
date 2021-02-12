import Link from 'next/link';
import Tempo from '../components/Tempo';

function tempo(props) {
  return (
    <div>
      <Link href="/">
        <a>Página Home</a>
      </Link>
      <Tempo time={props.staticDateString} />
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