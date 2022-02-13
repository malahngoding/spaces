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
  return (
    <BaseLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle>Welcome to</SubTitle>
          <Heading>Labs of Malah Ngoding</Heading>
        </Section>
        <Section>
          <Link href="/camps/labs/hedera" passHref>
            <LinkText>Tradingview - Hedera Chart</LinkText>
          </Link>
          <Link href="/camps/labs/web3" passHref>
            <LinkText>Metamask Experiment</LinkText>
          </Link>
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
