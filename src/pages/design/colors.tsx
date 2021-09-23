import { Box } from '@components/design/box';
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
        <Box css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}>
          {repeater.map((item: number) => (
            <Box
              key={item}
              css={{
                height: `72px`,
                width: `72px`,
                backgroundColor: `$slate${item.toString()}`,
              }}
            />
          ))}
        </Box>
        <Box css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}>
          {repeater.map((item: number) => (
            <Box key={item}>
              <Box
                css={{
                  height: `72px`,
                  width: `72px`,
                  backgroundColor: `$cyan${item.toString()}`,
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </DesignLayout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const applicationName = `Malah Ngoding`;
  return {
    props: {
      applicationName,
      repeater: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  };
};
