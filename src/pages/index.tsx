/**
 */
import type { GetStaticProps, NextPage } from 'next';
import { I18nProps } from 'next-rosetta';
import type { InsteadLocale } from '@modules/i18n';
import dynamic from 'next/dynamic';
/**
 *
 */

const ThemeSwitcherLazy = dynamic(
  (): any => import(`@modules/shared/theme-switcher`),
  {
    ssr: false,
    loading: () => (
      <div style={{ height: `66.4px` }}>
        <p>Loading..</p>
      </div>
    ),
  },
);
/**
 *
 */
export const HomePage: NextPage = (props: any) => {
  return (
    <div>
      <ThemeSwitcherLazy />
      <p>PANTHASM</p>
    </div>
  );
};

export default HomePage;
/**
 *
 */
export const getStaticProps: GetStaticProps<I18nProps<InsteadLocale>> = async (
  context,
) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`@modules/i18n/${locale}`);
  return {
    props: { table },
  };
};
