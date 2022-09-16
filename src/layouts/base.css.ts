import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme/index.css';

export const styledBase = style([
  sprinkles({
    display: `flex`,
    flexDirection: `column`,
    justifyContent: 'center',
    alignItems: `center`,
    padding: `large`,
    width: `calc(100vw - 100px)`,
  }),
  {
    marginTop: `64px`,
    minHeight: `100vh`,
    color: vars.bluePrint.color.slate12,
    backgroundColor: vars.bluePrint.color.slate1,
  },
]);
