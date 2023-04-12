import getSpell from './getSpell';
import spellsFromAPI from './spellsFromAPI';

const getSpellsArray = async (param = '') => {
  const res = await spellsFromAPI(param);
  if (!res.results) {
    const found = [];
    found.push(res);
    return found;
  }
  const { results } = res;
  const spells = await Promise.all(results.map((element) => getSpell(element.url)));
  return spells;
};
export default getSpellsArray;
