/** 3rd Party Modules Import */
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import {
  UilUser,
  UilBackpack,
  UilSignout,
  UilAward,
  UilCog,
} from '@iconscout/react-unicons';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
/** Internal Modules Import */
import { Button, PlainButton } from '@components/design/button';
import { SubTitle } from '@components/design/typography';
import {
  Avatar,
  AvatarImage,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/navigations/avatar';
/** Types Import */
import { Fragment, ReactElement } from 'react';
/**
 * Main Component Declaration
 *
 */
interface DynamicBarProps {}
export const DynamicBar = (props: DynamicBarProps): ReactElement => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const t = useTranslations(`Menu`);

  const signOutHandler = async (): Promise<void> => {
    signOut({
      callbackUrl: `/${router.locale}`,
      redirect: false,
    });
  };

  return (
    <Fragment>
      {status === `loading` ? (
        <Button alternative="ghost" css={{ fontSize: `$xs` }}>
          Loading...
        </Button>
      ) : (
        <>
          {status === `authenticated` ? (
            <Popover>
              <PopoverTrigger asChild>
                <PlainButton>
                  <Avatar>
                    <AvatarImage
                      src={
                        `https://avatars.dicebear.com/api/miniavs/${session?.currentUser?.avatar}.svg` ||
                        `https://avatars.dicebear.com/api/miniavs/${new Date()}.svg`
                      }
                      role="button"
                    />
                  </Avatar>
                </PlainButton>
              </PopoverTrigger>
              <PopoverContent sideOffset={5}>
                <Link href="/profile" passHref>
                  <Button
                    as="button"
                    alternative="ghost"
                    aria-label="User Profile"
                  >
                    <UilUser />
                    <SubTitle
                      css={{
                        fontSize: `$xs`,
                        marginLeft: `$sm`,
                        fontWeight: `bold`,
                        marginBottom: 0,
                      }}
                    >
                      {t(`profile`)}
                    </SubTitle>
                  </Button>
                </Link>
                <Link href="/profile/badge" passHref>
                  <Button
                    as="button"
                    alternative="ghost"
                    aria-label="User's Badge"
                  >
                    <UilAward />
                    <SubTitle
                      css={{
                        fontSize: `$xs`,
                        marginLeft: `$sm`,
                        fontWeight: `bold`,
                        marginBottom: 0,
                      }}
                    >
                      {t(`badge`)}
                    </SubTitle>
                  </Button>
                </Link>
                <Link href="/inventory" passHref>
                  <Button
                    as="button"
                    alternative="ghost"
                    aria-label="User's Inventory"
                  >
                    <UilBackpack />
                    <SubTitle
                      css={{
                        fontSize: `$xs`,
                        marginLeft: `$sm`,
                        fontWeight: `bold`,
                        marginBottom: 0,
                      }}
                    >
                      {t(`inventory`)}
                    </SubTitle>
                  </Button>
                </Link>
                <Link href="/profile/settings" passHref>
                  <Button as="button" alternative="ghost" aria-label="Settings">
                    <UilCog />
                    <SubTitle
                      css={{
                        fontSize: `$xs`,
                        marginLeft: `$sm`,
                        fontWeight: `bold`,
                        marginBottom: 0,
                      }}
                    >
                      {t(`settings`)}
                    </SubTitle>
                  </Button>
                </Link>
                <Button
                  alternative="ghost"
                  onClick={() => signOutHandler()}
                  aria-label="Logout"
                >
                  <UilSignout />
                  <SubTitle
                    css={{
                      fontSize: `$xs`,
                      marginLeft: `$sm`,
                      fontWeight: `bold`,
                      marginBottom: 0,
                    }}
                  >
                    {t(`disconnect`)}
                  </SubTitle>
                </Button>
              </PopoverContent>
            </Popover>
          ) : (
            <Link href="/auth/connect" passHref key="/auth/connect">
              <Button
                as="a"
                alternative="primary"
                css={{ marginRight: `$xs`, fontSize: `$xs` }}
              >
                {t(`connect`)}
              </Button>
            </Link>
          )}
        </>
      )}
    </Fragment>
  );
};
/**
 * Internal Component Declaration
 *
 */
