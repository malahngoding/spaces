/**
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme/index.css';
/**
 *
 */
export const styledBaseButton = style([
  sprinkles({
    fontSize: `small`,
    fontWeight: 700,
    paddingX: `large`,
    paddingY: `regular`,
    borderWidth: `2px`,
    borderTopStyle: `solid`,
    borderBottomStyle: `solid`,
    borderLeftStyle: `solid`,
    borderRightStyle: `solid`,
    marginY: `small`,
  }),
  {
    color: vars.bluePrint.color.slate1,
    backgroundColor: vars.bluePrint.color.slate12,
    ':hover': {
      outline: `2px solid currentColor`,
      cursor: `pointer`,
    },
  },
]);

export const styledBaseAltButton = style([
  sprinkles({
    fontSize: `small`,
    fontWeight: 700,
    paddingX: `large`,
    paddingY: `regular`,
    borderWidth: `2px`,
    borderTopStyle: `solid`,
    borderBottomStyle: `solid`,
    borderLeftStyle: `solid`,
    borderRightStyle: `solid`,
    marginY: `small`,
  }),
  {
    color: vars.bluePrint.color.slate1,
    backgroundColor: vars.bluePrint.color.slate12,
    ':hover': {
      outline: `2px solid currentColor`,
      cursor: `pointer`,
    },
  },
]);
