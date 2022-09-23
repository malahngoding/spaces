import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme/index.css';

export const styledBase = style([
  sprinkles({
    display: `flex`,
    flexDirection: `column`,
    justifyContent: 'center',
    alignItems: `center`,
    width: {
      mobile: `100vw`,
      tablet: `calc(100vw - 100px)`,
    },
  }),
  {
    color: vars.bluePrint.color.slate12,
    backgroundColor: vars.bluePrint.color.slate1,
  },
]);
