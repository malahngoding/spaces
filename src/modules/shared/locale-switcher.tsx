/**
 */
import { InsteadLocale } from '@modules/i18n';
import Link from 'next/link';
import type { ReactElement } from 'react';
import { useI18n } from 'next-rosetta';
import { useRouter } from 'next/router';
/**
 */
const LocaleSwitcher = (): ReactElement => {
  const { locale, asPath } = useRouter();
  const { t } = useI18n<InsteadLocale>();

  return (
    <div>
      {locale === `en` ? (
        <Link href={asPath} locale={`id`}>
          <a>
            <UnitedKingdomFlag />
          </a>
        </Link>
      ) : (
        <Link href={asPath} locale={`en`}>
          <a>
            <IndonesianFlag />
          </a>
        </Link>
      )}
    </div>
  );
};

/**
 * Flag
 */
const UnitedKingdomFlag = (): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-gb"
      viewBox="0 0 640 480"
      style={{ width: `42px`, border: `2px solid #151718` }}
    >
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path
        fill="#FFF"
        d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
      />
      <path
        fill="#C8102E"
        d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
      />
      <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
      <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
    </svg>
  );
};

const IndonesianFlag = (): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-id"
      viewBox="0 0 640 480"
      style={{ width: `42px`, border: `2px solid #151718` }}
    >
      <path fill="#e70011" d="M0 0h640v240H0Z" />
      <path fill="#fff" d="M0 240h640v240H0Z" />
    </svg>
  );
};
/**
 *
 */
export default LocaleSwitcher;
