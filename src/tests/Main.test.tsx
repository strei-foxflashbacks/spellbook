import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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
  it('Should update message and localStorage on input change', () => {
    const { getByPlaceholderText } = render(<WrappedApp />);
    const input = getByPlaceholderText('search spells') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test message' } });
    expect(input.value).toBe('test message');
    expect(localStorage.getItem('spell')).toBe('test message');
  });
});
