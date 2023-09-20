import { IoArrowBack } from 'react-icons/io5';
import { LinkBack, Main } from '../page.styled';

export default function Palette1() {
  return (
    <main>
      <LinkBack href="/">
        <IoArrowBack size={30} />
      </LinkBack>
      <h1>Palette 3</h1>
    </main>
  );
}
