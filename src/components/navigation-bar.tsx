import Link from 'next/link';
import { Button } from '@components/design/button';
import { Nav } from '@components/design/nav';

export const NavigationBar = () => {
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
              alternative={
                item.url === `/register` ? `primary` : `ghostAlternative`
              }
              css={{ marginRight: `$xs` }}
            >
              {item.title}
            </Button>
          </Link>
        ))}
      </Nav>
    </>
  );
};
