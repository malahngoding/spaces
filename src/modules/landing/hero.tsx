/**
 */
import { Heading, SubHeading } from '@components/typography/heading';
import { heroTitle, heroVideo, styledHero } from './hero.css';
import { Fragment } from 'react';
import Image from 'next/image';
import type { ReactElement } from 'react';
import { numberGenerator } from '@utils/number-generator';

interface HeroInterface {
  title: string;
  subTitle: string;
  random: number;
}
export const Hero = (props: HeroInterface): ReactElement => {
  const altVideos = [
    `/static/gifs/first.mp4`,
    `/static/gifs/second.mp4`,
    `/static/gifs/third.mp4`,
    `/static/gifs/forth.mp4`,
  ];

  return (
    <div className={styledHero}>
      <video autoPlay={true} muted={true} loop={true} className={heroVideo}>
        <source
          src={altVideos[props.random]}
          type="video/mp4"
          className="c-PJLV"
        />
      </video>
      <div className={heroTitle}>
        <Heading>{props.title}</Heading>
        <SubHeading>{props.subTitle}</SubHeading>
      </div>
    </div>
  );
};
