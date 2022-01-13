import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { SnippetCard, SnippetCardProps } from '@components/cards/snippet-card';

interface SnippetsProps {
  data: SnippetCardProps[];
}

export default function Snippets(props: SnippetsProps) {
  const t = useTranslations(`Snippets`);

  return (
    <BaseLayout title="Hello World!">
      <Box>
        <Section>
          <SubTitle data-testid="welcome-text">
            {t(`snippetsSubTitle`)}
          </SubTitle>
          <Heading>{t(`snippetsTitle`)}</Heading>
        </Section>
        <Section
          css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
        >
          {props.data.map((item) => {
            return (
              <SnippetCard
                key={item.id}
                tags={item.tags}
                id={item.id}
                icon={item.icon}
                title={item.title}
              />
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
      data: [
        {
          id: 1,
          tags: ['javascript', 'react'],
          icon: 'javascript',
          title: 'Testing JS',
        },
        {
          id: 2,
          tags: ['golang'],
          icon: 'golang',
          title: 'Testing Go',
        },
        {
          id: 3,
          tags: ['css', 'style'],
          icon: 'css',
          title: 'Testing CSS',
        },
        {
          id: 4,
          tags: ['solidity', 'smart contracts'],
          icon: 'solidity',
          title: 'Testing Solidity',
        },
      ],
    },
  };
}
