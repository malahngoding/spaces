import { render, screen } from '@testing-library/react';
import { BaseLayout } from '@layouts/base';

it(`Render layout`, async () => {
  render(
    <BaseLayout title="Any String">
      <div data-testid="TESTING">Yo this is rendered bruv</div>
    </BaseLayout>,
  );
  expect(screen.getByTestId(`TESTING`)).toHaveTextContent(
    `Yo this is rendered bruv`,
  );
});
