import { styled } from '@config/stitches.config';

export const Nav = styled(`nav`, {
  display: `none`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  height: `$sm`,
  padding: `$md`,
  backgroundColor: `$mauve1`,
  color: `$mauve12`,
  '@md': {
    height: `$md`,
    display: `flex`,
  },
  '@lg': {
    height: `$lg`,
    padding: `$lg`,
  },
});
