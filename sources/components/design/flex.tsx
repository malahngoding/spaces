import { styled } from '@config/stitches.config';

export const Flex = styled(`div`, {
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  variants: {
    direction: {
      row: {
        flexDirection: `row`,
      },
      col: {
        flexDirection: `column`,
      },
    },
  },
});
