import { styled, keyframes } from '@config/stitches.config';

const bouncePrimary = keyframes({
  '0%': { boxShadow: `0px 0px 0px #18191F` },
  '50%': { boxShadow: `0px 2px 0px #18191F` },
  '100%': { boxShadow: `0px 4px 0px #18191F` },
});

export const Button = styled(`button`, {
  border: `none`,
  paddingY: `$xs`,
  paddingX: `$sm`,
  fontSize: `$display`,
  fontWeight: `$bold`,
  color: `$slate12`,
  '&:hover': {
    cursor: `pointer`,
  },
  variants: {
    alternative: {
      primary: {
        border: `2px solid $slate12`,
        backgroundColor: `$cyan8`,
        boxSizing: `border-box`,
        borderRadius: `$sm`,
        '&:hover': {
          boxShadow: `0px 4px 0px #18191F`,
          animation: `${bouncePrimary} 200ms`,
        },
      },
      secondary: {
        border: `2px solid $slate12`,
        color: `$slate12`,
        backgroundColor: `$slate1`,
        boxSizing: `border-box`,
        borderRadius: `$sm`,
        '&:hover': {
          backgroundColor: `$slate1`,
        },
      },
      tertiary: {
        backgroundColor: `$slate12`,
        border: `2px solid $slate12`,
        color: `$slate1`,
        boxSizing: `border-box`,
        borderRadius: `$sm`,
      },
      ghost: {
        color: `inherit`,
        backgroundColor: `inherit`,
      },
    },
  },
  defaultVariants: {
    alternative: `primary`,
  },
});

export const SmallButton = styled(Button, {
  paddingY: `4px`,
  paddingX: `12px`,
  fontSize: `$xs`,
  fontWeight: `$bold`,
});
