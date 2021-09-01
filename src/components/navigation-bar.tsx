import Link from 'next/link';
import { Nav } from './design/nav';

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
            <p className="nav-button">{item.title}</p>
          </Link>
        ))}
      </Nav>
      <style jsx>{`
        .nav-button {
          margin-right: 2em;
          font-weight: 700;
        }
        .nav-button:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};
