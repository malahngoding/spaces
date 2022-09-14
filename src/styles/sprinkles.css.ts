/**
 */
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { colors } from './vars-colors';
import { space } from './vars-spaces';
import { typography } from './vars-typography';
/**
 */
const hoverProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    focus: { selector: '&:focus' },
  },
  defaultCondition: 'default',
  properties: {},
});
const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    position: [`fixed`],
    display: [`none`, `flex`, `block`, `inline`, `grid`],
    gridTemplateColumns: [`1fr 1fr 1fr`, `1fr 1fr`, `1fr`],
    gap: space,
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
    fontSize: typography,
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    border: space,
    borderTopStyle: [`solid`, `dotted`],
    borderBottomStyle: [`solid`, `dotted`],
    borderLeftStyle: [`solid`, `dotted`],
    borderRightStyle: [`solid`, `dotted`],
    borderWidth: [`2px`, `4px`, `0.1875rem`],
  },
  shorthands: {
    padding: [`paddingTop`, `paddingBottom`, `paddingLeft`, `paddingRight`],
    paddingX: [`paddingLeft`, `paddingRight`],
    paddingY: [`paddingTop`, `paddingBottom`],
    margin: [`marginTop`, `marginBottom`, `marginLeft`, `marginRight`],
    marginX: [`marginLeft`, `marginRight`],
    marginY: [`marginTop`, `marginBottom`],
    placeItems: [`justifyContent`, `alignItems`],
  },
});
/**
 */
const colorProperties = defineProperties({
  conditions: {
    lightMode: { selector: 'html.light &' },
    darkMode: { selector: 'html.dark &' },
  },
  defaultCondition: ['lightMode'],
  properties: {
    color: colors,
    background: colors,
    borderColor: colors,
  },
});
/**
 */
export const sprinkles = createSprinkles(
  hoverProperties,
  responsiveProperties,
  colorProperties,
);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
