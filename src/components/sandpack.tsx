import { Sandpack } from '@codesandbox/sandpack-react';
import { useTheme } from 'next-themes';

import { Box } from '@components/design/box';

export const SandpackCodeInstead = () => {
  const { theme } = useTheme();

  return (
    <>
      <Sandpack template="react" theme={theme === 'dark' ? 'dark' : 'light'} />
    </>
  );
};
