import Link from 'next/link';
import Image from 'next/image';
import { UilBars, UilMultiply } from '@iconscout/react-unicons';
import { useLockBodyScroll, useToggle } from 'react-use';

import { styled } from '@config/stitches.config';
import { Button } from '@components/design/button';
import { useDashNav } from '@store/navigation-store';
import { Box } from '@components/design/box';
import { useAppStore } from '@store/app-store';
import { NavigationSheets } from '@components/navigations/sheets';

const SideNav = styled(`div`, {
  borderRight: `0`,
  borderBottom: `1px solid $slate6`,
  height: `83px`,
  left: `0`,
  position: `fixed`,
  top: `0`,
  transition: `transform 0.1s`,
  width: `100vh`,
  zIndex: `100001`,
  backgroundColor: `$slate1`,
  '@sm': {
    zIndex: `99999`,
    borderRight: `1px solid $slate6`,
    borderBottom: `0`,
    width: `80px`,
    height: `100vh`,
  },
  '@lg': {
    width: `20vw`,
    height: `100vh`,
  },
});

const NavWrapper = styled(`div`, {
  display: `flex`,
  flexDirection: `row`,
  width: `100vw`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `$sm`,
  '@sm': {
    minHeight: `100vh`,
    width: `100%`,
    padding: `0`,
    flexDirection: `column`,
  },
});

const Menu = styled(`div`, {
  width: `48px`,
  height: `48px`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  backgroundColor: `$slate1`,
  '@sm': {
    width: `64px`,
    height: `64px`,
  },
  '@lg': {
    width: `64px`,
    height: `64px`,
  },
});

const VersionTag = styled(`div`, {
  padding: `0.5rem`,
  fontFamily: `$mono`,
  fontSize: `$xxs`,
  position: `fixed`,
  right: `$xs`,
  bottom: `$xs`,
  zIndex: `100000`,
  backgroundColor: `$slate1`,
  display: `none`,
  backdropFilter: `blur(9px)`,
  webkitBackdropFilter: `blur(9px)`,
  '@lg': {
    display: `block`,
  },
});

const allDesignPages = [
  { url: `/brand`, title: `Instead` },
  { url: `/brand/colors`, title: `Color` },
  { url: `/brand/typography`, title: `Typography` },
  { url: `/brand/button`, title: `Button` },
  { url: `/brand/input`, title: `Input` },
];

export const DesignNavigation = () => {
  const [locked, toggleLocked] = useToggle(false);

  const shown = useDashNav((state) => state.shown);
  const insteadVersion = useAppStore((state) => state.insteadVersion);

  const toggleNav = useDashNav((state) => state.toggleNav);

  const handleNavigation = (): void => {
    toggleNav();
  };

  const status = `Malah Ngoding Instead v.${insteadVersion}`;

  useLockBodyScroll(locked);

  return (
    <>
      <SideNav>
        <NavWrapper>
          <Menu
            css={{
              alignSelf: `center`,
              '@lg': {
                alignSelf: `self-start`,
              },
            }}
          >
            <Link href="/" passHref>
              <a>
                <Image
                  alt="Malah Ngoding Logo"
                  src="/static/favicons/android-chrome-96x96.png"
                  height={48}
                  width={48}
                />
              </a>
            </Link>
          </Menu>
          {!shown && (
            <Box
              css={{
                display: `none`,
                '@sm': {
                  display: `block`,
                },
              }}
            >
              {allDesignPages.map((item) => (
                <Menu key={item.url}>
                  <Link href={item.url} passHref>
                    <Button
                      alternative="ghost"
                      type="button"
                      css={{ display: `none`, '@lg': { display: `block` } }}
                    >
                      {item.title}
                    </Button>
                  </Link>
                </Menu>
              ))}
            </Box>
          )}
          <Menu
            css={{
              alignSelf: `center`,
              '@lg': {
                alignSelf: `self-start`,
              },
            }}
          >
            <Button
              alternative="ghost"
              type="button"
              onClick={handleNavigation}
            >
              {shown ? <UilMultiply /> : <UilBars />}
            </Button>
          </Menu>
        </NavWrapper>
      </SideNav>
      <VersionTag>{status}</VersionTag>
      {shown ? <NavigationSheets toggleLocked={toggleLocked} /> : <></>}
    </>
  );
};
