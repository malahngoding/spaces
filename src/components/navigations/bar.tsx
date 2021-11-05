import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { UilUser, UilSetting, UilSignout } from '@iconscout/react-unicons';

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
  const NavItems = [
    { title: `Learn`, url: `/learn` },
    { title: `Camps`, url: `/camps` },
    { title: `Services`, url: `/services` },
    { title: `About Us`, url: `/about-us` },
  ];

  return (
    <>
      <Nav>
        {NavItems.map((item) => (
          <Link href={item.url} passHref key={item.url}>
            <Button
              alternative={
                item.url === `/auth/register` ? `primary` : `ghostAlternative`
              }
              css={{ marginRight: `$xs` }}
            >
              {item.title}
            </Button>
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
                        src={session?.user?.image || ``}
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
                        css={{ marginLeft: `$sm`, fontWeight: `bold` }}
                      >
                        Profile
                      </Paragraph>
                    </Button>
                  </Link>
                  <Link href="/settings" passHref>
                    <Button alternative="ghost">
                      <UilSetting />
                      <Paragraph
                        css={{ marginLeft: `$sm`, fontWeight: `bold` }}
                      >
                        Settings
                      </Paragraph>
                    </Button>
                  </Link>
                  <Button alternative="ghost" onClick={() => signOut()}>
                    <UilSignout />
                    <Paragraph
                      css={{
                        marginLeft: `$sm`,
                        fontWeight: `bold`,
                      }}
                    >
                      Disconnect
                    </Paragraph>
                  </Button>
                </PopoverContent>
              </Popover>
            ) : (
              <Link href="/auth/register" passHref key="/auth/register">
                <Button alternative="primary" css={{ marginRight: `$xs` }}>
                  Connect
                </Button>
              </Link>
            )}
          </>
        )}
      </Nav>
    </>
  );
};
