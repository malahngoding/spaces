import { styled } from '@config/stitches.config';

export const Section = styled(`section`, {
  backgroundColor: `$mauve1`,
  color: `$mauve12`,
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
