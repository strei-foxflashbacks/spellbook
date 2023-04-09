import { APIResponse } from 'src/types/APIResponse';
// import { Spell } from 'src/types/Spell';

const spellsFromAPI = async () => {
  const res = await fetch('https://www.dnd5eapi.co/api/spells');
  const data: APIResponse = await res.json();
  return data;
};
export default spellsFromAPI;
