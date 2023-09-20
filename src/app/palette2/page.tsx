import butterfly from '../static/Butterfly2.svg';
import Image from 'next/image';
import { Quattrocento } from 'next/font/google';
import { IoArrowBack } from 'react-icons/io5';
import { LinkBack } from '../page.styled';

const quattrocento = Quattrocento({ weight: '400', subsets: ['latin'] });

export default function Palette1() {
  return (
    <main
      style={{
        background: '#FCF7EE',
      }}
    >
      <LinkBack href="/">
        <IoArrowBack size={30} />
      </LinkBack>
      <Image
        src={butterfly}
        alt="butterfly"
        width={370}
        height={250}
        style={{ marginTop: '45px' }}
      />
      <h1
        className={quattrocento.className}
        style={{
          whiteSpace: 'pre-line',
          textAlign: 'center',
          fontSize: '60px',
          color: '#0C151D',
          marginTop: '45px',
        }}
      >
        {'Discover the force \n of mentoring'.toUpperCase()}
      </h1>
    </main>
  );
}
