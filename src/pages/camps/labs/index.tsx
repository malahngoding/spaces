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

interface LabsProps {}

export default function Labs(props: LabsProps) {
  const experiments = [
    {
      url: `/camps/labs/web3`,
      name: `Metamask Interaction`,
      description: `Interact with metamask extensions, on Polygon Mumbai`,
    },
    {
      url: `/camps/labs/hedera`,
      name: `Trading View`,
      description: `Hedera Hashgraph native cryptocurrencies ($HBAR) chart on trading view`,
    },
    {
      url: `/camps/labs/nft`,
      name: `SVG Asset randomizer`,
      description: `NFT like randomizer with SVG and some javascript code`,
    },
    {
      url: `/marketplace`,
      name: `NFT Marketplace`,
      description: `NFT marketplace for multichain network (Hedera x Polygon)`,
    },
  ];
  return (
    <BaseLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle>Welcome to</SubTitle>
          <Heading>Labs of Malah Ngoding</Heading>
        </Section>
        <Section>
          {experiments.map((item) => {
            return (
              <Link href={item.url} passHref key={item.url}>
                <a>
                  <Box
                    css={{
                      width: `100%`,
                      margin: `$sm`,
                      border: `2px solid $slate12`,
                      padding: `$xs`,
                      '&:hover': {
                        cursor: `pointer`,
                        border: `2px solid $slate12`,
                        boxShadow: `5px 5px`,
                      },
                    }}
                  >
                    <SubTitle
                      css={{
                        fontWeight: `bolder`,
                        color: `$slate12`,
                        margin: 0,
                      }}
                    >
                      {item.name}
                    </SubTitle>
                    <Paragraph css={{ color: `$slate12` }}>
                      {item.description}
                    </Paragraph>
                  </Box>
                </a>
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
    },
  };
}
