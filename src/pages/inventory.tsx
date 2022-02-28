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
import { InventoryCard } from '@components/cards/inventory-card';

export default function Inventory() {
  const t = useTranslations(`Inventory`);

  const theInventoryGroup = [
    { magicItem: `Fuels`, colors: `$sweet2` },
    { magicItem: `Shards`, colors: `$sweet4` },
    { magicItem: `Armors`, colors: `$sweet8` },
    { magicItem: `Weapons`, colors: `$sweet11` },
    { magicItem: `Vehicles`, colors: `$sweet10` },
    { magicItem: `Base`, colors: `$sweet15` },
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
            display: `grid`,
            gridTemplateColumns: `1fr 1fr 1fr 1fr`,
            gap: `$xs`,
          }}
        >
          {theInventoryGroup.map((item) => {
            return (
              <InventoryCard
                key={item.magicItem}
                magicItem={item.magicItem}
                colors={item.colors}
                description={`WOK`}
                image={`https://images.unsplash.com/photo-1576916385844-befd8945138c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320`}
              />
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
