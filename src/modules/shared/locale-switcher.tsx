import { InsteadLocale } from '@modules/i18n';
import Link from 'next/link';
import { useI18n } from 'next-rosetta';
import { useRouter } from 'next/router';

const LocaleSwitcher = () => {
  const { locale, locales, asPath } = useRouter();
  const { t } = useI18n<InsteadLocale>();

  return (
    <div>
      {locales?.map((loc) => {
        const isActive = loc === locale;
        return (
          <>
            <Link key={loc} href={asPath} locale={loc}>
              <a>
                <span style={{ fontWeight: isActive ? 900 : 300 }}>
                  Location: {loc}
                </span>
              </a>
            </Link>
            <br />
          </>
        );
      })}
    </div>
  );
};

export { LocaleSwitcher };
