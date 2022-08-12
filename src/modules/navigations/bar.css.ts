/**
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
/**
 */
export const styledNavbar = style([
  {
    position: `fixed`,
    top: 0,
    width: `100vw`,
    borderBottom: `1px solid white`,
  },
  sprinkles({
    background: {
      darkMode: `slateDark1`,
      lightMode: `slate1`,
    },
  }),
]);
