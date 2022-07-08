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
interface BadgeCardProps {
  title: string;
  media: string;
  type?: 'MOVING' | 'STILL';
  description: string;
}
/**
 * Component Declaration
 * @public
 */
export const BadgeCard = (props: BadgeCardProps): ReactElement => {
  return (
    <>
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
        {props.type === `MOVING` ? (
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
        ) : (
          <Box
            as="img"
            src={props.media}
            alt={props.description}
            css={{ height: `128px`, padding: `$xs` }}
          />
        )}
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
      </Box>
    </>
  );
};
/**
 * Internal Component Declaration
 * @private
 */
