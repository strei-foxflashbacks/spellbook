import getSpell from './getSpell';
import spellsFromAPI from './spellsFromAPI';

const getSpellsArray = async () => {
  const res = await spellsFromAPI();
  const { results } = res;
  const spells = await Promise.all(results.map((element) => getSpell(element.url)));
  return spells;
};
export default getSpellsArray;
