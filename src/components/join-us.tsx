import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { Section } from '@components/design/section';
import { Title } from '@components/design/typography';
import { Button } from '@components/design/button';

export const JoinUs = (): JSX.Element => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const t = useTranslations(`Menu`);
  return (
    <>
      {status === `authenticated` ? (
        <></>
      ) : (
        <Section
          css={{
            display: `flex`,
            flexDirection: `column`,
            textAlign: `center`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <Title>
            {t(`connect`)}
            {` ?`}
          </Title>
          <Link
            href={{
              pathname: `/auth/connect`,
              query: { callBackUrl: router.asPath },
            }}
          >
            <Button as="a" alternative={`secondary`}>
              OK
            </Button>
          </Link>
        </Section>
      )}
      <Image
        src="/static/images/activation.png"
        alt="activation"
        width={`1000`}
        height={`100`}
        layout="responsive"
      />
    </>
  );
};
