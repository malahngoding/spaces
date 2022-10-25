/**
 *
 */
import { InsteadLocale } from '../../modules/i18n';
import Link from 'next/link';
import { Paragraph } from '../../components/typography/paragraph';
import type { ReactElement } from 'react';
import { styledNavigationSheet } from './sheet.css';
import { useI18n } from 'next-rosetta';
import { useNavigationSheet } from './sheet.store';

export const Sheet = (): ReactElement => {
  const { t } = useI18n<InsteadLocale>();

  const toggleNavigationSheet = useNavigationSheet(
    (state) => state.toggleNavigationSheet,
  );

  const links = [
    { url: `/learn`, title: t('navigations.learn') },
    { url: `/camps`, title: t('navigations.camps') },
    { url: `/experiments`, title: t('navigations.experiments') },
    { url: `/about-us`, title: t('navigations.aboutUs') },
  ];

  return (
    <div className={styledNavigationSheet}>
      {links.map((item) => {
        return (
          <Link key={item.title} passHref href={item.url}>
            <button onClick={toggleNavigationSheet}>
              <Paragraph>{`/${item.title}`}</Paragraph>
            </button>
          </Link>
        );
      })}
    </div>
  );
};
