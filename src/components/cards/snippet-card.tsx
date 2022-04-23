import Image from 'next/image';
import Link from 'next/link';

import { Box } from '@components/design/box';
import { Caption, Paragraph } from '@components/design/typography';
import { keyframes } from '@config/stitches.config';

export interface SnippetCardProps {
  id: number;
  title: string;
  icon: 'javascript' | 'golang' | 'css' | 'solidity' | string;
  tags: string[];
  slug: string;
}

const scaleUp = keyframes({
  '0%': { transform: 'translateY(0px)', backgroundColor: `none` },
  '100%': { transform: 'translateY(-4px)', backgroundColor: `$slate2` },
});

export const SnippetCard = (props: SnippetCardProps) => {
  const { id, title, icon, tags, slug } = props;
  return (
    <Link href={`/learn/snippets/${slug}`} passHref>
      <a>
        <Box
          key={id}
          css={{
            backgroundColor: `$slate1`,
            border: `2px solid $slate2`,
            padding: `$xs`,
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `flex-start`,
            alignItems: `center`,
            transform: 'translateY(0px)',
            height: `calc(120px)`,
            '&:hover': {
              cursor: `pointer`,
              backgroundColor: `$slate2`,
              animation: `${scaleUp} 200ms`,
              border: `2px solid $slate2`,
              transform: 'translateY(-4px)',
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
      </a>
    </Link>
  );
};
