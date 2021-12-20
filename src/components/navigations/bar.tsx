import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { UilUser, UilWallet, UilSignout } from '@iconscout/react-unicons';
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
    { title: t(`services`), url: `/services` },
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
                  item.url === `/auth/register` ? `primary` : `ghostAlternative`
                }
                css={{ marginRight: `$xs` }}
              >
                {item.title}
              </Button>
            </a>
          </Link>
        ))}
        {status === `loading` ? (
          <Button alternative="ghost">Loading...</Button>
        ) : (
          <>
            {status === `authenticated` ? (
              <Popover>
                <PopoverTrigger asChild>
                  <PlainButton>
                    <Avatar>
                      <AvatarImage
                        src={
                          session?.currentUser?.avatar ||
                          `https://avatars.dicebear.com/api/open-peeps/user.svg`
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
                          marginLeft: `$sm`,
                          fontWeight: `bold`,
                          marginBottom: 0,
                        }}
                      >
                        {t(`profile`)}
                      </Paragraph>
                    </Button>
                  </Link>
                  <Link href="/wallet" passHref>
                    <Button alternative="ghost">
                      <UilWallet />
                      <Paragraph
                        css={{
                          marginLeft: `$sm`,
                          fontWeight: `bold`,
                          marginBottom: 0,
                        }}
                      >
                        {t(`wallet`)}
                      </Paragraph>
                    </Button>
                  </Link>
                  <Button alternative="ghost" onClick={() => signOut()}>
                    <UilSignout />
                    <Paragraph
                      css={{
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
              <Link href="/auth/register" passHref key="/auth/register">
                <Button alternative="primary" css={{ marginRight: `$xs` }}>
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
