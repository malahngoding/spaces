/* 3rd Party Modules Import */
import Image from 'next/image';
import Link from 'next/link';
/* Internal Modules Import */
import { Box } from '@components/design/box';
import { Paragraph, Title } from '@components/design/typography';
import { scaleUp } from '@components/design/animation';
/* Types Import */
/**
 * Component Props Declaration
 * @private
 */
export interface BlogCardProps {
  id: number;
  image: string;
  published: string;
  title: string;
  description: string;
  slug: string;
}
/**
 * Component Declaration
 * @public
 */
export const BlogCard = (props: BlogCardProps) => {
  const { id, image, published, title, description, slug } = props;
  return (
    <Link href={`/learn/articles/${slug}`} passHref>
      <Box
        as="a"
        key={id}
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
/**
 * Internal Component Declaration
 * @private
 */
