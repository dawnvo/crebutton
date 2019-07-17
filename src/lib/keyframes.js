import { keyframes } from 'styled-components';

export const vertical = keyframes`
  from, to {
    margin-top: 0rem;
  }
  50% {
    margin-top: -0.5rem;
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;
