import Link from 'next/link';
import { Button } from '@components/design/button';
import { Nav } from '@components/design/nav';

export const NavigationBar = () => {
  const NavItems = [
    { title: `Study`, url: `/study` },
    { title: `Guide`, url: `/study/guide` },
    { title: `Snippets`, url: `/study/snippets` },
    { title: `Camps`, url: `/camps` },
    { title: `Labs`, url: `/camps/labs` },
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
      </Nav>
    </>
  );
};
