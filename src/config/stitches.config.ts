// stitches.config.ts
import { createStitches, createTheme } from '@stitches/react';
import {
  slate,
  cyan,
  crimson,
  slateDark,
  cyanDark,
  crimsonDark,
} from '@radix-ui/colors';

const sweetie16 = {
  sweet1: '#1a1c2c',
  sweet2: '#5d275d',
  sweet3: '#b13e53',
  sweet4: '#ef7d57',
  sweet5: '#ffcd75',
  sweet6: '#a7f070',
  sweet7: '#38b764',
  sweet8: '#257179',
  sweet9: '#29366f',
  sweet10: '#3b5dc9',
  sweet11: '#41a6f6',
  sweet12: '#73eff7',
  sweet13: '#f4f4f4',
  sweet14: '#94b0c2',
  sweet15: '#566c86',
  sweet16: '#333c57',
};

export const { styled, css, globalCss, keyframes, getCssText, theme } =
  createStitches({
    theme: {
      colors: {
        ...slate,
        ...cyan,
        ...crimson,
        ...sweetie16,
      },
      fonts: {
        sans: `Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
        brand: `Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
        mono: ` monospace`,
      },
      fontWeights: {
        light: `300`,
        normal: `400`,
        bold: `700`,
        black: `900`,
      },
      fontSizes: {
        xxs: `0.8rem`,
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
        xxs: `0.6rem`,
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

export const darkTheme = createTheme(`dark-theme`, {
  colors: {
    ...slateDark,
    ...cyanDark,
    ...crimsonDark,
    ...sweetie16,
  },
});
