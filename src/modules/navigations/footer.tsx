/**
 */
import { styledFooter, styledWall } from './footer.css';
import { InsteadLocale } from '@modules/i18n';
import type { ReactElement } from 'react';
import { getCurrentYear } from '@utils/index';
import { useI18n } from 'next-rosetta';

export const Footer = (): ReactElement => {
  const { t } = useI18n<InsteadLocale>();

  return (
    <div className={styledFooter}>
      <p>
        © Malah Ngoding {getCurrentYear()}. {t(`footer.rights`)}.
      </p>
      <br />
      <div className={styledWall}>
        <span>10代工学は未来の製品と</span>
        <span>コミュニケーションを生</span>
        <span>み出すスタジオです。</span>
        <span>私たちのミッションは</span>
        <span>先端工学を用いて上質で</span>
        <span>機能的なデザインの</span>
        <span>製品を作り出すことです。</span>
        <span>是非、新たなスタイルで</span>
        <span>音楽をお楽しみください。</span>
      </div>
    </div>
  );
};
