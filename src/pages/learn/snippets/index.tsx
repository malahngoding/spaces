import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import {
  Caption,
  Heading,
  SubTitle,
  Paragraph,
} from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

interface SnippetsProps {}

export default function Snippets(props: SnippetsProps) {
  const t = useTranslations(`Snippets`);
  const arr = [
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
  ];
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
          {arr.map((item) => {
            return (
              <Box
                key={item.id}
                css={{
                  backgroundColor: `$cyan4`,
                  border: `2px solid $slate12`,
                  marginY: `$sm`,
                  padding: `$xs`,
                  display: `flex`,
                  width: `calc(100%)`,
                  '@lg': {
                    margin: `$sm`,
                    width: `calc(50% - 2.4rem)`,
                  },
                }}
              >
                <Box
                  css={{
                    display: `flex`,
                    flexDirection: `column`,
                    justifyContent: `center`,
                    alignItems: `center`,
                  }}
                >
                  <Image
                    src={`/static/programming-icon/${item.icon}.png`}
                    height={64}
                    width={64}
                    alt="item"
                  />
                </Box>
                <Box
                  css={{
                    marginLeft: `$xs`,
                    display: `flex`,
                    flexDirection: `column`,
                    justifyContent: `flex-start`,
                    alignItems: `flex-start`,
                  }}
                >
                  <Paragraph css={{ fontWeight: `bold` }}>
                    {item.title}
                  </Paragraph>
                  <Box
                    css={{
                      display: `flex`,
                      flexDirection: `row`,
                      justifyContent: `flex-start`,
                      alignItems: `center`,
                    }}
                  >
                    {item.tags.map((item: string) => {
                      return (
                        <Caption
                          css={{
                            margin: 0,
                            marginRight: `$xs`,
                            fontWeight: `bold`,
                          }}
                          key={item}
                        >
                          {`#${item}`}
                        </Caption>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
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
    },
  };
}
