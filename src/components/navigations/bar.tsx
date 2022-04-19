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

import { Button, PlainButton } from '@components/design/button';
import { Nav } from '@components/design/nav';
import { SubTitle } from '@components/design/typography';
import {
  Avatar,
  AvatarImage,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/navigations/avatar';

interface NavigationBarProps {
  transparent?: boolean;
}

export const NavigationBar = (props: NavigationBarProps) => {
  const router = useRouter();
  const transparent = props.transparent ? props.transparent : false;
  const { data: session, status } = useSession();
  const t = useTranslations(`Menu`);

  const NavItems = [
    { title: t(`learn`), url: `/learn` },
    { title: t(`camps`), url: `/camps` },
    { title: t(`aboutUs`), url: `/about-us` },
  ];

  return (
    <>
      <Nav>
        {NavItems.map((item) => (
          <Link href={item.url} passHref key={item.url}>
            <a>
              <Button
                alternative={
                  item.url === `/auth/connect` ? `primary` : `ghostAlternative`
                }
                css={{ marginRight: `$xs`, fontSize: `$xs` }}
              >
                {item.title}
              </Button>
            </a>
          </Link>
        ))}
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
                    <Button alternative="ghost">
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
                    <Button alternative="ghost">
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
                    <Button alternative="ghost">
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
                    <Button alternative="ghost">
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
                    onClick={() =>
                      signOut({
                        callbackUrl: `/${router.locale}`,
                      })
                    }
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
                  alternative="primary"
                  css={{ marginRight: `$xs`, fontSize: `$xs` }}
                >
                  {t(`connect`)}
                </Button>
              </Link>
            )}
          </>
        )}
      </Nav>
    </>
  );
};
