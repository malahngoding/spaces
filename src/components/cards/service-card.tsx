/* 3rd Party Modules Import */
import Image from 'next/image';
import Link from 'next/link';
/* Internal Modules Import */
import { Box } from '@components/design/box';
/* Types Import */
/**
 * Internal Type Declaration
 * @private
 */
/**
 * Component Props Declaration
 * @private
 */
interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
  url: string;
}
/**
 * Component Declaration
 * @public
 */
export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <Link href={props.url} passHref={true}>
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
      </Box>
    </Link>
  );
};
/**
 * Internal Component Declaration
 * @private
 */
