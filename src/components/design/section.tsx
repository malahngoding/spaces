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
        marginX: `$md`,
        marginY: `$md`,
      },
    },
  },
  defaultVariants: {
    type: `common`,
  },
});
