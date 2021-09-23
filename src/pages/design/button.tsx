import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Button, SmallButton } from '@components/design/button';
import { DesignLayout } from '@layouts/design-layout';
import { Grid } from '@components/design/grid';
import { GetStaticProps } from 'next';

interface HomeProps {
  applicationName: string;
  repeater: number[];
}

export default function DesignButton(props: HomeProps) {
  const { applicationName, repeater } = props;
  return (
    <DesignLayout title="Hello World!">
      <Box>
        <Section>
          <h1 data-testid="welcome-text">Welcome to {applicationName}</h1>
        </Section>

        {repeater.map((item: number) => (
          <Section key={item}>
            <Grid>
              <Button>Button</Button>
              <Button alternative="secondary">Button</Button>
              <Button alternative="tertiary">Button</Button>
              <Button alternative="ghost">Button</Button>
              <SmallButton>SmallButton</SmallButton>
              <SmallButton alternative="secondary">SmallButton</SmallButton>
              <SmallButton alternative="tertiary">SmallButton</SmallButton>
              <SmallButton alternative="ghost">SmallButton</SmallButton>
            </Grid>
          </Section>
        ))}
      </Box>
    </DesignLayout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const applicationName = `Malah Ngoding`;
  return {
    props: {
      applicationName,
      repeater: [1],
    },
  };
};
