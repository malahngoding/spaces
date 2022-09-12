/**
 */
import { InsteadLocale } from '@modules/i18n';
import type { ReactElement } from 'react';
import { getCurrentYear } from '@utils/index';
import { styledFooter } from './footer.css';
import { useI18n } from 'next-rosetta';

export const Footer = (): ReactElement => {
  const { t } = useI18n<InsteadLocale>();

  return (
    <div className={styledFooter}>
      <p>© Malah Ngoding {getCurrentYear()}. All rights reserved.</p>
    </div>
  );
};
