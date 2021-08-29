import { BaseLayout } from '@layouts/base';

export default function Home() {
  return (
    <BaseLayout title="Hello World!">
      <h1 data-testid="welcome-text">Welcome to Next.js!</h1>
      <section>
        <h1>Typography</h1>
        <p>Stuff</p>
        <h1 className="black">The quick brown fox jump over the lazy dog</h1>
        <h2 className="bold">The quick brown fox jump over the lazy dog</h2>
        <h3 className="medium">The quick brown fox jump over the lazy dog</h3>
        <h4 className="light">The quick brown fox jump over the lazy dog</h4>
      </section>
      <style jsx>{`
        .black {
          font-weight: 900;
        }
        .bold {
          font-weight: 700;
        }
        .medium {
          font-weight: 400;
        }
        .light {
          font-weight: 300;
        }
      `}</style>
    </BaseLayout>
  );
}
