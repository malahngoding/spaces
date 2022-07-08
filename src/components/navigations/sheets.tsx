/* 3rd Party Modules Import */
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
/* Internal Modules Import */
import { Button } from '@components/design/button';
import { SubTitle } from '@components/design/typography';
import { Box } from '@components/design/box';
import { styled } from '@config/stitches.config';
import { useDashNav } from '@store/navigation-store';
import { useSession } from 'next-auth/react';
/* Types Import */
/**
 * Component Props Declaration
 * @private
 */
interface NavigationSheetsProps {
  toggleLocked: () => void;
}
/**
 * Component Declaration
 * @public
 */
export const NavigationSheets = (props: NavigationSheetsProps) => {
  const { data: session, status } = useSession();

  const toggleNav = useDashNav((state) => state.toggleNav);
  const { theme } = useTheme();
  const router = useRouter();
  const t = useTranslations(`Menu`);

  const navigationList = [
    { title: t(`learn`), url: `/learn` },
    { title: t(`camps`), url: `/camps` },
    { title: t(`labs`), url: `/camps/labs` },
    { title: t(`aboutUs`), url: `/about-us` },
    { title: t(`services`), url: `/services` },
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
              ? `rgba(0, 0, 0, 0.64)`
              : `rgba(253, 252, 253, 0.64)`,
        }}
      >
        <Box
          css={{
            background:
              theme === `dark`
                ? `rgba(0, 0, 0, 0.64)`
                : `rgba(253, 252, 253, 0.64)`,
            minHeight: `100vh`,
            minWidth: `100vw`,
            borderRight: `1px solid $slate6`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `flex-end`,
            alignItems: `flex-start`,
            padding: `$md $xxs`,
            '@lg': {
              background: `$slate1`,
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
                <SubTitle css={{ marginBottom: 0 }}>{item.title}</SubTitle>
              </Button>
            </a>
          ))}
          {status === `loading` ? (
            <p>Loading...</p>
          ) : (
            <>
              <Box
                as="a"
                css={{
                  maxWidth: `100%`,
                  '@md': {
                    display: `none`,
                  },
                }}
              >
                {status === `unauthenticated` ? (
                  <Button
                    onClick={() => routerPush(`/auth/connect`)}
                    alternative="ghost"
                    css={{
                      '&:hover': {
                        backgroundColor: `$cyan6`,
                      },
                    }}
                  >
                    <SubTitle css={{ marginBottom: 0, color: `$cyan10` }}>
                      {t(`connect`)}
                    </SubTitle>
                  </Button>
                ) : (
                  <Button
                    onClick={() => routerPush(`/profile`)}
                    alternative="ghost"
                    css={{
                      '&:hover': {
                        backgroundColor: `$cyan6`,
                      },
                    }}
                  >
                    <SubTitle
                      css={{
                        width: `50vw`,
                        whiteSpace: `nowrap`,
                        overflow: `hidden`,
                        textOverflow: `ellipsis`,
                        marginBottom: 0,
                        color: `$cyan10`,
                        textAlign: `left`,
                      }}
                    >
                      {session?.currentUser.name}
                    </SubTitle>
                  </Button>
                )}
              </Box>
              <Box css={{ height: `32px` }} />
            </>
          )}
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
          onClick={() => {
            toggleNav();
            props.toggleLocked();
          }}
        >
          {` `}
        </Box>
      </NavigationCard>
    </>
  );
};
/**
 * Internal Component Declaration
 * @private
 */
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
