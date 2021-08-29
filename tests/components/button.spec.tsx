import { render, screen, waitFor } from '@testing-library/react';
import { Button } from '@components/button';

it(`Render button correctly`, async () => {
  render(<Button>Testing</Button>);

  await waitFor(() => screen.getByRole(`button`));

  expect(screen.getByRole(`button`)).toHaveTextContent(`Testing`);
});
