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
  }),
  {
    backgroundColor: vars.bluePrint.color.slate1,
    borderColor: vars.bluePrint.color.slate12,
    bottom: `1rem`,
    left: `1rem`,
    padding: `1rem 2rem`,
    boxShadow: `6px 6px`,
    width: `50vw`,
    '@media': {
      'screen and (max-width: 768px)': {
        width: `90vw`,
      },
    },
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
