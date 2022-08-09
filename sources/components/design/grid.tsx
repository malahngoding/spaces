import { styled } from '@config/stitches.config';

export const Grid = styled(`div`, {
  display: `inline-grid`,
  gridTemplateColumns: `1fr 1fr 1fr`,
  gridGap: `$sm`,
  backgroundColor: `$slate1`,
  color: `$slate12`,
});
