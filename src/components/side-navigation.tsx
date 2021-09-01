import Link from 'next/link';
import Image from 'next/image';
import { IconMenu } from '@components/icons/menu';
import { styled } from '@config/stitches.config';

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
  transform: `rotate(90deg) translateX(-110px) translateY(36px)`,
  backgroundColor: `$mauve1`,
});

export const SideNavigation = () => {
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
            <IconMenu width={32} />
          </Menu>
        </NavWrapper>
      </SideNav>
      <VersionTag>{status}</VersionTag>
    </>
  );
};
