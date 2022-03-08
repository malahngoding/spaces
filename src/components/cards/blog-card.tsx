import Image from 'next/image';
import Link from 'next/link';

import { Box } from '@components/design/box';
import { Paragraph, SubTitle, Title } from '@components/design/typography';

export interface BlogCardProps {
  id: number;
  image: string;
  published: string;
  title: string;
  description: string;
  slug: string;
}

export const BlogCard = (props: BlogCardProps) => {
  const { id, image, published, title, description, slug } = props;
  return (
    <Link href={`/learn/articles/${slug}`} passHref>
      <Box
        key={id}
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
        <Box css={{ height: `100%` }}>
          <Image
            src={`${image}&w=320&h=320&q=80`}
            alt={title}
            width="310px"
            height="310px"
          />
        </Box>
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
          <Title css={{ margin: 0, fontFamily: `$brand` }}>{title}</Title>
          <Paragraph css={{ fontWeight: `$normal` }}>{description}</Paragraph>
          <Paragraph css={{ fontFamily: `$mono`, margin: 0 }}>
            {published}
          </Paragraph>
        </Box>
      </Box>
    </Link>
  );
};
