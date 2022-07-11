/** 3rd Party Modules Import */
import Link from 'next/link';
/** Internal Modules Import */
import { Box } from '@components/design/box';
/** Types Import */
import type { ReactElement } from 'react';

/**
 * Main Component Declaration
 *
 */

export const OnBoardingReason = (): ReactElement => {
  return (
    <Box>
      <Link href="/" passHref>
        <Box>OnBoardingReason</Box>
      </Link>
    </Box>
  );
};
/**
 * Internal Component Declaration
 *
 */
