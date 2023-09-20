import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { media } from './utils/media-queries';
import Link from 'next/link';

const transitionDurationDefault = '200ms';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  gap: 1rem;
  min-height: 100vh;
  width: 100vw;
`;

export const LinkBack = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  transition-duration: 0.4s;

  &:hover {
    transform: scale(1.1);
    color: red;
  }
`;
