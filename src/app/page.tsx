import Image from 'next/image';
import ColorPalette from './components/ColorPalette';
import { Main, Section, TheH } from './page.styled';

export default function Home() {
  return (
    <Main>
      <TheH>Colors</TheH>

      <ColorPalette />

      <TheH>Typography</TheH>

      <Section>
        <span>
          <h1 id="h1">Heading 1</h1>
          <i>[32px, New Sun Regular]</i>
        </span>
        <span>
          <h2 id="h2">Heading 2</h2>
          <i>[24px]</i>
        </span>
        <span>
          <h3 id="h3">Heading 3</h3>
          <i>[20px]</i>
        </span>
        <span>
          <h4 id="h4">Heading 4</h4>
          <i>[18px]</i>
        </span>

        <span>
          <p id="p">Paragraph</p>
          <i>[14px, Inter (300)]</i>
        </span>
      </Section>
    </Main>
  );
}
