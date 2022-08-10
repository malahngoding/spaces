/*
 */
import type { GetStaticProps, NextPage } from 'next';
import { I18nProps, useI18n } from 'next-rosetta';
import { BaseLayout } from '@layouts/base';
import type { InsteadLocale } from '@modules/i18n';
import { Vertical } from '@components/box/vertical';
import dynamic from 'next/dynamic';
/*
 *
 */
const LocaleSwitcherLazy = dynamic(
  (): any =>
    import(`@modules/shared/locale-switcher`).then((mod) => mod.LocaleSwitcher),
  { ssr: false },
);
/**
 */
export const HomePage: NextPage = (props: any) => {
  const { t } = useI18n<InsteadLocale>();

  return (
    <BaseLayout>
      <div>
        {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((item: number) => {
          return (
            <div key={item}>
              <h1 style={{ fontWeight: item }}>
                {t('title')} <span className="berak">{item}</span>
              </h1>
              <Vertical />
            </div>
          );
        })}
      </div>
      <LocaleSwitcherLazy />
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps<I18nProps<InsteadLocale>> = async (
  context,
) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`@modules/i18n/${locale}`);
  return {
    props: { table },
  };
};

export default HomePage;
