import { css } from '@linaria/core';

import { media } from './utils/media-queries';
import { reset } from './utils/reset';

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
  }
`;
