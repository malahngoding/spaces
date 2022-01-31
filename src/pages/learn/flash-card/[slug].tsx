import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { useTranslations } from 'next-intl';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { QuizLayout } from '@layouts/quiz';

interface FlashCardPostProps {}

export default function FlashCardPost(props: FlashCardPostProps) {
  const t = useTranslations(`Snippets`);

  return (
    <QuizLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="welcome-text">
            {t(`snippetsSubTitle`)}
          </SubTitle>
          <Heading>{t(`snippetsTitle`)}</Heading>
        </Section>
      </Box>
    </QuizLayout>
  );
}

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  const messages = await import(`../../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
    },
  };
}
