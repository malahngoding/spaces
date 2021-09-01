import { styled } from '@config/stitches.config';

export const Section = styled(`section`, {
  variants: {
    type: {
      fullscreen: {
        marginY: `$md`,
      },
      common: {
        marginX: `$md`,
        marginY: `$md`,
      },
    },
  },
  defaultVariants: {
    type: `common`,
  },
});
