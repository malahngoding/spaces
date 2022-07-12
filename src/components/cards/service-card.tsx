/** 3rd Party Modules Import */
import Image from 'next/image';
import Link from 'next/link';
/** Internal Modules Import */
import { Box } from '@components/design/box';
/** Types Import */
import type { ReactElement } from 'react';
/**
 * Main Component Declaration
 *
 */
interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
  url: string;
}
export const ServiceCard = (props: ServiceCardProps): ReactElement => {
  return (
    <ServiceCardWrapper url={props.url}>
      <MediaImage image={props.image} description={props.description} />
      <Description title={props.title} description={props.description} />
    </ServiceCardWrapper>
  );
};
/**
 * Internal Component Declaration
 *
 */
interface ServiceCardWrapperProps {
  children: ReactElement[];
  url: string;
}
const ServiceCardWrapper = (props: ServiceCardWrapperProps): ReactElement => {
  return (
    <Link href={props.url} passHref>
      <Box
        as="a"
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
            transform: `translateY(-4px)`,
            boxShadow: `0px 8px 6px -8px hsl(198 6.6% 15.8%)`,
          },
        }}
      >
        {props.children}
      </Box>
    </Link>
  );
};
interface MediaImageProps {
  image: string;
  description: string;
}
const MediaImage = (props: MediaImageProps): ReactElement => {
  return (
    <Image src={props.image} alt={props.description} width={380} height={380} />
  );
};
interface DescriptionProps {
  title: string;
  description: string;
}
const Description = (props: DescriptionProps): ReactElement => {
  return (
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
          fontFamily: `$brand`,
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
  );
};
