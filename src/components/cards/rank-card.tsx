/* 3rd Party Modules Import */
/* Internal Modules Import */
import { Box } from '@components/design/box';
import { PlainButton } from '@components/design/button';
import { Paragraph } from '@components/design/typography';
import { Avatar, AvatarImage } from '@components/navigations/avatar';
/* Types Import */
/**
 * Internal Type Declaration
 * @private
 */
/**
 * Component Props Declaration
 * @private
 */
interface RankCardProps {
  rank: number;
  userName: string;
  avatar: string;
  score: string;
}
/**
 * Component Declaration
 * @public
 */
export const RankCard = (props: RankCardProps) => {
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
      <PlainButton>
        <Avatar>
          <AvatarImage
            src={`https://avatars.dicebear.com/api/miniavs/${props.avatar}.svg?w=128`}
            role="button"
          />
        </Avatar>
      </PlainButton>
      <Box css={{ marginLeft: `$xxs` }}>
        <Paragraph css={{ margin: 0, fontWeight: `bolder` }}>
          #{props.rank} - {props.score}pts
        </Paragraph>
        <Paragraph css={{ margin: 0 }}>{props.userName}</Paragraph>
      </Box>
    </Box>
  );
};
/**
 * Internal Component Declaration
 * @private
 */
