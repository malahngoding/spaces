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
  }),
  {
    marginTop: `75px`,
    minHeight: `100vh`,
    width: `calc(100vw - 102px)`,
    color: vars.bluePrint.color.slate12,
    backgroundColor: vars.bluePrint.color.slate1,
  },
]);
