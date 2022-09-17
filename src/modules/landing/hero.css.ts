/**
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme/index.css';
/**
 */
export const styledHero = style([
  sprinkles({
    width: `calc(100vw - 100px)`,
  }),
  {
    height: `calc(100vh - 64px)`,
    backgroundColor: vars.bluePrint.color.slate5,
  },
]);
