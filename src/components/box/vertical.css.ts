/*
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';

export const styledVert = style([
  sprinkles({
    background: { darkMode: `slateDark5`, lightMode: `slate5` },
  }),
  {
    display: 'flex',
  },
]);
