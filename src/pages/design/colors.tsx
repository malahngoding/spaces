import { GetStaticPropsContext } from 'next';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { DesignLayout } from '@layouts/design-layout';

interface HomeProps {
  applicationName: string;
  repeater: number[];
}

export default function DesignButton(props: HomeProps) {
  const { applicationName, repeater } = props;
  return (
    <DesignLayout title="Hello World!">
      <Box>
        <br />
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
        <Box css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}>
          {repeater.map((item: number) => (
            <Box key={item}>
              <Box
                css={{
                  height: `72px`,
                  width: `72px`,
                  backgroundColor: `$crimson${item.toString()}`,
                }}
              />
            </Box>
          ))}
        </Box>
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
      repeater: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  };
}
