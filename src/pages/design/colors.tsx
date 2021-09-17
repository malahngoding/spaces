import { Box } from '@components/design/box';
import { Grid } from '@components/design/grid';
import { Section } from '@components/design/section';
import { DesignLayout } from '@layouts/design-layout';
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
          <Grid key={item}>
            <Box
              css={{
                height: `72px`,
                width: `72px`,
                backgroundColor: `$red${item.toString()}`,
              }}
            />
            <Box
              css={{
                height: `72px`,
                width: `72px`,
                backgroundColor: `$green${item.toString()}`,
              }}
            />
            <Box
              css={{
                height: `72px`,
                width: `72px`,
                backgroundColor: `$yellow${item.toString()}`,
              }}
            />
            <Box
              css={{
                height: `72px`,
                width: `72px`,
                backgroundColor: `$pink${item.toString()}`,
              }}
            />
            <Box
              css={{
                height: `72px`,
                width: `72px`,
                backgroundColor: `$blue${item.toString()}`,
              }}
            />
          </Grid>
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
      repeater: [1, 2, 3],
    },
  };
};
