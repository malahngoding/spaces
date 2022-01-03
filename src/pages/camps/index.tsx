import { BadgeCard } from '@components/badge-card';
import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { GetStaticPropsContext } from 'next';

interface CampsProps {
  applicationName: string;
  repeater: number[];
}

const buff: {
  id: number;
  title: string;
  description: string;
  media: string;
}[] = [
  {
    id: 1,
    title: `Awesome Noob`,
    description: `Menyelesaikan tantangan luar angkasa`,
    media: `static/images/a1cc471e.png`,
  },
  {
    id: 2,
    title: `Code`,
    description: `Langsung ngoding tanpa menginstall apapun`,
    media: `static/images/a1cc471e.png`,
  },
  {
    id: 3,
    title: `Labs`,
    description: `Eksperimental project untuk belajar dan eksplorasi`,
    media: `static/images/a1cc471e.png`,
  },
];

export default function Camps(props: CampsProps) {
  const { applicationName } = props;

  return (
    <BaseLayout title="Hello World!">
      <Box>
        <Section>
          <SubTitle data-testid="welcome-text">
            Welcome to {applicationName}
          </SubTitle>
          <Heading>Camps of Malah Ngoding</Heading>
        </Section>
        <Section
          css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
        >
          {buff.map((item) => {
            return (
              <BadgeCard
                description={item.description}
                media={item.media}
                title={item.title}
                key={item.id}
              />
            );
          })}
        </Section>
      </Box>
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
    },
  };
}
