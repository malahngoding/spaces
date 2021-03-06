/** 3rd Party Modules Import */
import Image from 'next/image';
/** Internal Modules Import */
import { Box } from '@components/design/box';
import { Paragraph } from '@components/design/typography';
/** Types Import */
import type { ReactElement } from 'react';
/**
 * Main Component Declaration
 *
 */
interface InventoryCardProps {
  colors: string;
  magicItem: string;
  description: string;
  image: string;
}
export const InventoryCard = (props: InventoryCardProps): ReactElement => {
  return (
    <Box
      css={{
        border: `2px solid $slate12`,
        '&:hover': {
          backgroundColor: `${props.colors}`,
          border: `2px solid $slate12`,
          boxShadow: `0px 8px 6px -8px hsl(198 6.6% 15.8%)`,
        },
      }}
    >
      <Paragraph
        css={{
          fontWeight: `bold`,
          color: `$slate12`,
          fontSize: `1.25em`,
          padding: `$sm $sm 0 $sm`,
          fontFamily: `$brand`,
        }}
      >
        {props.magicItem}
      </Paragraph>
      <Box
        css={{
          padding: `0 $xxs`,
        }}
      >
        <Image
          src={props.image}
          alt={props.description}
          layout="responsive"
          width={300}
          height={300}
        />
      </Box>
      <Paragraph css={{ color: `$slate12` }}>{props.description}</Paragraph>
    </Box>
  );
};
/**
 * Internal Component Declaration
 *
 */
