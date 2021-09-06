import Link from 'next/link';
import Image from 'next/image';

import { IconMenu } from '@components/icons/menu';
import { IconClose } from '@components/icons/close';
import { styled } from '@config/stitches.config';
import { Button } from '@components/design/button';
import { useDashNav } from '@store/navigation-store';
import { SubTitle } from '@components/design/typography';
import { Box } from '@components/design/box';

const SideNav = styled(`div`, {
  borderRight: `0`,
  borderBottom: `1px solid $mauve6`,
  height: `83px`,
  left: `0`,
  position: `fixed`,
  top: `0`,
  transition: `transform 0.1s`,
  width: `100vh`,
  zIndex: `100001`,
  backgroundColor: `$mauve1`,
  '@sm': {
    zIndex: `99999`,
    borderRight: `1px solid $mauve6`,
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
  backgroundColor: `$mauve1`,
  '&:hover': {
    backgroundColor: `$mauve3`,
  },
  '@sm': {
    borderRight: `1px solid $mauve6`,
    borderBottom: `1px solid $mauve6`,
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
  fontFamily: `monospace`,
  position: `fixed`,
  left: `0`,
  bottom: `0`,
  zIndex: `100000`,
  transform: `rotate(90deg) translateX(-120px) translateY(58px)`,
  backgroundColor: `$mauve1`,
  '@sm': {
    display: `block`,
  },
  '@lg': {
    transform: `rotate(90deg) translateX(-120px) translateY(36px)`,
  },
});

const NavigationCard = styled(`div`, {
  position: `fixed`,
  left: `0px`,
  top: `0`,
  width: `calc(100% - 0px)`,
  height: `100vh`,
  zIndex: `100000`,
  background: `rgba(253, 252, 253, 0.69)`,
  backdropFilter: `blur(9px)`,
  webkitBackdropFilter: `blur(9px)`,
  display: `flex`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  '@sm': {
    left: `100px`,
    width: `calc(100% - 100px)`,
  },
  '@lg': {
    left: `140px`,
    width: `calc(100% - 140px)`,
  },
});

const NavigationSheets = () => {
  const toggleNav = useDashNav((state) => state.toggleNav);

  const navigationList = [
    { title: `Study`, url: `/study` },
    { title: `Camps`, url: `/camps` },
    { title: `Labs`, url: `/labs` },
    { title: `About`, url: `/about` },
  ];

  return (
    <>
      <NavigationCard>
        <Box
          css={{
            backgroundColor: `$mauve1`,
            minHeight: `100vh`,
            minWidth: `100vw`,
            borderRight: `1px solid $mauve6`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            alignItems: `flex-start`,
            padding: `$md`,
            '@lg': {
              padding: `$xl`,
              minWidth: `50vw`,
            },
          }}
        >
          {navigationList.map((item) => (
            <Link href={item.url} key={item.url} passHref>
              <a>
                <SubTitle>{item.title}</SubTitle>
              </a>
            </Link>
          ))}
        </Box>
        <Box
          css={{
            display: `none`,
            backgroundColor: `none`,
            minHeight: `100vh`,
            minWidth: `50vw`,
            borderRight: `1px solid $mauve6`,
            '@lg': {
              display: `block`,
            },
          }}
          onClick={toggleNav}
        >
          {` `}
        </Box>
      </NavigationCard>
    </>
  );
};

export const SideNavigation = () => {
  const shown = useDashNav((state) => state.shown);
  const toggleNav = useDashNav((state) => state.toggleNav);

  const handleNavigation = (): void => {
    toggleNav();
  };

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
              {shown ? <IconClose width={32} /> : <IconMenu width={32} />}
            </Button>
          </Menu>
        </NavWrapper>
      </SideNav>
      <VersionTag>{status}</VersionTag>
      {shown ? <NavigationSheets /> : <></>}
    </>
  );
};
