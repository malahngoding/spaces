/* 3rd Party Modules Import */
import Image from 'next/image';
import Link from 'next/link';
/* Internal Modules Import */
import { Box } from '@components/design/box';
import { Caption, Paragraph } from '@components/design/typography';
/* Types Import */
/**
 * Props Declaration
 * @private
 */
export interface SnippetCardProps {
  title: string;
  icon:
    | 'javascript'
    | 'golang'
    | 'css'
    | 'solidity'
    | 'php'
    | 'bash'
    | 'typescript'
    | string;
  tags: string[];
  slug: string;
}
/**
 * Component Declaration
 * @public
 */
export const SnippetCard = (props: SnippetCardProps) => {
  const { title, icon, tags, slug } = props;
  return (
    <Link href={`/learn/snippets/${slug}`} passHref>
      <Box
        as="a"
        key={slug}
        css={{
          backgroundColor: `$slate1`,
          border: `2px solid $slate8`,
          padding: `$xs`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `flex-start`,
          alignItems: `flex-start`,
          '&:hover': {
            cursor: `pointer`,
            border: `2px solid ${getBackgroundColor(icon)}`,
            backgroundColor: `$slate2`,
            transform: 'translateY(-4px)',
            boxShadow: `5px 5px`,
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
            height={32}
            width={32}
            alt="item"
          />
        </Box>
        <Box
          css={{
            marginTop: `$xs`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            alignItems: `space-between`,
          }}
        >
          <Paragraph>{title}</Paragraph>
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
/**
 * Internal Component Declaration
 * @private
 */
const getBackgroundColor = (icon: string): string => {
  switch (icon) {
    case 'javascript':
      return `$sweet5`;
    case 'golang':
      return `$sweet12`;
    case 'css':
      return `$sweet3`;
    case 'solidity':
      return `$sweet14`;
    case 'php':
      return `$sweet11`;
    case 'bash':
      return `$sweet7`;
    case 'typescript':
      return `$sweet10`;
    default:
      return `$sweet13`;
  }
};
