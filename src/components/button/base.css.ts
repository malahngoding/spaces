/**
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
/**
 *
 */
export const styledBaseButton = style([
  sprinkles({
    fontSize: `small`,
    fontWeight: 700,
    paddingX: `large`,
    paddingY: `medium`,
    borderWidth: `2px`,
    borderTopStyle: `solid`,
    borderBottomStyle: `solid`,
    borderLeftStyle: `solid`,
    borderRightStyle: `solid`,
    borderColor: {
      lightMode: `slate12`,
      darkMode: `slateDark12`,
    },
    background: {
      lightMode: `slate1`,
      darkMode: `slateDark1`,
    },
    marginY: `small`,
  }),
  {
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
    paddingY: `medium`,
    borderWidth: `2px`,
    borderTopStyle: `solid`,
    borderBottomStyle: `solid`,
    borderLeftStyle: `solid`,
    borderRightStyle: `solid`,
    borderColor: {
      lightMode: `slate12`,
      darkMode: `slateDark12`,
    },
    background: {
      lightMode: `slate8`,
      darkMode: `slateDark8`,
    },
    marginY: `small`,
  }),
  {
    ':hover': {
      outline: `2px solid currentColor`,
      cursor: `pointer`,
    },
  },
]);
