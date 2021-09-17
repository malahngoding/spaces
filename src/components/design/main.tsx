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

export const MainDesign = styled(`main`, {
  marginTop: `98px`,
  marginLeft: `0px`,
  width: `calc(100% - 0px)`,
  backgroundColor: `$mauve1`,
  color: `$mauve12`,
  '@sm': {
    marginTop: `0`,
    marginLeft: `80px`,
    width: `calc(100% - 80px)`,
  },
  '@lg': {
    marginLeft: `20vw`,
    width: `calc(100% - 20vw)`,
  },
});
