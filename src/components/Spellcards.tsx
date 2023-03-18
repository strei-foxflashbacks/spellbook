import spells from './spells';

function Spellcards() {
  const spellsList = spells.map((spell): JSX.Element => {
    return <li key={spell.index}>{spell.name}</li>;
  });

  return <ul>{spellsList}</ul>;
}
export default Spellcards;
