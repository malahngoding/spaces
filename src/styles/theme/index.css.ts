import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

export const bluePrint = createThemeContract({
  color: {
    slate1: ``,
    slate2: ``,
    slate3: ``,
    slate4: ``,
    slate5: ``,
    slate6: ``,
    slate7: ``,
    slate8: ``,
    slate9: ``,
    slate10: ``,
    slate11: ``,
    slate12: ``,
  },
  transparent: {
    left: ``,
    right: ``,
  },
});

export const globalTheme = createGlobalTheme(`:root`, {
  family: {
    mono: `'NectoMono', monospace`,
    sans: `'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  },
  fontWeights: {
    normal: `400`,
    bold: `700`,
  },
  fontSizes: {
    xsmall: `11px`,
    smallest: `12px`,
    smaller: `13px`,
    small: `14px`,
    regular: `16px`,
    large: `18px`,
    larger: `20px`,
    largest: `24px`,
    xlarge: `28px`,
    xxlarge: `32px`,
  },
  radii: {
    none: `0px`,
    xxs: `2px`,
    xs: `4px`,
    sm: `6px`,
    lg: `16px`,
  },
  space: {
    none: `0px`,
    xsmall: `2px`,
    smallest: `4px`,
    smaller: `8px`,
    small: `12px`,
    regular: `16px`,
    large: `20px`,
    larger: `24px`,
    largest: `36px`,
    xlarge: `40px`,
    xxlarge: `48px`,
  },
});

export const vars = { ...globalTheme, bluePrint };
