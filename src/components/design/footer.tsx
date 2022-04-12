import { styled } from '@config/stitches.config';

export const Footer = styled(`footer`, {
  backgroundColor: `$slate1`,
  color: `$slate12`,
  padding: `$md`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  borderTop: `1px solid $slate6`,
  background: `url("/static/images/footer.png") no-repeat`,
  backgroundPosition: `right bottom -80px`,
});
