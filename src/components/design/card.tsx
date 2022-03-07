import { styled } from '@config/stitches.config';

export const Card = styled(`div`, {
  border: `2px solid $slate12`,
  background: `$slate4`,
  padding: `$md`,
  '@lg': {
    flexDirection: `row`,
  },
  '&:hover': {
    cursor: `pointer`,
    transform: `translateY(-4px)`,
    boxShadow: `0px 8px 6px -8px hsl(198 6.6% 15.8%)`,
  },
});
