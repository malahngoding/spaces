/**
 */
import { Fragment } from 'react';
import { InsteadLocale } from '@modules/i18n';
import Link from 'next/link';
import type { ReactElement } from 'react';
import { useI18n } from 'next-rosetta';
import { useRouter } from 'next/router';
/**
 */
const LocaleSwitcher = (): ReactElement => {
  const { locale, locales, asPath } = useRouter();
  const { t } = useI18n<InsteadLocale>();

  return (
    <div>
      {locales?.map((loc) => {
        const isActive = loc === locale;
        return (
          <Fragment key={loc}>
            <Link href={asPath} locale={loc}>
              <a>
                <span style={{ fontWeight: isActive ? 900 : 300 }}>
                  Location: {loc}
                </span>
              </a>
            </Link>
            <br />
          </Fragment>
        );
      })}
    </div>
  );
};

export default LocaleSwitcher;
