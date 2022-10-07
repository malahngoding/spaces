/**
 */
import { ReactElement, Suspense } from 'react';
import { styledSideNav, styledSideWidgets, styledVersion } from './side.css';
import dynamic from 'next/dynamic';

const LocaleSwitcherLazy = dynamic<{}>(
  (): any => import(`@modules/shared/locale-switcher`),
  {
    ssr: false,
  },
);

const ThemeSwitcherLazy = dynamic<{}>(
  (): any => import(`@modules/shared/theme-switcher`),
  {
    ssr: false,
  },
);

export const SideNav = (): ReactElement => {
  return (
    <aside>
      <div className={styledSideNav}>
        <p className={styledVersion}>
          <span>〒150-0043 東京都渋谷区道玄坂２丁目１</span>
          <br />
          <span>2 Chome-1 Dogenzaka, Shibuya City, Tokyo 150-0043, Japan</span>
          <br />
          <a
            href="https://goo.gl/maps/WKFTJCYLc5ndYJHP9"
            target="_blank"
            rel="noreferrer"
          >
            <span>→ グーグルマップで見る / View on Google</span>
          </a>
        </p>
        <div className={styledSideWidgets}>
          <Suspense fallback={` `}>
            <LocaleSwitcherLazy />
          </Suspense>
          <Suspense fallback={` `}>
            <ThemeSwitcherLazy />
          </Suspense>
        </div>
      </div>
    </aside>
  );
};
