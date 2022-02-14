import Image from 'next/image';

import { Box } from '@components/design/box';
import { Paragraph } from '@components/design/typography';

interface InventoryCardProps {
  colors: string;
  magicItem: string;
  description: string;
  image: string;
}

export const InventoryCard = (props: InventoryCardProps) => {
  return (
    <Box
      css={{
        border: `2px solid $slate12`,
        padding: `$xs`,
        '&:hover': {
          border: `2px solid ${props.colors}`,
          boxShadow: `0px 8px 6px -8px hsl(198 6.6% 15.8%)`,
        },
      }}
    >
      <Paragraph css={{ fontWeight: `bolder`, color: `$slate12` }}>
        {props.magicItem}
      </Paragraph>
      <Image
        src={props.image}
        alt={props.description}
        height={320}
        width={320}
      />
      <Paragraph css={{ color: `$slate12` }}>{props.description}</Paragraph>
    </Box>
  );
};
