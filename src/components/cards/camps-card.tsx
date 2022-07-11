/** 3rd Party Modules Import */
import Image from 'next/image';
import Link from 'next/link';
/** Internal Modules Import */
import { Box } from '@components/design/box';
import { Paragraph, Title } from '@components/design/typography';
/** Types Import */
import type { ReactElement } from 'react';
/**
 * Main Component Declaration
 *
 */
export interface CampsCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  courses: string;
  slug: string;
}
export const CampsCard = (props: CampsCardProps): ReactElement => {
  return (
    <Link href={`/camps/code/${props.courses}/${props.slug}`} passHref>
      <CampsCardWrapper id={props.id}>
        <MediaImage image={props.image} title={props.title} />
        <Description title={props.title} description={props.description} />
      </CampsCardWrapper>
    </Link>
  );
};
/**
 * Internal Component Declaration
 *
 */
interface CampsCardWrapperProps {
  children: ReactElement[];
  id: number;
}
const CampsCardWrapper = (props: CampsCardWrapperProps) => {
  return (
    <Box
      as="a"
      key={props.id}
      css={{
        border: `2px solid $slate12`,
        background: `$slate4`,
        marginY: `$xxs`,
        width: `100%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        '@lg': {
          flexDirection: `row`,
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
  );
};
interface MediaImageProps {
  title: string;
  image: string;
}
const MediaImage = (props: MediaImageProps) => {
  return (
    <Box css={{ height: `100%` }}>
      <Image
        src={`${props.image}&w=320&h=320&q=80`}
        alt={props.title}
        width="310px"
        height="310px"
      />
    </Box>
  );
};
interface DescriptionProps {
  title: string;
  description: string;
}
const Description = (props: DescriptionProps) => {
  return (
    <Box
      css={{
        width: `100%`,
        height: 'none',
        padding: `$sm`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `space-between`,
        justifyContent: `space-between`,
        '@lg': {
          width: `calc(100% - 640)`,
        },
      }}
    >
      <Title css={{ margin: 0, fontFamily: `$brand` }}>{props.title}</Title>
      <Paragraph css={{ fontWeight: `$normal` }}>{props.description}</Paragraph>
    </Box>
  );
};
