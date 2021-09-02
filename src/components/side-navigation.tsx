import Link from 'next/link';
import Image from 'next/image';

import { IconMenu } from '@components/icons/menu';
import { styled } from '@config/stitches.config';
import { Button } from '@components/design/button';
import { useDashNav } from '@store/navigation-store';
import { SubTitle } from '@components/design/typography';
import { Box } from '@components/design/box';

const SideNav = styled(`div`, {
  borderRight: `1px solid $mauve6`,
  height: `100vh`,
  left: `0`,
  position: `fixed`,
  top: `0`,
  transition: `transform 0.1s`,
  width: `140px`,
  zIndex: `99999`,
  backgroundColor: `$mauve1`,
});

const NavWrapper = styled(`div`, {
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `space-between`,
});

const Menu = styled(`div`, {
  width: `140px`,
  height: `140px`,
  borderRight: `1px solid $mauve6`,
  borderBottom: `1px solid $mauve6`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  backgroundColor: `$mauve1`,
  '&:hover': {
    backgroundColor: `$mauve9`,
  },
});

const VersionTag = styled(`div`, {
  fontFamily: `monospace`,
  position: `fixed`,
  left: `0`,
  bottom: `0`,
  zIndex: `100000`,
  transform: `rotate(90deg) translateX(-120px) translateY(36px)`,
  backgroundColor: `$mauve1`,
});

const NavigationCard = styled(`div`, {
  position: `fixed`,
  right: `0`,
  top: `0`,
  width: `calc(100% - 140px)`,
  height: `100vh`,
  zIndex: `100000`,
  background: `rgba(253, 252, 253, 0.80)`,
  boxShadow: `0 4px 30px rgba(26, 21, 35, 0.1)`,
  backdropFilter: `blur(9px)`,
  webkitBackdropFilter: `blur(9px)`,
  display: `flex`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
});

export const SideNavigation = () => {
  const shown = useDashNav((state) => state.shown);
  const toggleNav = useDashNav((state) => state.toggleNav);

  const handleNavigation = (): void => {
    toggleNav();
  };

  const navigationList = [
    { title: `Study`, url: `/study` },
    { title: `Camps`, url: `/study` },
    { title: `About Us`, url: `/study` },
    { title: `Study`, url: `/study` },
  ];

  const status = `Malah Ngoding Spaces v.0.0.1`;
  return (
    <>
      <SideNav>
        <NavWrapper>
          <Menu>
            <Link href="/" passHref>
              <a>
                <Image
                  alt="Malah Ngoding Logo"
                  src="/static/favicons/android-chrome-96x96.png"
                  height={64}
                  width={64}
                />
              </a>
            </Link>
          </Menu>
          <Menu>
            <Button
              alternative="ghost"
              type="button"
              onClick={handleNavigation}
            >
              <IconMenu width={32} />
            </Button>
          </Menu>
        </NavWrapper>
      </SideNav>
      <VersionTag>{status}</VersionTag>
      {shown ? (
        <NavigationCard>
          <Box>
            {navigationList.map((item) => (
              <Link href={item.url} key={item.url} passHref>
                <a>
                  <SubTitle>{item.title}</SubTitle>
                </a>
              </Link>
            ))}
          </Box>
        </NavigationCard>
      ) : (
        <></>
      )}
    </>
  );
};
