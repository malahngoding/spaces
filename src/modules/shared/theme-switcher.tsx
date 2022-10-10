/**
 */
import { Fragment, useEffect, useState } from 'react';
import { GearIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import type { ReactElement } from 'react';
import { SmallButton } from '@components/button/base';
import { useTheme } from 'next-themes';
/**
 */
const ThemeSwitcher = (): ReactElement => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <p>Loading...</p>;

  const loadComponent = (theme: string | undefined) => {
    switch (theme) {
      case 'light':
        return (
          <SmallButton onClick={() => setTheme('system')}>
            <SunIcon />
          </SmallButton>
        );
      case 'dark':
        return (
          <SmallButton onClick={() => setTheme('light')}>
            <MoonIcon />
          </SmallButton>
        );
      case 'system':
        return (
          <SmallButton onClick={() => setTheme('dark')}>
            <GearIcon />
          </SmallButton>
        );
      default:
        return (
          <SmallButton onClick={() => setTheme('dark')}>
            <GearIcon />
          </SmallButton>
        );
    }
  };

  return <Fragment>{loadComponent(theme)}</Fragment>;
};

export default ThemeSwitcher;
