/**
 */
import { sprinkles } from '../../styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme/index.css';
/**
 */
export const styledNavigationSheet = style([
  sprinkles({
    position: `fixed`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,
    alignItems: `flex-start`,
    padding: `regular`,
    borderWidth: `0.1875rem`,
    borderBottomStyle: `solid`,
    top: `none`,
    width: {
      mobile: `100vw`,
      tablet: `calc(100vw - 100px)`,
    },
  }),
  {
    marginTop: `64px`,
    borderColor: vars.bluePrint.color.slate6,
    backgroundColor: vars.bluePrint.color.slate1,
    zIndex: 900,
  },
]);
