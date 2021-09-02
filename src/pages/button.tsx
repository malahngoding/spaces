import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Button } from '@components/design/button';
import { BaseLayout } from '@layouts/base';
import { Grid } from '@components/design/grid';
import { GetStaticProps } from 'next';

interface HomeProps {
  applicationName: string;
  repeater: number[];
}

export default function DesignButton(props: HomeProps) {
  const { applicationName, repeater } = props;
  return (
    <BaseLayout title="Hello World!">
      <Box>
        <Section>
          <h1 data-testid="welcome-text">Welcome to {applicationName}</h1>
        </Section>
        {repeater.map((item: number) => (
          <Section key={item}>
            <Grid>
              <Button>Button</Button>
              <Button alternative="secondary">Button</Button>
              <Button alternative="ghost">Button</Button>
            </Grid>
          </Section>
        ))}
      </Box>
    </BaseLayout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const applicationName = `Malah Ngoding`;
  return {
    props: {
      applicationName,
      repeater: [1, 2, 3, 4, 11, 12, 13, 14],
    },
  };
};
