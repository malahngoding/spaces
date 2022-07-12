/** 3rd Party Modules Import */
/** Internal Modules Import */
import { Box } from '@components/design/box';
import { PlainButton } from '@components/design/button';
import { Paragraph } from '@components/design/typography';
import { Avatar, AvatarImage } from '@components/navigations/avatar';
/** Types Import */
import type { ReactElement } from 'react';
/**
 * Main Component Declaration
 *
 */
interface RankCardProps {
  rank: number;
  userName: string;
  avatar: string;
  score: string;
}
export const RankCard = (props: RankCardProps): ReactElement => {
  return (
    <RankCardWrapper>
      <MediaAvatar avatar={props.avatar} />
      <Description
        rank={props.rank}
        score={props.score}
        userName={props.userName}
      />
    </RankCardWrapper>
  );
};
/**
 * Internal Component Declaration
 *
 */
interface RankCardWrapperProps {
  children: ReactElement[];
}
const RankCardWrapper = (props: RankCardWrapperProps): ReactElement => {
  return (
    <Box
      css={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `flex-start`,
        alignItems: `center`,
        border: `2px solid $slate6`,
        padding: `$xxs`,
        '&:hover': {
          boxShadow: `5px 5px`,
          cursor: `pointer`,
        },
      }}
    >
      {props.children}
    </Box>
  );
};
interface MediaAvatarProps {
  avatar: string;
}
const MediaAvatar = (props: MediaAvatarProps): ReactElement => {
  return (
    <PlainButton>
      <Avatar>
        <AvatarImage
          src={`https://avatars.dicebear.com/api/miniavs/${props.avatar}.svg?w=128`}
          role="button"
        />
      </Avatar>
    </PlainButton>
  );
};
interface DescriptionProps {
  rank: number;
  score: string;
  userName: string;
}
const Description = (props: DescriptionProps): ReactElement => {
  return (
    <Box css={{ marginLeft: `$xxs` }}>
      <Paragraph css={{ margin: 0, fontWeight: `bolder` }}>
        #{props.rank} - {props.score}pts
      </Paragraph>
      <Paragraph css={{ margin: 0 }}>{props.userName}</Paragraph>
    </Box>
  );
};
