/**
 *
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme/index.css';
/**
 *
 */
export const styledSideNav = style([
  sprinkles({
    position: `fixed`,
    top: `none`,
    right: `none`,
    borderLeftStyle: `solid`,
    borderWidth: `0.1875rem`,
    height: `100vh`,
    width: `100px`,
    display: {
      mobile: `none`,
      tablet: `flex`,
    },
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `center`,
  }),
  {
    borderColor: vars.bluePrint.color.slate6,
    backgroundColor: vars.bluePrint.color.slate1,
  },
]);

export const styledVersion = style([
  sprinkles({
    margin: `small`,
    fontSize: `smaller`,
    fontWeight: 300,
  }),
  {
    writingMode: `vertical-rl`,
  },
]);

export const styledSideWidgets = style([
  sprinkles({
    marginTop: `largest`,
    display: `grid`,
    gap: `regular`,
  }),
]);
