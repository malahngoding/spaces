/**
 */
import { styledFooter, styledWall } from './footer.css';
import { InsteadLocale } from '@modules/i18n';
import Link from 'next/link';
import { Paragraph } from '@components/typography/paragraph';
import type { ReactElement } from 'react';
import { getCurrentYear } from '@utils/index';
import { useI18n } from 'next-rosetta';

export const Footer = (): ReactElement => {
  const { t } = useI18n<InsteadLocale>();

  return (
    <div className={styledFooter}>
      <Paragraph>
        <span>{t(`footer.rights`)}</span>
        <br />
        <span>
          {t(`footer.secondRights`, { getCurrentYear: getCurrentYear() })}
        </span>
      </Paragraph>
      <br />
      <SocialMedia />
      <br />
      <Haiku />
    </div>
  );
};

const SocialMedia = (): ReactElement => {
  return (
    <div>
      <a
        href="https://github.com/malahngoding"
        target="_blank"
        rel="noreferrer"
        style={{ margin: `0px 8px 0px 8px` }}
      >
        Github
      </a>
      <a
        href="https://www.youtube.com/channel/UCKMCYwl48GRxkKP0c92GOJQ"
        target="_blank"
        rel="noreferrer"
        style={{ margin: `0px 8px 0px 8px` }}
      >
        Youtube
      </a>
      <a
        href="https://tiktok.com/@malahngoding"
        target="_blank"
        rel="noreferrer"
        style={{ margin: `0px 8px 0px 8px` }}
      >
        Tiktok
      </a>
      <a
        href="https://instagram.com/malahngoding"
        target="_blank"
        rel="noreferrer"
        style={{ margin: `0px 8px 0px 8px` }}
      >
        Instagram
      </a>
    </div>
  );
};

const Haiku = (): ReactElement => {
  return (
    <div className={styledWall}>
      <span>古池や 蛙飛び込む 水の音</span>
      <span>春の海　ひねもすのたり　のたりかな</span>
      <span>痩蛙　負けるな一茶　是にあり</span>
      <span>菜の花や　月は東に　日は西に</span>
      <span>閑けさや　岩にしみいる　蝉の声</span>
    </div>
  );
};
