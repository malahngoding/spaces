import { styled } from '@config/stitches.config';
import { bounceStyledLink } from '@components/design/animation';

export const StyledLink = styled(`a`, {
  marginY: `$xs`,
  padding: `0`,
  textDecoration: `none`,
  color: `$slate10`,
  borderBottom: `2px solid $slate4`,
  fontSize: `$sm`,
  '&:hover': {
    color: `$cyan8`,
    borderBottom: `2px solid $cyan8`,
    animation: `${bounceStyledLink} 200ms`,
  },
  '&:visited': {
    color: `$slate10`,
  },
});
