import { styled } from '@config/stitches.config';

export const Section = styled(`section`, {
  backgroundColor: `$slate1`,
  color: `$slate12`,
  variants: {
    type: {
      fullscreen: {
        marginY: `$md`,
      },
      common: {
        marginY: `$md`,
        '@xs': {
          marginX: `$md`,
        },
        '@lg': {
          marginX: `$xl`,
        },
      },
    },
  },
  defaultVariants: {
    type: `common`,
  },
});
