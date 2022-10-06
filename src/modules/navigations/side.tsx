/**
 */
import { ReactElement, Suspense } from 'react';
import { styledSideNav, styledVersion } from './side.css';
import dynamic from 'next/dynamic';

const LocaleSwitcherLazy = dynamic<{}>(
  (): any => import(`@modules/shared/locale-switcher`),
  {
    ssr: false,
  },
);

export const SideNav = (): ReactElement => {
  return (
    <aside>
      <div className={styledSideNav}>
        <p className={styledVersion}>
          <span>
            トレヒト / 東京都渋谷区神宮前5-36-6 ケーリーマンション2C Utrecht /
          </span>
          <br />
          <span>5-36-6 Jingumae 2C, Shibuya, Tokyo 150-0001 spanan</span>
          <br />
          <span>→ グーグルマップで見る / View on Google spans</span>
        </p>
        <Suspense fallback={` `}>
          <LocaleSwitcherLazy />
        </Suspense>
      </div>
    </aside>
  );
};
