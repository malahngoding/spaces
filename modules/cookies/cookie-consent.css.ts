/**
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme/index.css';
/**
 */
export const styledCookieConsent = style([
  sprinkles({
    position: `fixed`,
    borderTopStyle: `solid`,
    borderLeftStyle: `solid`,
    borderBottomStyle: `solid`,
    borderRightStyle: `solid`,
    borderWidth: `0.1875rem`,
    bottom: {
      mobile: `small`,
      tablet: `large`,
    },
    left: {
      mobile: `small`,
      tablet: `large`,
    },
    paddingX: `regular`,
    paddingY: `larger`,
    width: {
      mobile: `90vw`,
      tablet: `50vw`,
    },
  }),
  {
    backgroundColor: vars.bluePrint.color.slate1,
    borderColor: vars.bluePrint.color.slate12,
    boxShadow: `6px 6px ${vars.bluePrint.color.slate12}`,
  },
]);

export const styledButtonAction = style([
  sprinkles({
    display: `grid`,
    gap: `regular`,
    gridTemplateColumns: {
      mobile: `1fr`,
      tablet: `1fr 1fr`,
    },
  }),
]);
