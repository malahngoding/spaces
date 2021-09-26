import { keyframes, styled } from '@config/stitches.config';

const bounceStyledLink = keyframes({
  '0%': {
    borderBottom: `2px solid $cyan8`,
  },
  '25%': {
    borderBottom: `2px solid $slate12`,
  },
  '50%': {
    borderBottom: `2px solid $cyan8`,
  },
  '100%': {
    borderBottom: `2px solid $cyan8`,
  },
});

export const StyledLink = styled(`a`, {
  marginY: `$xs`,
  padding: `0`,
  textDecoration: `none`,
  color: `$slate10`,
  borderBottom: `2px solid $slate4`,
  '&:hover': {
    color: `$cyan8`,
    borderBottom: `2px solid $cyan8`,
    animation: `${bounceStyledLink} 200ms`,
  },
  '&:visited': {
    color: `$slate10`,
  },
});
