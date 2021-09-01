import Link from 'next/link';
import { Button } from '@components/design/button';
import { Nav } from '@components/design/nav';

export const NavigationBar = () => {
  const NavItems = [
    { title: `Study`, url: `/study` },
    { title: `Camps`, url: `/camps` },
    { title: `About Us`, url: `/about-us` },
  ];
  return (
    <>
      <Nav>
        {NavItems.map((item) => (
          <Link href={item.url} passHref key={item.url}>
            <Button alternative="ghost">{item.title}</Button>
          </Link>
        ))}
      </Nav>
    </>
  );
};
