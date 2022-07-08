/* 3rd Party Modules Import */
/* Internal Modules Import */
import { Box } from '@components/design/box';
/* Types Import */
import type { ReactElement } from 'react';
/**
 * Internal Type Declaration
 * @private
 */
/**
 * Component Props Declaration
 * @private
 */
interface CryptoCardProps {
  mnt: string;
  gas: string;
  currentAddress: string;
  image: string;
  description: string;
}
/**
 * Component Declaration
 * @public
 */
export const CryptoCard = (props: CryptoCardProps): ReactElement => {
  return (
    <>
      <Box
        css={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `flex-start`,
          alignItems: `flex-start`,
          border: `2px solid $slate12`,
          paddingBottom: `$xs`,
          width: `100%`,
          '@sm': {
            width: 280,
          },
        }}
      >
        <Box
          as="video"
          autoPlay={true}
          playsInline={true}
          loop={true}
          muted={true}
          css={{
            width: `100%`,
            '@sm': {
              width: 280,
            },
          }}
        >
          <source src={props.image} />
        </Box>
        <Box
          css={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `flex-start`,
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
            {props.mnt}
          </Box>
          <Box
            css={{
              fontSize: `$sm`,
              fontWeight: `bold`,
              paddingX: `$xs`,
            }}
            as="h5"
          >
            {props.gas}
          </Box>
          <Box as="p" css={{ wordWrap: `break-word`, padding: `$xs` }}>
            {props.currentAddress.slice(0, 6)}
            {`...`}
            {props.currentAddress.substring(props.currentAddress.length - 6)}
          </Box>
          <Box as="p" css={{ wordWrap: `break-word`, padding: `$xs` }}>
            {props.description}
          </Box>
        </Box>
      </Box>
    </>
  );
};
/**
 * Internal Component Declaration
 * @private
 */
