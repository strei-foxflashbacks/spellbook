import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from '../App';

describe('App', () => {
  it('Renders main page', () => {
    render(<WrappedApp />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Ready to cast?');
  });
  it('Renders NotFound for invalid path', () => {
    const badRoute = '/some/bad/route';

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('No such page');
  });
  it('Renders About page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About us');
  });
  it('Renders Form page', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Game sheldue');
  });
});
