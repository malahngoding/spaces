/**
 */
import { sprinkles } from '../../styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme/index.css';
/**
 *
 */
export const styledPageWrapper = style([
  sprinkles({
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    paddingY: `regular`,
    paddingX: `regular`,
  }),
  {
    backgroundColor: vars.bluePrint.color.slate1,
  },
]);

export const styledMain = style([sprinkles({})]);
