import { Box } from '@components/design/box';
import { PlainButton } from '@components/design/button';
import { Paragraph } from '@components/design/typography';
import { Avatar, AvatarImage } from '@components/navigations/avatar';

interface RankCardProps {
  item: number;
}

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
      }}
    >
      <PlainButton>
        <Avatar>
          <AvatarImage
            src={`https://avatars.dicebear.com/api/micah/${new Date()}-${
              props.item
            }.svg?w=128`}
            role="button"
          />
        </Avatar>
      </PlainButton>
      <Box>
        <Paragraph css={{ margin: 0, fontWeight: `bolder` }}>
          #{props.item}
        </Paragraph>
        <Paragraph css={{ margin: 0 }}>#{props.item}</Paragraph>
      </Box>
    </Box>
  );
};
