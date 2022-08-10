/*
 */
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px',
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});

const sweetie16 = {
  sweet1: '#1a1c2c',
  sweet2: '#5d275d',
  sweet3: '#b13e53',
  sweet4: '#ef7d57',
  sweet5: '#ffcd75',
  sweet6: '#a7f070',
  sweet7: '#38b764',
  sweet8: '#257179',
  sweet9: '#29366f',
  sweet10: '#3b5dc9',
  sweet11: '#41a6f6',
  sweet12: '#73eff7',
  sweet13: '#f4f4f4',
  sweet14: '#94b0c2',
  sweet15: '#566c86',
  sweet16: '#333c57',
};

const slate = {
  slate1: '#fbfcfd',
  slate2: '#f8f9fa',
  slate3: '#f1f3f5',
  slate4: '#eceef0',
  slate5: '#e6e8eb',
  slate6: '#dfe3e6',
  slate7: '#d7dbdf',
  slate8: '#c1c8cd',
  slate9: '#889096',
  slate10: '#7e868c',
  slate11: '#687076',
  slate12: '#11181c',
};

const slateDark = {
  slateDark1: '#11181c',
  slateDark2: '#687076',
  slateDark3: '#7e868c',
  slateDark4: '#889096',
  slateDark5: '#c1c8cd',
  slateDark6: '#d7dbdf',
  slateDark7: '#dfe3e6',
  slateDark8: '#e6e8eb',
  slateDark9: '#eceef0',
  slateDark10: '#f1f3f5',
  slateDark11: '#f8f9fa',
  slateDark12: '#fbfcfd',
};

const colors = { ...sweetie16, ...slate, ...slateDark };

const colorProperties = defineProperties({
  conditions: {
    lightMode: { '@media': '(prefers-color-scheme: light)' },
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: ['lightMode'],
  properties: {
    color: colors,
    background: colors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
