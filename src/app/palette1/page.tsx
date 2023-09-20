import Image from 'next/image';
import butterfly from '../static/Butterfly1.svg';
import { League_Spartan } from 'next/font/google';
import { LinkBack } from '../page.styled';
import { IoArrowBack } from 'react-icons/io5';

const leagueSpartan = League_Spartan({ weight: 'variable', subsets: ['latin'] });

export default function Palette1() {
  return (
    <main
      style={{
        background: '#F5F4F6',
      }}
    >
      <LinkBack href="/">
        <IoArrowBack size={30} />
      </LinkBack>
      <Image src={butterfly} alt="butterfly" width={330} height={350} />
      <h1
        className={leagueSpartan.className}
        style={{
          whiteSpace: 'pre-line',
          textAlign: 'center',
          fontSize: '60px',
          color: '#0C151D',
        }}
      >
        {'Discover the force \n of mentoring'.toUpperCase()}
      </h1>
      <hr
        style={{
          marginTop: '20px',
          width: '600px',
          height: '2px',
          background: '#F78D50',
          outline: 'none',
          border: 'none',
        }}
      />
      <hr
        style={{
          marginTop: '30px',
          width: '900px',
          height: '2px',
          background: '#344966',
          outline: 'none',
          border: 'none',
        }}
      />
    </main>
  );
}
