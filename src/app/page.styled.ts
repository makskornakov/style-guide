import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { media } from './utils/media-queries';

const transitionDurationDefault = '200ms';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  min-height: 100vh;
  width: 100vw;
`;

export const TheH = styled.h1`
  font-size: 2rem;
  color: darkblue;
  font-weight: 300;
  font-family: 'Inter', sans-serif;
`;

export const Section = styled.div`
  /* outline: 1px solid red; */

  display: flex;
  background: var(--background-color);
  flex-direction: column;
  /* padding: 1rem; */

  row-gap: 1rem;
  width: 100%;

  /* span */
  & > span {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
  }
`;
