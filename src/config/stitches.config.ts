// stitches.config.ts
import { createStitches } from '@stitches/react';
import { mauve, cyan, mint, red, yellow, crimson } from '@radix-ui/colors';

export const { styled, css, globalCss, keyframes, getCssText, theme } =
  createStitches({
    theme: {
      colors: {
        ...mauve,
        ...cyan,
        ...mint,
        ...red,
        ...yellow,
        ...crimson,
      },
      fontSizes: {
        xs: `12px`,
        sm: `14px`,
        md: `24px`,
        lg: `32px`,
        xl: `64px`,
      },
      space: {
        xs: `0.8rem`,
        sm: `1.2rem`,
        md: `1.8rem`,
        lg: `3.2rem`,
        xl: `4.6rem`,
      },
    },
    media: {
      xs: `(min-width: 9px)`,
      sm: `(min-width: 576px)`,
      md: `(min-width: 768px)`,
      lg: `(min-width: 992px)`,
      xl: `(min-width: 1200px)`,
    },
    utils: {
      marginX: (value: string) => ({
        marginLeft: value,
        marginRight: value,
      }),
      marginY: (value: string) => ({
        marginTop: value,
        marginBottom: value,
      }),
    },
  });
