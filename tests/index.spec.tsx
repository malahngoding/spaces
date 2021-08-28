import { render, screen, waitFor } from '@testing-library/react';
import Home from '../src/pages/index';

it(`Render button correctly`, async () => {
  render(<Home />);

  await waitFor(() => screen.getByTestId(`welcome-text`));

  expect(screen.getByTestId(`welcome-text`)).toHaveTextContent(
    `Welcome to Next.js!`,
  );
});
