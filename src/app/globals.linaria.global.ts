import { css } from '@linaria/core';

import { media } from './utils/media-queries';
import { reset } from './utils/reset';
// import './static/New Sun Regular.ttf';

export const globals = css`
  :global() {
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
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    body {
      color: rgb(var(--foreground-color));
      background: rgb(var(--background-color));
    }

    a {
      ${reset.a}
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
