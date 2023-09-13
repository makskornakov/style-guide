import { css } from '@linaria/core';

import { media } from './utils/media-queries';
import { reset } from './utils/reset';
// import './static/New Sun Regular.ttf';

export const globals = css`
  :global() {
    @font-face {
      font-family: 'New Sun Regular';
      src: url('./static/New Sun Regular.ttf') format('truetype');
    }
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      src: url(https://rsms.me/inter/font-files/Inter.var.woff2?v=3.19) format('woff2');
    }

    :root {
      --max-width: 1100px;
      --border-radius: 12px;

      /* Colors */
      --background-color: #fff;
      --foreground-color: #000;
    }

    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: 'Inter', sans-serif;
      font-weight: 300;
    }

    html,
    body {
      max-width: 100vw;
      overflow-x: hidden;
    }
    main {
      padding: 0.5rem;
    }
    body {
      color: rgb(var(--foreground-rgb));
      background: rgb(var(--background-rgb));
    }

    a {
      ${reset.a}
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'New Sun Regular', sans-serif;
    }

    h1 {
      font-size: 32px;
    }
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 20px;
    }
    h4 {
      font-size: 18px;
    }
  }
`;
