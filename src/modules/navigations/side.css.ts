/**
 *
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';

export const styledSideNav = style([
  {
    position: `fixed`,
    top: 0,
    right: 0,
    height: `100vh`,
    width: `100px`,
  },
  sprinkles({
    borderLeftStyle: `solid`,
    borderWidth: `2px`,
    borderColor: { lightMode: `slate5`, darkMode: `slateDark5` },
    background: {
      lightMode: `slate1`,
      darkMode: `slateDark1`,
    },
  }),
]);
