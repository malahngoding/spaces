import { styled } from '@config/stitches.config';

export const Box = styled(`div`, {});

export const AllCenterColumnBox = styled(Box, {
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
});
