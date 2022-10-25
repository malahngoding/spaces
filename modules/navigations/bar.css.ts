/**
 */
import { sprinkles } from '../../styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme/index.css';
/**
 */
export const styledNavbar = style([
  sprinkles({
    position: `fixed`,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    padding: `regular`,
    borderWidth: `0.1875rem`,
    borderBottomStyle: `solid`,
    top: `none`,
    height: `64px`,
    width: {
      mobile: `100vw`,
      tablet: `calc(100vw - 100px)`,
    },
  }),
  {
    borderColor: vars.bluePrint.color.slate6,
    backgroundColor: vars.bluePrint.color.slate1,
    zIndex: 1000,
  },
]);

export const styledLeft = style([
  sprinkles({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
  }),
]);

export const styledMenuGroup = style([
  sprinkles({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    marginLeft: {
      mobile: `smallest`,
      tablet: `largest`,
    },
  }),
]);

export const styledRight = style([
  sprinkles({
    display: {
      mobile: `none`,
      tablet: `flex`,
    },
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
  }),
]);

export const styledNavLink = style([
  sprinkles({
    marginX: `large`,
    borderBottomStyle: `solid`,
    borderWidth: `0.1875rem`,
  }),
  {
    borderColor: vars.bluePrint.color.slate6,
    ':hover': {
      cursor: `pointer`,
      borderBottom: `0.1875rem solid ${vars.bluePrint.color.slate10}`,
    },
    selectors: {
      '&:nth-child(1)': {
        display: `none`,
        '@media': {
          'screen and (min-width: 720px)': {
            display: `block`,
          },
        },
      },
      '&:nth-child(2)': {
        display: `none`,
        '@media': {
          'screen and (min-width: 720px)': {
            display: `block`,
          },
        },
      },
      '&:nth-child(3)': {
        display: `none`,
        '@media': {
          'screen and (min-width: 860px)': {
            display: `block`,
          },
        },
      },
      '&:nth-child(4)': {
        display: `none`,
        '@media': {
          'screen and (min-width: 860px)': {
            display: `block`,
          },
        },
      },
    },
  },
]);

export const styledNavLinkMore = style([
  sprinkles({
    marginX: `large`,
    paddingX: `small`,
    paddingY: `smaller`,
    borderAllStyle: `none`,
    borderWidth: `0.1875rem`,
  }),
  {
    borderColor: vars.bluePrint.color.slate6,
    ':hover': {
      cursor: `pointer`,
      borderBottom: `0.1875rem solid ${vars.bluePrint.color.slate10}`,
    },
    display: `block`,
    '@media': {
      'screen and (min-width: 860px)': {
        display: `none`,
      },
    },
  },
]);
