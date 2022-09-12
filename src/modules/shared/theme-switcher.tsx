/**
 */
import { useEffect, useState } from 'react';
import { Button } from '@components/button/base';
import type { ReactElement } from 'react';
import { useTheme } from 'next-themes';
/**
 */
const ThemeSwitcher = (): ReactElement => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <p>Loading...</p>;

  return (
    <div>
      The current theme is: {theme}
      <div>
        <Button onClick={() => setTheme('light')}>Light Mode</Button>
        <Button onClick={() => setTheme('dark')}>Dark Mode</Button>
        <Button onClick={() => setTheme('system')}>System Mode</Button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
