import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
} from 'next-auth/react';
import { NextPageContext } from 'next';
import Link from 'next/link';
import { UilGithub, UilGoogle } from '@iconscout/react-unicons';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { Suspense } from 'react';

import { Button } from '@components/design/button';
import { Paragraph, Title } from '@components/design/typography';
import { AuthLayout } from '@layouts/auth';
import { styled } from '@config/stitches.config';
import { Grid } from '@components/design/grid';
import { useAuthLoading } from '@store/auth-loading-store';
import { AuthLoader } from '@components/loader/auth';
import { callbackUrlHandler } from '@utils/urlHandler';
import { Box } from '@components/design/box';

const Card = styled(`div`, {
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  margin: `$xs`,
  padding: `$xs`,
  '@sm': {
    margin: `$sm`,
    padding: `$sm`,
  },
});

const Left = styled(`div`, {
  width: `16px`,
  minHeight: `100vh`,
  backgroundColor: `$cyan3`,
  '@sm': {
    width: `32px`,
  },
  '@md': {
    width: `120px`,
  },
  '@lg': {
    width: `380px`,
  },
});

const Right = styled(`div`, {
  width: `calc(100vw - 16px)`,
  minHeight: `100vh`,
  backgroundColor: `$slate2`,
  '@sm': {
    width: `calc(100vw - 32px)`,
  },
  '@md': {
    width: `calc(100vw - 120px)px`,
  },
  '@lg': {
    width: `calc(100vw - 380px)`,
  },
});

function checkExpiry(current: string | undefined): boolean {
  if (current) {
    return true;
  }
  return false;
}

const HashpackConnectButton = dynamic(
  (): any =>
    import(`@components/hashpack-auth`).then((mod) => mod.HashpackAuth),
  { ssr: false },
);

const MetamaskConnectButton = dynamic(
  (): any =>
    import(`@components/metamask-auth`).then((mod) => mod.MetamaskAuth),
  { ssr: false },
);

interface RegisterProps {
  providers: any;
}
export default function Connect(props: RegisterProps) {
  const isLoading = useAuthLoading((state) => state.isLoading);

  const router = useRouter();
  const t = useTranslations(`Register`);

  const altImage = `/static/images/camps-instead.webp`;

  return (
    <AuthLayout title={t(`connect`)}>
      <Left
        css={{
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${altImage}")`,
        }}
      />
      <Right>
        <Card>
          <Link href="/" passHref>
            <Box as="a">
              <Image
                alt="Malah Ngoding Logo"
                src="/static/favicons/android-chrome-96x96.png"
                height={64}
                width={64}
              />
            </Box>
          </Link>
          <Title>{t(`connect`)}</Title>
          <Paragraph css={{ marginY: `$md`, maxWidth: `315px` }}>
            {t(`message`)}
          </Paragraph>
          {isLoading ? (
            <AuthLoader />
          ) : (
            <>
              <Grid
                css={{
                  gridTemplateColumns: `1fr`,
                  width: `100%`,
                  '@sm': {
                    gridTemplateColumns: `1fr 1fr 1fr 1fr`,
                    width: `auto`,
                  },
                }}
              >
                <Button
                  alternative="secondary"
                  onClick={() =>
                    signIn(props.providers.github.id, {
                      redirect: true,
                      callbackUrl: `${callbackUrlHandler(
                        router.query.callBackUrl as string,
                      )}`,
                    })
                  }
                  className="my-2 sm:m-2 flex flex-row justify-center items-center hover:bg-black-100"
                >
                  <UilGithub />
                </Button>
                <Button
                  alternative="secondary"
                  onClick={() =>
                    signIn(props.providers.google.id, {
                      redirect: true,
                      callbackUrl: `${callbackUrlHandler(
                        router.query.callBackUrl as string,
                      )}`,
                    })
                  }
                  className="my-2 sm:m-2 flex flex-row justify-center items-center hover:bg-black-100"
                >
                  <UilGoogle />
                </Button>
                <MetamaskConnectButton />
                <HashpackConnectButton />
              </Grid>
            </>
          )}
          <Paragraph css={{ marginY: `$md`, display: `none` }}>
            or using email
          </Paragraph>
        </Card>
      </Right>
    </AuthLayout>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const messages = await import(`../../lang/${context.locale}.json`).then(
    (module) => module.default,
  );

  const session = await getSession(context);

  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);

  checkExpiry(session?.expires);

  if (session?.expires) {
    return {
      redirect: {
        destination: `/`,
      },
    };
  }

  return {
    props: { providers, csrfToken, messages },
  };
}
