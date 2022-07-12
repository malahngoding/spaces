/** 3rd Party Modules Import */
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
/** Internal Modules Import */
import { Button } from '@components/design/button';
import { Nav } from '@components/design/nav';
import { Box } from '@components/design/box';
/** Types Import */
import { ReactElement } from 'react';

const DynamicBarLazy = dynamic(
  (): any =>
    import(`@components/navigations/dynamic-bar`).then((mod) => mod.DynamicBar),
  { ssr: false },
);
/**
 * Main Component Declaration
 *
 */
interface NavigationBarProps {}
export const NavigationBar = (props: NavigationBarProps): ReactElement => {
  const t = useTranslations(`Menu`);

  const NavItems = [
    { title: t(`learn`), url: `/learn` },
    { title: t(`camps`), url: `/camps` },
    { title: t(`aboutUs`), url: `/about-us` },
  ];

  return (
    <>
      <Nav>
        <Box
          css={{
            borderRight: `6px solid $slate1`,
            height: `47px`,
          }}
        />
        {NavItems.map((item) => (
          <Link href={item.url} passHref key={item.url}>
            <Button
              as="a"
              alternative={
                item.url === `/auth/connect` ? `primary` : `ghostAlternative`
              }
              css={{ marginRight: `$xs`, fontSize: `$xs` }}
            >
              {item.title}
            </Button>
          </Link>
        ))}
        <DynamicBarLazy />
      </Nav>
    </>
  );
};
/**
 * Internal Component Declaration
 *
 */
