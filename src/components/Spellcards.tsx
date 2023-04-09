import { useState, useEffect } from 'react';
// import { Spell } from 'src/types/Spell';
// import { APIResponse } from 'src/types/APIResponse';
// import spells from './spells';
// import { Result } from 'src/types/Result';
// import spellsFromAPI from './API/spellsFromAPI';
import { Spell } from 'src/types/Spell';
import getSpellsArray from './API/getSpellsArray';

function Spellcards() {
  const [data, setData] = useState<Spell[] | null>(null);

  useEffect(() => {
    async function getData() {
      const res = await getSpellsArray();
      setData(res);
    }
    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  // const spellsList = spells.map((spell): JSX.Element => {
  //   return (
  //     <li key={spell.index} id={spell.index} className="spells__card">
  //       <div className={`spell__info ${spell.school.index}`}>
  //         <div className="spell__level">
  //           <i>
  //             {spell.level > 0
  //               ? `${spell.level} Level ${spell.school.name}`
  //               : `Cantrip ${spell.school.name}`}
  //           </i>
  //         </div>
  //         <div className="spell__casting-time">
  //           <b>Casting time: </b>
  //           <i> {spell.casting_time}</i>
  //         </div>
  //         <div className="spell__distance">
  //           <b>Distance: </b>
  //           <i>{spell.range}</i>
  //         </div>
  //         <div className="spell__components">
  //           <b>Components: </b>
  //           <i>{spell.components.join(', ')}</i>
  //         </div>
  //         <div className="spell__duration">
  //           <b>Duration: </b>
  //           <i>{spell.duration}</i>
  //         </div>
  //         <div className="spell__class">
  //           <b>Classes:</b>
  //           <i>{spell.classes.map((element) => ` ${element.name}`).join(', ')}</i>
  //         </div>
  //       </div>
  //       <h3 className="spell__name">{spell.name}</h3>
  //     </li>
  //   );
  // });

  // return <ul className="spells__wrapper">{spellsList}</ul>;
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
