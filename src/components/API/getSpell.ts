import { Spell } from 'src/types/Spell';

const getSpell = async (url: string) => {
  const res = await fetch(` https://www.dnd5eapi.co${url}`);
  const spell: Spell = await res.json();
  return spell;
};
export default getSpell;
