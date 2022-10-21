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
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
  }),
  {
    borderColor: vars.bluePrint.color.slate10,
    color: vars.bluePrint.color.slate12,
    backgroundColor: vars.bluePrint.color.slate1,
    ':hover': {
      border: `2px solid ${vars.bluePrint.color.slate12}`,
      cursor: `pointer`,
    },
  },
]);

export const styledBaseButtonSmall = style([
  sprinkles({
    fontSize: `small`,
    fontWeight: 700,
    paddingX: `small`,
    paddingY: `small`,
    borderWidth: `2px`,
    borderTopStyle: `solid`,
    borderBottomStyle: `solid`,
    borderLeftStyle: `solid`,
    borderRightStyle: `solid`,
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
  }),
  {
    borderColor: vars.bluePrint.color.slate10,
    color: vars.bluePrint.color.slate12,
    backgroundColor: vars.bluePrint.color.slate1,
    ':hover': {
      border: `2px solid ${vars.bluePrint.color.slate12}`,
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
