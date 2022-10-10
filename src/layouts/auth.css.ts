import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme/index.css';

const altImage = `/static/images/camps-instead.webp`;

export const styledAuth = style([
  sprinkles({
    display: `flex`,
    flexDirection: `row`,
    width: {
      mobile: `100vw`,
    },
  }),
  {
    color: vars.bluePrint.color.slate12,
    backgroundColor: vars.bluePrint.color.slate1,
  },
]);

export const styledLeft = style([
  sprinkles({
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
  }),
  {
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${altImage}")`,
    '@media': {
      'screen and (min-width: 0px)': {
        width: `16px`,
      },
      'screen and (min-width: 768px)': {
        width: `32px`,
      },
      'screen and (min-width: 992px)': {
        width: `120px`,
      },
      'screen and (min-width: 1200px)': {
        width: `380px`,
      },
    },
  },
]);

export const styledRight = style([
  sprinkles({
    minHeight: `100vh`,
    padding: {
      mobile: `small`,
      tablet: `largest`,
    },
  }),
  {
    '@media': {
      'screen and (min-width: 0px)': {
        width: `calc(100vw - 16px)`,
      },
      'screen and (min-width: 768px)': {
        width: `calc(100vw - 32px)`,
      },
      'screen and (min-width: 992px)': {
        width: `calc(100vw - 120px)`,
      },
      'screen and (min-width: 1200px)': {
        width: `calc(100vw - 380px)`,
      },
    },
    backgroundColor: vars.bluePrint.color.slate5,
  },
]);

export const styledCard = style([
  sprinkles({
    width: {
      mobile: `100%`,
      tablet: `50vw`,
    },
  }),
]);
