import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { CampsLayout } from '@layouts/camps';

import type { GetStaticPropsContext } from 'next';

interface CodeProps {}

const CodeNavigation = (): JSX.Element => {
  return (
    <Box css={{ padding: `$xs` }}>
      <SubTitle>Introduction To Programming</SubTitle>
    </Box>
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
