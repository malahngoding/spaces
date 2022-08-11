/**
 */
import type { ReactElement } from 'react';

interface HeroInterface {
  title: string;
  subtitle: string;
  mediaUrl: string;
  mediaType: 'VIDEO' | 'IMAGE';
}
export const Hero = (props: HeroInterface): ReactElement => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.subtitle}</div>
      {props.mediaType === 'VIDEO' ? (
        <div>{props.mediaUrl}</div>
      ) : (
        <div>{props.mediaUrl}</div>
      )}
    </div>
  );
};
