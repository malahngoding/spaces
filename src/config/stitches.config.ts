// stitches.config.ts
import { createStitches } from '@stitches/react';
import { mauve } from '@radix-ui/colors';

export const { styled, css, globalCss, keyframes, getCssText, theme } =
  createStitches({
    theme: {
      colors: {
        ...mauve,
        red1: `#FFE8E8`,
        red2: `#FF9692`,
        red3: `#F95A2C`,
        green1: `#D6FCF7`,
        green2: `#61E4C5`,
        green3: `#00C6AE`,
        yellow1: `#FFF4CC`,
        yellow2: `#FFD465`,
        yellow3: `#FFBD12`,
        pink1: `#FFF3F8`,
        pink2: `#FFC7DE`,
        pink3: `#FF89BB`,
        blue1: `#E9E7FC`,
        blue2: `#8094FF`,
        blue3: `#1947E5`,
      },
      fontWeights: {
        light: `300`,
        normal: `400`,
        bold: `700`,
        black: `900`,
      },
      fontSizes: {
        xs: `14px`,
        sm: `15px`,
        display: `16px`,
        md: `23px`,
        lg: `31px`,
        xl: `47px`,
      },
      radii: {
        xs: `8px`,
        sm: `16px`,
        lg: `21px`,
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
      paddingX: (value: string) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      paddingY: (value: string) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
  });
