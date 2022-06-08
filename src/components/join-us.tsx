import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { Section } from '@components/design/section';
import { Title } from '@components/design/typography';
import { Button } from './design/button';
import { useRouter } from 'next/router';

export const JoinUs = (): JSX.Element => {
  const router = useRouter();
  const t = useTranslations(`Menu`);

  return (
    <>
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
