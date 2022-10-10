/**
 */
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from './theme/index.css';
/**
 */
const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 992px)' },
    largescreen: { '@media': 'screen and (min-width: 1200px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    top: vars.space,
    bottom: vars.space,
    left: vars.space,
    right: vars.space,
    width: [
      `100vw`,
      `90vw`,
      `50vw`,
      `64px`,
      `100px`,
      `100%`,
      `calc(100vw - 100px)`,
    ],
    minHeight: [`100vh`, `90vh`, `50vh`, `64px`, `100px`, `100%`],
    height: [`100vh`, `90vh`, `50vh`, `64px`, `100px`, `100%`],
    position: [`fixed`, `relative`, `absolute`],
    display: [`none`, `flex`, `block`, `inline`, `grid`],
    gridTemplateColumns: [`1fr 1fr 1fr`, `1fr 1fr`, `2fr 1fr`, `1fr`],
    gap: vars.space,
    flexWrap: [`wrap`],
    flexDirection: [`row`, `column`],
    justifyContent: [
      `stretch`,
      `flex-start`,
      `center`,
      `flex-end`,
      `space-around`,
      `space-between`,
    ],
    alignItems: [`stretch`, `flex-start`, `center`, `flex-end`],
    fontSize: vars.fontSizes,
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    border: vars.space,
    borderTopStyle: [`solid`, `dotted`],
    borderBottomStyle: [`solid`, `dotted`],
    borderLeftStyle: [`solid`, `dotted`],
    borderRightStyle: [`solid`, `dotted`],
    borderWidth: [`2px`, `4px`, `0.1875rem`],
    borderRadius: vars.radii,
    fontFamily: vars.family,
  },
  shorthands: {
    padding: [`paddingTop`, `paddingBottom`, `paddingLeft`, `paddingRight`],
    paddingX: [`paddingLeft`, `paddingRight`],
    paddingY: [`paddingTop`, `paddingBottom`],
    margin: [`marginTop`, `marginBottom`, `marginLeft`, `marginRight`],
    marginX: [`marginLeft`, `marginRight`],
    marginY: [`marginTop`, `marginBottom`],
    borderAllStyle: [
      `borderTopStyle`,
      `borderRightStyle`,
      `borderBottomStyle`,
      `borderLeftStyle`,
    ],
    placeItems: [`justifyContent`, `alignItems`],
  },
});
/**
 */
export const sprinkles = createSprinkles(responsiveProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
