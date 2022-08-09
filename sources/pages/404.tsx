/** 3rd Party Modules Import */
import { useTranslations } from 'next-intl';
/** Internal Modules Import */
import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
/** Types Import */
import type { GetStaticPropsContext } from 'next';

/**
 * Next Laziefied Components Import
 *
 */
/**
 * Next Page Component Declaration
 *
 */
interface Custom404Props {}

export default function Custom404(props: Custom404Props) {
  const t = useTranslations(`Error`);

  return (
    <BaseLayout title={t(`404Title`)}>
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="about-us-text">{t(`404Title`)}</SubTitle>
          <Heading>{t(`404SubTitle`)}</Heading>
        </Section>
      </Box>
    </BaseLayout>
  );
}
/**
 * Next Page Server Code Declaration
 *
 */
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
    },
    revalidate: 60 * 60 * 24,
  };
}
