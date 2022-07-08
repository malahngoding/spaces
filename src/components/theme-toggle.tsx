/* 3rd Party Modules Import */
import { UilSun, UilMoon } from '@iconscout/react-unicons';
import { useTheme } from 'next-themes';
/* Internal Modules Import */
import { SmallButton } from '@components/design/button';
/* Types Import */
/**
 * Component Props Declaration
 * @private
 */
/**
 * Component Declaration
 * @public
 */
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
      aria-label="Click to toggle theme"
    >
      {theme !== `light` ? <UilSun /> : <UilMoon />}
    </SmallButton>
  );
};
/**
 * Internal Component Declaration
 * @private
 */
