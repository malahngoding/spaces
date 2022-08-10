/*
 */
import { BaseLayout } from '@layouts/base';
import type { NextPage } from 'next';
import { Vertical } from '@components/box/vertical';
/*
 *
 */
export const HomePage: NextPage = () => {
  return (
    <BaseLayout>
      {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((item: number) => {
        return (
          <div key={item}>
            <h1 style={{ fontWeight: item }}>
              Welcome to <span className="berak">{item}</span>
            </h1>
            <Vertical />
          </div>
        );
      })}
    </BaseLayout>
  );
};

export default HomePage;
