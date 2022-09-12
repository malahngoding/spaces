import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';

export const styledBase = style([
  sprinkles({
    display: `flex`,
    flexDirection: `column`,
    justifyContent: 'center',
    alignItems: `center`,
    padding: `large`,
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
    marginTop: `75px`,
    minHeight: `100vh`,
    width: `calc(100vw - 108px)`,
  },
]);
