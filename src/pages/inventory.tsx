/** 3rd Party Modules Import */
import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
/** Internal Modules Import */
import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { InventoryCard } from '@components/cards/inventory-card';
/** Types Import */
import type { GetServerSidePropsContext } from 'next';

/**
 * Next Laziefied Components Import
 *
 */
/**
 * Next Page Component Declaration
 *
 */
interface InventoryProps {}

export default function Inventory(props: InventoryProps) {
  const t = useTranslations(`Inventory`);

  const theInventoryGroup = [
    {
      magicItem: `Fuels`,
      colors: `$sweet3`,
      image: `/static/inventory/fuel.png`,
      description: ``,
    },
    {
      magicItem: `Shards`,
      colors: `$sweet4`,
      image: `/static/inventory/shard.png`,
      description: ``,
    },
    {
      magicItem: `Armors`,
      colors: `$sweet8`,
      image: `/static/inventory/armor.png`,
      description: ``,
    },
    {
      magicItem: `Weapons`,
      colors: `$sweet11`,
      image: `/static/inventory/weapon.png`,
      description: ``,
    },
    {
      magicItem: `Vehicles`,
      colors: `$sweet10`,
      image: `/static/inventory/vehicle.png`,
      description: ``,
    },
    {
      magicItem: `Base`,
      colors: `$sweet15`,
      image: `/static/inventory/base.png`,
      description: ``,
    },
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
            gridTemplateColumns: `1fr`,
            gap: `$md`,
            '@sm': {
              gridTemplateColumns: `1fr 1fr`,
            },
            '@md': {
              gridTemplateColumns: `1fr 1fr 1fr`,
            },
            '@lg': {
              gridTemplateColumns: `1fr 1fr 1fr 1fr`,
            },
          }}
        >
          {theInventoryGroup.map((item) => {
            return (
              <InventoryCard
                key={item.magicItem}
                magicItem={item.magicItem}
                colors={item.colors}
                description={item.description}
                image={item.image}
              />
            );
          })}
        </Section>
      </Box>
    </BaseLayout>
  );
}
/**
 * Next Page Server Code Declaration
 *
 */
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
