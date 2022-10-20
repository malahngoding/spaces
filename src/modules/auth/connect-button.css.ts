import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme/index.css';

export const styledConnectButton = style([
  sprinkles({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    width: `100%`,
    height: `100%`,
  }),
  {
    gap: vars.space.smallest,
  },
]);
