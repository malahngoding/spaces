/** 3rd Party Modules Import */
import Link from 'next/link';
/** Internal Modules Import */
import { Box } from '@components/design/box';
/** Types Import */
import type { ReactElement } from 'react';
import { InputTextArea } from '@components/design/input';
import { Button } from '@components/design/button';

/**
 * Main Component Declaration
 *
 */

export const OnBoardingReason = (): ReactElement => {
  return (
    <Box>
      <InputTextArea rows={4} />
      <Link href="/" passHref>
        <Button css={{ marginY: `$sm` }}>Submit</Button>
      </Link>
    </Box>
  );
};
/**
 * Internal Component Declaration
 *
 */
