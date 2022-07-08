/* 3rd Party Modules Import */
import { Sandpack } from '@codesandbox/sandpack-react';
import { useTheme } from 'next-themes';
/* Internal Modules Import */
import { Box } from '@components/design/box';
/* Types Import */
/**
 * Props Declaration
 * @private
 */
/**
 * Component Declaration
 * @public
 */
export const SandpackCodeInstead = () => {
  const { theme } = useTheme();

  return (
    <>
      <Box>UC</Box>
      <Sandpack template="react" theme={theme === 'dark' ? 'dark' : 'light'} />
    </>
  );
};
/**
 * Internal Component Declaration
 * @private
 */
