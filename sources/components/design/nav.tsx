import { styled } from '@config/stitches.config';

export const Nav = styled(`nav`, {
  marginTop: `0px`,
  display: `none`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  height: `$sm`,
  padding: `$md`,
  backgroundColor: `$slate1`,
  color: `$slate12`,
  borderBottom: `1px solid $slate6`,
  '@md': {
    height: `$md`,
    display: `flex`,
    padding: `27px`, // Quick Hacks
  },
  '@lg': {
    height: `$lg`,
    padding: `46px`, // Quick Hacks
  },
});
