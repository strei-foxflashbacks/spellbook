import { useState, useEffect } from 'react';
import { ParamProps } from 'src/types/ParamProps';
import { Spell } from 'src/types/Spell';
import getSpellsArray from './API/getSpellsArray';

function Spellcards({ index, submitCount }: ParamProps) {
  const [data, setData] = useState<Spell[] | null>(null);

  useEffect(() => {
    setData(null);
    async function getData() {
      const res = await getSpellsArray(index.toLowerCase().replace(/ /gi, '-'));
      setData(res as Spell[]);
    }
    getData();
  }, [index, submitCount]);

  if (!data) {
    return <div className="spells__loading">Loading...</div>;
  }

  const spellsList = data.map((spell): JSX.Element => {
    return (
      <li key={spell.index} id={spell.index} className="spells__card">
        <div className={`spell__info ${spell.school.index}`}>
          <div className="spell__level">
            <i>
              {spell.level > 0
                ? `${spell.level} Level ${spell.school.name}`
                : `Cantrip ${spell.school.name}`}
            </i>
          </div>
          <div className="spell__casting-time">
            <b>Casting time: </b>
            <i> {spell.casting_time}</i>
          </div>
          <div className="spell__distance">
            <b>Distance: </b>
            <i>{spell.range}</i>
          </div>
          <div className="spell__components">
            <b>Components: </b>
            <i>{spell.components.join(', ')}</i>
          </div>
          <div className="spell__duration">
            <b>Duration: </b>
            <i>{spell.duration}</i>
          </div>
          <div className="spell__class">
            <b>Classes:</b>
            <i>{spell.classes.map((element) => ` ${element.name}`).join(', ')}</i>
          </div>
        </div>
        <h3 className="spell__name">{spell.name}</h3>
      </li>
    );
  });

  return <ul className="spells__wrapper">{spellsList}</ul>;
}
export default Spellcards;
