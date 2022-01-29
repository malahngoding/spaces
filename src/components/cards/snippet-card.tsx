import Image from 'next/image';
import Link from 'next/link';

import { Box } from '@components/design/box';
import { Caption, Paragraph } from '@components/design/typography';

export interface SnippetCardProps {
  id: number;
  title: string;
  icon: 'javascript' | 'golang' | 'css' | 'solidity' | string;
  tags: string[];
  slug: string;
}

export const SnippetCard = (props: SnippetCardProps) => {
  const { id, title, icon, tags, slug } = props;
  return (
    <Link href={`/learn/snippets/${slug}`} passHref>
      <Box
        key={id}
        css={{
          backgroundColor: `$slate2`,
          border: `2px solid $slate12`,
          padding: `$xs`,
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `flex-start`,
          alignItems: `center`,
          height: `calc(120px)`,
          '&:hover': {
            cursor: `pointer`,
            transform: `translateY(-4px)`,
            boxShadow: `0px 8px 6px -8px hsl(198 6.6% 15.8%)`,
          },
        }}
      >
        <Box
          css={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <Image
            src={`/static/programming-icon/${icon}.png`}
            height={64}
            width={64}
            alt="item"
          />
        </Box>
        <Box
          css={{
            marginLeft: `$xs`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `flex-start`,
            alignItems: `flex-start`,
          }}
        >
          <Paragraph css={{ fontWeight: `bold` }}>{title}</Paragraph>
          <Box
            css={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `flex-start`,
              alignItems: `center`,
            }}
          >
            {tags.map((item: string) => {
              return (
                <Caption
                  css={{
                    margin: 0,
                    marginRight: `$xs`,
                    fontWeight: `bold`,
                  }}
                  key={item}
                >
                  {`#${item}`}
                </Caption>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
