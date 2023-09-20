// import { Section } from '../page.styled';

interface Color {
  name: string;
  hex: string;
}
type Palette = Color[];

// const palette: Palette = [
//   { name: 'Rich Black', hex: '#0C151D' },
//   { name: 'Indigo dye', hex: '#344966' },
//   { name: 'Uranian Blue', hex: '#A0DDFF' },
//   { name: 'White smoke', hex: '#F5F4F6' },
//   { name: 'Atomic tangerine', hex: '#F78D50' },
// ];

export default function ColorPalette({ palette }: { palette: Palette }) {
  return (
    <div
      style={{
        flexDirection: 'row',
        display: 'flex',
        paddingBottom: '1rem',
        borderBottom: '1.5px solid black',
        columnGap: '1.5rem',
      }}
    >
      {palette.map((color) => (
        <ColorBlock key={color.name} {...color} />
      ))}
    </div>
  );
}

function ColorBlock({ name, hex }: Color) {
  return (
    <div
      style={{
        // outline: '1px solid red',
        width: '7rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // margin: '1rem',
        rowGap: '0.5rem',
      }}
    >
      <div
        style={{
          width: '5rem',
          height: '5rem',
          backgroundColor: hex,
          borderRadius: '0.5rem',
          boxShadow: '0 0 1rem 0.1rem rgba(0, 0, 0, 0.25)',
        }}
      />
      <span>{name}</span>
      <span>{hex}</span>
    </div>
  );
}
