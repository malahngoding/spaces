import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle, Title } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { BadgeCard } from '@components/badge-card';

export default function Wallet() {
  const t = useTranslations(`Wallets`);

  return (
    <BaseLayout title={t(`title`)}>
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="about-us-text">{t(`welcome`)}</SubTitle>
          <Heading>{t(`title`)}</Heading>
        </Section>

        <Section>
          <BadgeCard
            title="100 $MNT"
            description="Malah Ngoding Token"
            image="https://storage.opensea.io/files/70db9e857f52b78b7a9f6d93020e50d8.mp4#t=0.001"
          />
        </Section>
      </Box>
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
    },
  };
}
