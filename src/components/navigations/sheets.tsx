import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

import { Button } from '@components/design/button';
import { SubTitle } from '@components/design/typography';
import { Box } from '@components/design/box';
import { styled } from '@config/stitches.config';
import { useDashNav } from '@store/navigation-store';

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

export const NavigationSheets = () => {
  const toggleNav = useDashNav((state) => state.toggleNav);
  const { theme } = useTheme();
  const router = useRouter();

  const navigationList = [
    { title: `Learn`, url: `/learn` },
    { title: `Camps`, url: `/camps` },
    { title: `Labs`, url: `/labs` },
    { title: `About`, url: `/about-us` },
    { title: `.design`, url: `/design` },
  ];

  const routerPush = async (url: string) => {
    await router.push(url);
    toggleNav();
  };

  return (
    <>
      <NavigationCard
        css={{
          background:
            theme === `dark`
              ? `rgba(0, 0, 0, 0.48)`
              : `rgba(253, 252, 253, 0.48)`,
        }}
      >
        <Box
          css={{
            backgroundColor: `$slate1`,
            minHeight: `100vh`,
            minWidth: `100vw`,
            borderRight: `1px solid $slate6`,
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
            <a key={item.url}>
              <Button
                onClick={() => routerPush(item.url)}
                alternative="ghost"
                css={{
                  '&:hover': {
                    backgroundColor: `$cyan6`,
                  },
                }}
              >
                <SubTitle>{item.title}</SubTitle>
              </Button>
            </a>
          ))}
        </Box>
        <Box
          css={{
            display: `none`,
            backgroundColor: `none`,
            minHeight: `100vh`,
            minWidth: `50vw`,
            borderRight: `1px solid $slate6`,
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
