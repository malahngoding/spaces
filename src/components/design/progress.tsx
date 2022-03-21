import * as ProgressPrimitive from '@radix-ui/react-progress';

import { styled } from '@config/stitches.config';

const StyledProgress = styled(ProgressPrimitive.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: `$slate6`,
  borderRadius: '99999px',
  height: 10,
});

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: '$slate10',
  height: '100%',
  transition: 'width 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});

// Exports
export const Progress = StyledProgress;
export const ProgressIndicator = StyledIndicator;
