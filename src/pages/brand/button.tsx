import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Button, SmallButton } from '@components/design/button';
import { DesignLayout } from '@layouts/design-layout';
import { Grid } from '@components/design/grid';
import { Heading, SubTitle } from '@components/design/typography';

import type { GetStaticPropsContext } from 'next';
interface HomeProps {
  applicationName: string;
}

export default function DesignButton(props: HomeProps) {
  const { applicationName } = props;
  return (
    <DesignLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="about-us-text">
            Our Clickity-Clackity Blocks
          </SubTitle>
          <Heading>Button</Heading>
        </Section>
        <Section>
          <Grid>
            <Button>Button</Button>
            <Button alternative="secondary">Button</Button>
            <Button alternative="tertiary">Button</Button>
            <Button alternative="invert">Button</Button>
            <Button alternative="ghost">Button</Button>
          </Grid>
        </Section>
        <Section>
          <Grid>
            <SmallButton>SmallButton</SmallButton>
            <SmallButton alternative="secondary">SmallButton</SmallButton>
            <SmallButton alternative="tertiary">SmallButton</SmallButton>
            <SmallButton alternative="invert">SmallButton</SmallButton>
            <SmallButton alternative="ghost">SmallButton</SmallButton>
          </Grid>
        </Section>
      </Box>
    </DesignLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  const applicationName = `Malah Ngoding`;

  return {
    props: {
      messages,
      applicationName,
    },
  };
}
