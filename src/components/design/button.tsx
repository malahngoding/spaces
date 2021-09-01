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
        border: `1px solid $cyan7`,
        backgroundColor: `$cyan9`,
        '&:hover': {
          backgroundColor: `$cyan10`,
          border: `1px solid $cyan8`,
        },
      },
      secondary: {
        border: `1px solid $crimson7`,
        backgroundColor: `$crimson9`,
        '&:hover': {
          backgroundColor: `$crimson10`,
          border: `1px solid $crimson8`,
        },
      },
      ghost: {
        color: `$mauve12`,
        backgroundColor: `rgba(255,255,255,100)`,
        border: `1px solid rgba(255,255,255,100)`,
        '&:hover': {
          border: `1px solid $mauve1`,
        },
      },
    },
  },
  defaultVariants: {
    alternative: `primary`,
  },
});
