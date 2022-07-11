/* 3rd Party Modules Import */
/* Internal Modules Import */
import { Box } from '@components/design/box';
/* Types Import */
import type { ReactElement } from 'react';
/**
 * Main Component Declaration
 *
 */
interface CryptoCardProps {
  mnt: string;
  gas: string;
  currentAddress: string;
  url: string;
  description: string;
}
export const CryptoCard = (props: CryptoCardProps): ReactElement => {
  return (
    <CryptoCardWrapper>
      <MediaVideo url={props.url} />
      <CryptoInformation
        mnt={props.mnt}
        gas={props.gas}
        currentAddress={props.currentAddress}
        description={props.description}
      />
    </CryptoCardWrapper>
  );
};
/**
 * Internal Component Declaration
 *
 */
interface CryptoCardWrapperProps {
  children: ReactElement[];
}
const CryptoCardWrapper = (props: CryptoCardWrapperProps) => {
  return (
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
      {props.children}
    </Box>
  );
};
interface MediaVideoProps {
  url: string;
}
const MediaVideo = (props: MediaVideoProps) => {
  return (
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
      <source src={props.url} />
    </Box>
  );
};
interface CryptoInformationProps {
  mnt: string;
  gas: string;
  currentAddress: string;
  description: string;
}
const CryptoInformation = (props: CryptoInformationProps) => {
  return (
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
  );
};
