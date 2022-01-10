import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import {
  Caption,
  Heading,
  SubTitle,
  Paragraph,
} from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

interface FlashCardProps {}

export default function FlashCard(props: FlashCardProps) {
  const t = useTranslations(`FlashCard`);

  return (
    <BaseLayout title="Hello World!">
      <Box>
        <Section>
          <Heading>{t(`flashCardTitle`)}</Heading>
        </Section>
        <Section
          css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
        ></Section>
      </Box>
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
    },
  };
}
