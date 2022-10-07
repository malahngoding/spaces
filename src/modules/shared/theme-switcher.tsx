/**
 */
import { Fragment, useEffect, useState } from 'react';
import { Gear, Moon, Sun } from '@components/icon';
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
            <Sun />
          </SmallButton>
        );
      case 'dark':
        return (
          <SmallButton onClick={() => setTheme('light')}>
            <Moon />
          </SmallButton>
        );
      case 'system':
        return (
          <SmallButton onClick={() => setTheme('dark')}>
            <Gear />
          </SmallButton>
        );
      default:
        return (
          <SmallButton onClick={() => setTheme('dark')}>
            <Gear />
          </SmallButton>
        );
    }
  };

  return <Fragment>{loadComponent(theme)}</Fragment>;
};

export default ThemeSwitcher;
