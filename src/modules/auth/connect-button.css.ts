import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';

export const styledConnectButton = style([
  sprinkles({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    width: `100%`,
    height: `100%`,
  }),
]);
