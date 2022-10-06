/**
 */
import { count, countAction } from './hero.store';
import { Paragraph } from '@components/typography/paragraph';
import type { ReactElement } from 'react';
import { styledHero } from './hero.css';

interface HeroInterface {
  title: string;
  subtitle: string;
  mediaUrl: string;
  mediaType: 'VIDEO' | 'IMAGE';
}
export const Hero = (props: HeroInterface): ReactElement => {
  return (
    <div className={styledHero}>
      <Paragraph>{count.get().toString()}</Paragraph>
      <button onClick={() => countAction.increment()}>[+]</button>
      <button onClick={() => countAction.decrement()}>[-]</button>
      {props.mediaType === 'VIDEO' ? (
        <div>{props.mediaUrl}</div>
      ) : (
        <div>{props.mediaUrl}</div>
      )}
    </div>
  );
};
