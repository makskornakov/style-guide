import Image from 'next/image';
import ColorPalette from './components/ColorPalette';
import { TheH } from './page.styled';

export default function Home() {
  return (
    <>
      <main>
        <TheH>Colors</TheH>
        <ColorPalette />

        <TheH>Typography</TheH>

        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
          egestas.
        </p>
      </main>
    </>
  );
}
