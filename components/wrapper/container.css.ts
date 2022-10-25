/**
 */
import { sprinkles } from '../../styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme/index.css';
/**
 *
 */
export const styledContainer = style([
  sprinkles({
    paddingY: `regular`,
    paddingX: `regular`,
  }),
  {
    backgroundColor: vars.bluePrint.color.slate1,
  },
]);
