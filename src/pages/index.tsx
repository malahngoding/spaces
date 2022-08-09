/*
 */
import type { NextPage } from 'next';
/*
 *
 */
export const HomePage: NextPage = () => {
  return (
    <div>
      {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((item: number) => {
        return (
          <h1 key={item} style={{ fontWeight: item }}>
            Welcome to {item}
          </h1>
        );
      })}
    </div>
  );
};

export default HomePage;
