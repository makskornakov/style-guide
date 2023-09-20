import Image from 'next/image';
import ColorPalette from './components/ColorPalette';
import { Main } from './page.styled';
import Link from 'next/link';

const palette1 = [
  { name: 'Rich Black', hex: '#0C151D' },
  { name: 'Indigo dye', hex: '#344966' },
  { name: 'Uranian Blue', hex: '#A0DDFF' },
  { name: 'White smoke', hex: '#F5F4F6' },
  { name: 'Atomic tangerine', hex: '#F78D50' },
];

const palette2 = [
  { name: 'Rich Black', hex: '#011313' },
  { name: 'Dark Slate Gray', hex: '#223B38' },
  { name: 'Ash Gray', hex: '#C9D9CD' },
  { name: 'Floral White', hex: '#FCF7EE' },
  { name: 'Naples Yellow', hex: '#FFE270' },
];

const palette3 = [
  { name: 'Eerie Black', hex: '#101918' },
  { name: 'Teal', hex: '#1C8087' },
  { name: 'Isabelline', hex: '#F9F4F1' },
  { name: 'Persian red', hex: '#C44536' },
  { name: 'Chinese Violet', hex: '#985D81' },
];

const palette4 = [
  { name: 'Oxford Blue', hex: '#1C2435' },
  { name: 'Tropical Indigo', hex: '#A18BF8' },
  { name: 'Azure (web)', hex: '#EEFCFA' },
  { name: 'Savoy Blue', hex: '#5A69AF' },
  { name: 'Turquoise', hex: '#50E2CA' },
];

export default function Home() {
  return (
    <Main>
      <h1>Force of Mentoring styles</h1>
      <h2>Style 1</h2>
      <Link href="/palette1">
        <ColorPalette palette={palette1} />
      </Link>
      <h2>Style 2</h2>
      <Link href="/palette2">
        <ColorPalette palette={palette2} />
      </Link>
      <h2>Style 3</h2>
      <Link href="/palette3">
        <ColorPalette palette={palette3} />
      </Link>
      <h2>Style 4</h2>
      <Link href="/palette4">
        <ColorPalette palette={palette4} />
      </Link>
    </Main>
  );
}
