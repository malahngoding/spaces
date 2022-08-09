import { styled } from '@config/stitches.config';
import {
  bouncePrimary,
  bounceGhostAlternative,
} from '@components/design/animation';

export const PlainButton = styled(`button`, {
  fontFamily: `$brand`,
  border: `none`,
  background: `none`,
  '&:hover': {
    cursor: `pointer`,
  },
});

export const Button = styled(`button`, {
  fontFamily: `$brand`,
  border: `none`,
  paddingY: `$xxs`,
  paddingX: `$md`,
  fontSize: `$display`,
  fontWeight: `$bold`,
  color: `$slate12`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  '&:hover': {
    cursor: `pointer`,
  },
  variants: {
    active: {
      true: {
        borderTop: `4px solid $slate1`,
        borderBottom: `4px solid $cyan8`,
      },
    },
    alternative: {
      primary: {
        border: `2px solid $slate12`,
        backgroundColor: `$cyan8`,
        boxSizing: `border-box`,
        '&:hover': {
          boxShadow: `5px 5px`,
          animation: `${bouncePrimary} 200ms`,
        },
      },
      secondary: {
        border: `2px solid $slate12`,
        color: `$slate12`,
        backgroundColor: `$slate1`,
        boxSizing: `border-box`,
        '&:hover': {
          backgroundColor: `$slate1`,
        },
      },
      tertiary: {
        backgroundColor: `$slate12`,
        border: `2px solid $slate12`,
        color: `$slate1`,
        boxSizing: `border-box`,
      },
      invert: {
        border: `2px solid $slate12`,
        backgroundColor: `$crimson8`,
        boxSizing: `border-box`,
        '&:hover': {
          boxShadow: `5px 5px`,
          animation: `${bouncePrimary} 200ms`,
        },
      },
      ghost: {
        color: `inherit`,
        backgroundColor: `inherit`,
      },
      ghostAlternative: {
        color: `inherit`,
        backgroundColor: `inherit`,
        borderBottom: `4px solid $slate1`,
        borderTop: `4px solid $slate1`,
        '&:hover': {
          borderTop: `4px solid $slate1`,
          borderBottom: `4px solid $cyan8`,
          animation: `${bounceGhostAlternative} 200ms`,
        },
      },
    },
  },
  defaultVariants: {
    alternative: `primary`,
  },
});

export const SmallButton = styled(Button, {
  fontFamily: `$brand`,
  paddingY: `4px`,
  paddingX: `12px`,
  fontSize: `$xs`,
  fontWeight: `$bold`,
});
