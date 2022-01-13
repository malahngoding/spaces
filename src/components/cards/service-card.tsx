import Image from 'next/image';
import Link from 'next/link';

import { Box } from '@components/design/box';

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
  url: string;
}

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <Link href={props.url} passHref={true}>
      <Box
        css={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `flex-start`,
          alignItems: `flex-start`,
          marginX: `0`,
          marginY: `$md`,
          border: `2px solid $slate6`,
          paddingBottom: `$xs`,
          width: `100%`,
          '@sm': {
            marginX: `$xs`,
            width: 380,
          },
          '&:hover': {
            cursor: `pointer`,
            backgroundColor: '$cyan4',
          },
        }}
      >
        <Image
          src={props.image}
          alt={props.description}
          width={380}
          height={380}
        />
        <Box
          css={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `flex-start`,
            paddingY: `$xs`,
          }}
        >
          <Box
            css={{
              fontSize: `$md`,
              fontWeight: `bold`,
              padding: `$xs`,
            }}
            as="h3"
          >
            {props.title}
          </Box>
          <Box as="p" css={{ wordWrap: `break-word`, padding: `$xs` }}>
            {props.description}
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
