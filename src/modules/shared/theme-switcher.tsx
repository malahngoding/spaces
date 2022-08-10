/**
 */
import { useEffect, useState } from 'react';
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
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  );
};

export default ThemeSwitcher;
