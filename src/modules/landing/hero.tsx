/**
 */
import { Paragraph } from '@components/typography/paragraph';
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
      <Paragraph>{props.title}</Paragraph>
      <Paragraph>{props.subtitle}</Paragraph>
      {props.mediaType === 'VIDEO' ? (
        <div>{props.mediaUrl}</div>
      ) : (
        <div>{props.mediaUrl}</div>
      )}
    </div>
  );
};
