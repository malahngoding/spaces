import { styled } from '@config/stitches.config';

export const Main = styled(`main`, {
  marginTop: `98px`,
  marginLeft: `0px`,
  width: `calc(100% - 0px)`,
  backgroundColor: `$mauve1`,
  color: `$mauve12`,
  '@sm': {
    marginTop: `0`,
    marginLeft: `100px`,
    width: `calc(100% - 100px)`,
  },
  '@lg': {
    marginLeft: `140px`,
    width: `calc(100% - 140px)`,
  },
});
