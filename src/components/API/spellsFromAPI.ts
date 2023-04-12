import { APIResponse } from 'src/types/APIResponse';

const spellsFromAPI = async (param = '') => {
  const res = await fetch(`https://www.dnd5eapi.co/api/spells/${param}`);
  const data: APIResponse = await res.json();
  return data;
};
export default spellsFromAPI;
