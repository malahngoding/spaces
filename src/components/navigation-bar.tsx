import Link from 'next/link';
import { Button, SmallButton } from '@components/design/button';
import { Nav } from '@components/design/nav';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'tabler-icons-react';

export const NavigationBar = () => {
  const { theme, setTheme } = useTheme();

  const NavItems = [
    { title: `Learn`, url: `/learn` },
    { title: `Camps`, url: `/camps` },
    { title: `Labs`, url: `/labs` },
    { title: `About Us`, url: `/about-us` },
    { title: `Register`, url: `/register` },
  ];
  return (
    <>
      <Nav>
        {NavItems.map((item) => (
          <Link href={item.url} passHref key={item.url}>
            <Button
              alternative={item.url === `/register` ? `primary` : `ghost`}
              css={{ marginLeft: `$xs` }}
            >
              {item.title}
            </Button>
          </Link>
        ))}
        <SmallButton
          onClick={() => {
            setTheme(theme === `dark` ? `light` : `dark`);
          }}
          alternative="ghost"
        >
          {theme === `dark` ? <Moon /> : <Sun />}
        </SmallButton>
      </Nav>
    </>
  );
};
