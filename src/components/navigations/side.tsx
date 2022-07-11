/** 3rd Party Modules Import */
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UilBars, UilMultiply } from '@iconscout/react-unicons';
import { useLockBodyScroll, useToggle } from 'react-use';
import dynamic from 'next/dynamic';
/** Internal Modules Import */
import { styled } from '@config/stitches.config';
import { Button } from '@components/design/button';
import { useDashNav } from '@store/navigation-store';
import { useAppStore } from '@store/app-store';
import { NavigationSheets } from '@components/navigations/sheets';
import { Box } from '@components/design/box';
/** Types Import */
import type { ReactElement } from 'react';

const ServiceCheckerLazy = dynamic(
  (): any =>
    import(`@components/service-checker`).then((mod) => mod.ServiceChecker),
  { ssr: false },
);
/**
 * Main Component Declaration
 *
 */

export const SideNavigation = (): ReactElement => {
  const [locked, toggleLocked] = useToggle(false);

  const shown = useDashNav((state) => state.shown);
  const spacesVersion = useAppStore((state) => state.spacesVersion);
  const toggleNav = useDashNav((state) => state.toggleNav);

  const handleNavigation = (): void => {
    toggleLocked();
    toggleNav();
  };

  useLockBodyScroll(locked);

  const status = `Malah Ngoding Spaces v.${spacesVersion}`;
  return (
    <Fragment>
      <SideNav>
        <NavWrapper>
          <Menu
            css={{
              '&:hover': {
                backgroundColor: `$slate1`,
              },
            }}
          >
            <Link href="/" passHref>
              <Box as="a">
                <Image
                  alt="Malah Ngoding Logo"
                  src="/static/favicons/android-chrome-96x96.png"
                  height="64px"
                  width="64px"
                  priority={true}
                />
              </Box>
            </Link>
          </Menu>
          <Menu
            css={{
              '&:hover': {
                backgroundColor: `$slate1`,
              },
            }}
          >
            <Button
              alternative="ghost"
              type="button"
              onClick={handleNavigation}
              css={{
                '@sm': {
                  width: `100%`,
                  height: `100%`,
                },
              }}
              aria-label="Menu Button Toggle"
            >
              {shown ? <UilMultiply /> : <UilBars />}
            </Button>
          </Menu>
        </NavWrapper>
      </SideNav>
      <VersionTag>
        <ServiceCheckerLazy />
        {status}
      </VersionTag>
      {shown ? <NavigationSheets toggleLocked={toggleLocked} /> : <></>}
    </Fragment>
  );
};
/**
 * Internal Component Declaration
 *
 */
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
    width: `100px`,
    height: `100vh`,
  },
  '@lg': {
    width: `140px`,
    height: `100vh`,
  },
});

const NavWrapper = styled(`div`, {
  display: `flex`,
  flexDirection: `row`,
  width: `100vw`,
  justifyContent: `space-between`,
  padding: `$sm`,
  '@sm': {
    padding: `0`,
    width: `auto`,
    flexDirection: `column`,
  },
});

const Menu = styled(`div`, {
  width: `48px`,
  height: `48px`,
  borderRight: `1px solid none`,
  borderBottom: `1px solid none`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  backgroundColor: `$slate1`,
  '&:hover': {
    backgroundColor: `$slate3`,
  },
  '@sm': {
    borderRight: `1px solid $slate6`,
    borderBottom: `1px solid $slate6`,
    width: `100px`,
    height: `100px`,
  },
  '@lg': {
    width: `140px`,
    height: `140px`,
  },
});

const VersionTag = styled(`div`, {
  display: `none`,
  position: `fixed`,
  left: `0`,
  bottom: `0`,
  zIndex: `100000`,
  fontSize: `$xxs`,
  transform: `rotate(90deg) translateX(-120px) translateY(49px)`,
  backgroundColor: `$slate1`,
  '@sm': {
    display: `block`,
  },
  '@lg': {
    transform: `rotate(90deg) translateX(-120px) translateY(29px)`,
  },
});
