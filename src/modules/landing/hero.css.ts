/**
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme/index.css';
/**
 */
export const styledHero = style([
  sprinkles({
    position: `relative`,
    width: {
      mobile: `100vw`,
      tablet: `calc(100vw - 100px)`,
    },
  }),
  {
    height: `520px`,
    backgroundColor: vars.bluePrint.color.slate5,
  },
]);

export const heroVideo = style([
  sprinkles({
    width: `100vw`,
    height: `100%`,
    top: `none`,
    left: `none`,
  }),
  {
    objectFit: `cover`,
    zIndex: -1,
  },
]);

export const heroTitle = style([
  sprinkles({
    paddingX: `regular`,
    height: `100%`,
    width: `100%`,
    position: `absolute`,
    bottom: `none`,
    left: `none`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `flex-end`,
    alignItems: `flex-start`,
  }),
  {
    '@media': {
      'screen and (min-width: 0px)': {
        backgroundImage: `linear-gradient(to right, ${vars.bluePrint.transparent.left} 0% 100%, ${vars.bluePrint.transparent.right})`,
      },
      'screen and (min-width: 768px)': {
        backgroundImage: `linear-gradient(to right, ${vars.bluePrint.transparent.left}, ${vars.bluePrint.transparent.right})`,
      },
    },
  },
]);
