import { Sun, Moon } from 'tabler-icons-react';
import { SmallButton } from '@components/design/button';
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <SmallButton
      onClick={() => {
        setTheme(theme === `dark` ? `light` : `dark`);
      }}
      alternative="secondary"
      css={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      {theme !== `light` ? <Moon /> : <Sun />}
    </SmallButton>
  );
};
