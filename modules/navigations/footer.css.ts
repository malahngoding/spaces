/**
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme/index.css';
/**
 *
 */
export const styledFooter = style([
  sprinkles({
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,
    alignItems: `flex-start`,
    padding: `regular`,
    borderWidth: `0.1875rem`,
    borderTopStyle: `solid`,
    width: {
      mobile: `100vw`,
      tablet: `calc(100vw - 100px)`,
    },
  }),
  {
    borderColor: vars.bluePrint.color.slate6,
    backgroundColor: vars.bluePrint.color.slate1,
  },
]);

export const styledWall = style([
  sprinkles({
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,
    alignItems: `flex-start`,
    padding: `none`,
    borderWidth: `0.1875rem`,
    fontSize: `xsmall`,
  }),
]);

export const styledSocialMediaWrapper = style([
  sprinkles({
    display: `flex`,
    flexDirection: {
      mobile: `column`,
      tablet: `row`,
    },
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
  }),
]);

export const styledSocialMediaLink = style([
  sprinkles({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    marginRight: {
      mobile: `none`,
      tablet: `regular`,
    },
  }),
]);
