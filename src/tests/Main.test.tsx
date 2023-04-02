import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WrappedApp } from '../App';
import spells from '../components/spells';

describe('Main', () => {
  it('Renders Spellcards', () => {
    render(<WrappedApp />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  it('Displays the correct number of spellcards', async () => {
    render(<WrappedApp />);
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(spells.length);
  });
});
