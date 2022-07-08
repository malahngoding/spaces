/* 3rd Party Modules Import */
import { UilPlay, UilPause } from '@iconscout/react-unicons';
/* Internal Modules Import */
import { SmallButton } from '@components/design/button';
import { useWarnMarquee } from '@store/marquee-store';
/* Types Import */
/**
 * Props Declaration
 * @private
 */
/**
 * Component Declaration
 * @public
 */
export const MarqueeToggle = () => {
  const shown = useWarnMarquee((state) => state.shown);
  const marqueeToggle = useWarnMarquee((state) => state.toggleMarquee);

  return (
    <SmallButton
      onClick={() => {
        marqueeToggle();
      }}
      alternative="secondary"
      css={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      {shown ? <UilPause /> : <UilPlay />}
    </SmallButton>
  );
};
/**
 * Internal Component Declaration
 * @private
 */
