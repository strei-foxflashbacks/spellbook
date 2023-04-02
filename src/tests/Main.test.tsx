import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WrappedApp } from '../App';

describe('Main', () => {
  it('Renders Spellcards', () => {
    render(<WrappedApp />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
