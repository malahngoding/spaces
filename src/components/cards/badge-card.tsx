/* 3rd Party Modules Import */
/* Internal Modules Import */
import { Box } from '@components/design/box';
/* Types Import */
import type { ReactElement } from 'react';
/**
 * Main Component Declaration
 *
 */
interface BadgeCardProps {
  title: string;
  media: string;
  type?: 'MOVING' | 'STILL';
  description: string;
}
export const BadgeCard = (props: BadgeCardProps): ReactElement => {
  return (
    <BadgeWrapper>
      {props.type === `MOVING` ? (
        <MediaVideo media={props.media} />
      ) : (
        <MediaImage media={props.media} description={props.description} />
      )}
      <Description title={props.title} description={props.description} />
    </BadgeWrapper>
  );
};
/**
 * Internal Component Declaration
 *
 */
interface BadgeWrapperProps {
  children: ReactElement[];
}
const BadgeWrapper = (props: BadgeWrapperProps): ReactElement => {
  return (
    <Box
      css={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-start`,
        alignItems: `flex-start`,
        border: `2px solid $slate6`,
        paddingBottom: `$xs`,
        width: `100%`,
        height: `100%`,
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
  media: string;
}
const MediaVideo = (props: MediaVideoProps): ReactElement => {
  return (
    <Box
      as="video"
      autoPlay={true}
      playsInline={true}
      loop={true}
      muted={true}
      poster="https://i.giphy.com/media/xTkcEQACH24SMPxIQg/200w.webp"
      css={{
        width: `100%`,
        '@sm': {
          width: 280,
        },
      }}
    >
      <source src={props.media} />
    </Box>
  );
};
interface MediaImageProps {
  media: string;
  description: string;
}
const MediaImage = (props: MediaImageProps): ReactElement => {
  return (
    <Box
      as="img"
      src={props.media}
      alt={props.description}
      css={{ height: `128px`, padding: `$xs` }}
    />
  );
};
interface DescriptionProps {
  title: string;
  description: string;
}
const Description = (props: DescriptionProps): ReactElement => {
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
          fontSize: `$md`,
          fontWeight: `bold`,
          padding: `$xs`,
          fontFamily: `$brand`,
        }}
        as="h3"
      >
        {props.title}
      </Box>
      <Box as="p" css={{ wordWrap: `break-word`, padding: `$xs` }}>
        {props.description}
      </Box>
    </Box>
  );
};
