import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';

export const styledBase = style([
  sprinkles({
    display: `flex`,
    flexDirection: `column`,
    justifyContent: 'center',
    alignItems: `center`,
    color: {
      lightMode: `slate12`,
      darkMode: `slateDark12`,
    },
    background: {
      lightMode: `slate1`,
      darkMode: `slateDark1`,
    },
  }),
  {
    minHeight: `100vh`,
  },
]);
