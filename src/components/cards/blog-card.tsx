/** 3rd Party Modules Import */
import Image from 'next/image';
import Link from 'next/link';
/** Internal Modules Import */
import { Box } from '@components/design/box';
import { Paragraph, Title } from '@components/design/typography';
import { scaleUp } from '@components/design/animation';
/** Types Import */
import type { ReactElement } from 'react';
/**
 * Main Component Declaration
 *
 */
export interface BlogCardProps {
  id: number;
  image: string;
  published: string;
  title: string;
  description: string;
  slug: string;
}
export const BlogCard = (props: BlogCardProps): ReactElement => {
  return (
    <BlogCardWrapper id={props.id} href={`/learn/articles/${props.slug}`}>
      <MediaImage image={props.image} title={props.title} />
      <Description
        title={props.title}
        description={props.description}
        published={props.published}
      />
    </BlogCardWrapper>
  );
};
/**
 * Internal Component Declaration
 *
 */
interface BlogCardWrapperProps {
  children: ReactElement[];
  id: number;
  href: string;
}
const BlogCardWrapper = (props: BlogCardWrapperProps) => {
  return (
    <Link href={props.href} passHref>
      <Box
        as="a"
        key={props.id}
        css={{
          border: `2px solid $slate10`,
          background: `none`,
          padding: `$xs`,
          marginY: `$xxs`,
          width: `100%`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          justifyContent: `center`,
          transform: 'translateY(0px)',
          '@lg': {
            flexDirection: `row`,
          },
          '&:hover': {
            border: `2px solid $slate12`,
            background: `$slate2`,
            cursor: `pointer`,
            animation: `${scaleUp} 200ms`,
            transform: 'translateY(-4px)',
            boxShadow: `5px 5px`,
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
  title: string;
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
  published: string;
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
      <Paragraph css={{ margin: 0 }}>{props.published}</Paragraph>
    </Box>
  );
};
