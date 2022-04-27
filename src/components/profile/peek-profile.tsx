import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import { Box } from '@components/design/box';
import { PlainButton } from '@components/design/button';
import { Avatar, AvatarImage } from '@components/navigations/avatar';

interface PeekProfileProps {}

export const PeekProfile = (props: PeekProfileProps): JSX.Element => {
  const { status, data: session } = useSession();
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {status === 'authenticated' && scrollPosition > 150 ? (
        <Box
          css={{
            position: `fixed`,
            bottom: `10%`,
            right: `0`,
            padding: `1%`,
            zIndex: `100004`,
            backgroundColor: `$slate1`,
            border: `2px solid $slate8`,
            borderRight: `none`,
            '@md': {
              bottom: `80%`,
            },
          }}
        >
          <PlainButton
            onClick={() => {
              router.push(`/profile`);
            }}
          >
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
        </Box>
      ) : (
        <Fragment />
      )}
    </>
  );
};
