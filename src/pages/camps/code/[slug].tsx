import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { CampsLayout } from '@layouts/camps';

import type { GetServerSidePropsContext } from 'next';

interface CodeProps {}

const CodeNavigation = (): JSX.Element => {
  return (
    <>
      <Box css={{ padding: `$md` }}>
        <SubTitle>Introduction To Programming</SubTitle>
      </Box>
      <Box css={{ padding: `$md`, borderTop: `1px solid $slate6` }}>WOW</Box>
    </>
  );
};

export default function Code(props: CodeProps) {
  return (
    <CampsLayout title="Hello World!" sideNav={<CodeNavigation />}>
      <>
        <Box>
          <br />
          <Section>
            <SubTitle data-testid="about-us-text">
              The Adventure Begins → The Adventure Begins
            </SubTitle>
            <Heading>Course Introduction</Heading>
          </Section>
        </Box>
      </>
    </CampsLayout>
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
