import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

interface SnippetsProps {}

export default function Snippets(props: SnippetsProps) {
  const t = useTranslations(`Snippets`);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <BaseLayout title="Hello World!">
      <Box>
        <Section>
          <SubTitle data-testid="welcome-text">
            {t(`snippetsSubTitle`)}
          </SubTitle>
          <Heading>{t(`snippetsTitle`)}</Heading>
        </Section>
        <Section>
          {arr.map((item) => {
            return (
              <Box
                key={item}
                css={{
                  border: `2px solid $slate12`,
                  marginY: `$sm`,
                  padding: `$xs`,
                  display: `flex`,
                }}
              >
                <Image
                  src="/static/programming-icon/javascript.png"
                  height={64}
                  width={64}
                  alt="item"
                />
                <p>{item}</p>
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
