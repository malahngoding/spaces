/* 3rd Party Modules Import */
import { useTranslations } from 'next-intl';
/* Internal Modules Import */
import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
/* Types Import */
import type { GetStaticPropsContext } from 'next';
/**
 * Internal Type Declaration
 * @private
 */
/**
 * Next Laziefied Components Import
 * @private
 */
/**
 * Next Page Components Props Declaration
 * @private
 */
interface Custom404Props {}
/**
 * Next Page Component Declaration
 * @public
 */
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
 * @public
 */
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
