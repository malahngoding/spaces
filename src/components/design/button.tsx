import { styled } from '@config/stitches.config';

export const Button = styled(`button`, {
  border: `none`,
  paddingY: `$xs`,
  paddingX: `$sm`,
  fontSize: `$display`,
  fontWeight: `$bold`,
  color: `$mauve1`,
  '&:hover': {
    cursor: `pointer`,
  },
  variants: {
    alternative: {
      primary: {
        border: `2px solid $mauve12`,
        backgroundColor: `$blue3`,
        borderRadius: `$sm`,
        boxShadow: `0px 5px 0px #18191F`,
        boxSizing: `border-box`,
        '&:hover': {
          boxShadow: `0px 3px 0px #18191F`,
          backgroundColor: `$blue3`,
        },
      },
      secondary: {
        border: `2px solid $mauve12`,
        backgroundColor: `$green3`,
        borderRadius: `$sm`,
        boxShadow: `0px 5px 0px #18191F`,
        boxSizing: `border-box`,
        '&:hover': {
          boxShadow: `0px 3px 0px #18191F`,
          backgroundColor: `$green3`,
        },
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
