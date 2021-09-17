// stitches.config.ts
import { createStitches } from '@stitches/react';
import { mauve } from '@radix-ui/colors';

export const { styled, css, globalCss, keyframes, getCssText, theme } =
  createStitches({
    theme: {
      colors: {
        ...mauve,
        red1: `rgba(246,228,227)`,
        red2: `rgba(241,155,149)`,
        red3: `rgba(232,100,60)`,
        green1: `rgba(221,251,247)`,
        green2: `rgba(132,224,198)`,
        green3: `rgba(88,194,175)`,
        yellow1: `rgba(253,243,208)`,
        yellow2: `rgba(249,212,119)`,
        yellow3: `rgba(246,190,69)`,
        pink1: `rgba(253,243,248)`,
        pink2: `rgba(221,181,198)`,
        pink3: `rgba(239,144,185)`,
        blue1: `rgba(233,231,250)`,
        blue2: `rgba(130,150,248)`,
        blue3: `rgba(31,77,220)`,
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
