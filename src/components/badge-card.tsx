import { Box } from '@components/design/box';

interface BadgeCardProps {
  title: string;
  media: string;
  description: string;
}

export const BadgeCard = (props: BadgeCardProps) => {
  return (
    <>
      <Box
        css={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `flex-start`,
          alignItems: `flex-start`,
          marginX: `$xs`,
          marginY: `$md`,
          border: `2px solid $slate6`,
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
          <source src={props.media} />
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
    </>
  );
};
