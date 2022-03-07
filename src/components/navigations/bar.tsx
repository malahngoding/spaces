import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import {
  UilUser,
  UilBackpack,
  UilSignout,
  UilAward,
} from '@iconscout/react-unicons';
import { useTranslations } from 'next-intl';

import { Button, PlainButton } from '@components/design/button';
import { Nav } from '@components/design/nav';
import { Paragraph } from '@components/design/typography';
import {
  Avatar,
  AvatarImage,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/navigations/avatar';

export const NavigationBar = () => {
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
                      <Paragraph
                        css={{
                          fontSize: `$xs`,
                          marginLeft: `$sm`,
                          fontWeight: `bold`,
                          marginBottom: 0,
                        }}
                      >
                        {t(`profile`)}
                      </Paragraph>
                    </Button>
                  </Link>
                  <Link href="/profile/badge" passHref>
                    <Button alternative="ghost">
                      <UilAward />
                      <Paragraph
                        css={{
                          fontSize: `$xs`,
                          marginLeft: `$sm`,
                          fontWeight: `bold`,
                          marginBottom: 0,
                        }}
                      >
                        {t(`badge`)}
                      </Paragraph>
                    </Button>
                  </Link>
                  <Link href="/inventory" passHref>
                    <Button alternative="ghost">
                      <UilBackpack />
                      <Paragraph
                        css={{
                          fontSize: `$xs`,
                          marginLeft: `$sm`,
                          fontWeight: `bold`,
                          marginBottom: 0,
                        }}
                      >
                        {t(`inventory`)}
                      </Paragraph>
                    </Button>
                  </Link>
                  <Button alternative="ghost" onClick={() => signOut()}>
                    <UilSignout />
                    <Paragraph
                      css={{
                        fontSize: `$xs`,
                        marginLeft: `$sm`,
                        fontWeight: `bold`,
                        marginBottom: 0,
                      }}
                    >
                      {t(`disconnect`)}
                    </Paragraph>
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
