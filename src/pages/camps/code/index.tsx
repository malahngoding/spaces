import Link from 'next/link';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import {
  Heading,
  Paragraph,
  SubTitle,
  LinkText,
} from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

import type { GetStaticPropsContext } from 'next';

interface LabsProps {
  courses: string;
  slug: string;
}

export default function Labs(props: LabsProps) {
  const experiments = [
    {
      url: `/camps/code/${props.courses}/${props.slug}`,
      name: `Learn to code, Build your future.`,
      description: `Computer Science is the world's first superpower. It enables people of all backgrounds to earn a six figure salary while building the world of tomorrow.`,
    },
  ];
  return (
    <BaseLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle>The Adventure Begins</SubTitle>
          <Heading>Course Introduction</Heading>
        </Section>
        <Section>
          {experiments.map((item) => {
            return (
              <Link href={item.url} passHref key={item.url}>
                <Box
                  css={{
                    margin: `$sm`,
                    border: `2px solid $slate12`,
                    padding: `$xs`,
                    '&:hover': {
                      cursor: `pointer`,
                      border: `2px solid $slate12`,
                      boxShadow: `0px 8px 6px -8px hsl(198 6.6% 15.8%)`,
                    },
                  }}
                >
                  <SubTitle
                    css={{ fontWeight: `bolder`, color: `$slate12`, margin: 0 }}
                  >
                    {item.name}
                  </SubTitle>
                  <Paragraph css={{ color: `$slate12` }}>
                    {item.description}
                  </Paragraph>
                </Box>
              </Link>
            );
          })}
        </Section>
      </Box>
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
      courses: `pengenalan-pemrograman`,
      slug: `01-petualangan-dimulai`,
    },
  };
}
