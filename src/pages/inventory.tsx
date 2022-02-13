import { GetServerSidePropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { getSession } from 'next-auth/react';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import {
  Heading,
  Paragraph,
  SubTitle,
  Title,
} from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

export default function Inventory() {
  const t = useTranslations(`Inventory`);

  const theInventoryGroup = [
    { magicNumber: 100, magicItem: `Fuels`, colors: `$sweet3` },
    { magicNumber: 50, magicItem: `Shards`, colors: `$sweet4` },
    { magicNumber: 60, magicItem: `Armors`, colors: `$sweet8` },
    { magicNumber: 60, magicItem: `Weapons`, colors: `$sweet11` },
    { magicNumber: 90, magicItem: `Vehicles`, colors: `$sweet10` },
    { magicNumber: 50, magicItem: `Powerups`, colors: `$sweet15` },
  ];

  return (
    <BaseLayout title={t(`title`)}>
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="about-us-text">{t(`welcome`)}</SubTitle>
          <Heading>{t(`title`)}</Heading>
        </Section>
        <Section
          css={{
            display: `flex`,
            flexDirection: `row`,
            flexWrap: `wrap`,
          }}
        >
          {theInventoryGroup.map((item, index) => {
            return (
              <Box
                key={item.magicNumber}
                css={{
                  height: `140px`,
                  width: `${item.magicNumber * 5}px`,
                  border: `4px solid $slate12`,
                  margin: `0 $xs $xs 0`,
                  padding: `$xs`,
                  flexGrow: 1,
                  backgroundColor: `${item.colors}`,
                }}
              >
                <Paragraph css={{ fontWeight: `bolder`, color: `$slate12` }}>
                  {item.magicItem}
                </Paragraph>
              </Box>
            );
          })}
        </Section>
      </Box>
    </BaseLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session === null) {
    return {
      redirect: {
        destination: '/',
      },
    };
  } else {
    const currentLocale = context.locale;
    const messages = await import(`../lang/${currentLocale}.json`).then(
      (module) => module.default,
    );
    return {
      props: {
        messages,
        currentUser: session.currentUser,
      },
    };
  }
}
