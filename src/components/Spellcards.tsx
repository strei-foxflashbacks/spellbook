/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react';
import { ParamProps } from 'src/types/ParamProps';
import { Spell } from 'src/types/Spell';
import getSpellsArray from './API/getSpellsArray';
import Modal from './Modal';

function Spellcards({ index, submitCount }: ParamProps) {
  const [data, setData] = useState<Spell[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);

  const handleCardClick = (spell: Spell) => {
    setSelectedSpell(spell);
  };

  useEffect(() => {
    setData(null);
    setError(null);
    setIsLoading(true);
    async function getData() {
      try {
        const res = await getSpellsArray(index.toLowerCase().replace(/ /gi, '-'));
        setData(res as Spell[]);
        setIsLoading(false);
      } catch (err) {
        setError('No such spell in your spellbook!');
        setIsLoading(false);
      }
    }
    getData();
  }, [index, submitCount]);

  if (isLoading) {
    return <div className="spells__loading">Loading...</div>;
  }

  if (!data) {
    return <div className="spells__loading">Loading...</div>;
  }

  if (error) {
    return <div className="spells__error">{error}</div>;
  }
  try {
    const spellsList = data.map((spell): JSX.Element => {
      return (
        <li
          key={spell.index}
          id={spell.index}
          className="spells__card"
          onClick={() => {
            setIsOpen(true);
            handleCardClick(spell);
          }}
        >
          <div className={`spell__info ${spell.school.index}`}>
            <div className="spell__level">
              <i>
                {spell.level > 0
                  ? `${spell.level} Level ${spell.school.name}`
                  : `Cantrip ${spell.school.name}`}
              </i>
            </div>
            {/* <div className="spell__casting-time">
              <b>Casting time: </b>
              <i> {spell.casting_time}</i>
            </div> */}
            {/* <div className="spell__distance">
              <b>Distance: </b>
              <i>{spell.range}</i>
            </div> */}
            {/* <div className="spell__components">
              <b>Components: </b>
              <i>{spell.components.join(', ')}</i>
            </div> */}
            {/* <div className="spell__duration">
              <b>Duration: </b>
              <i>{spell.duration}</i>
            </div> */}
            <div className="spell__class">
              <b>Classes:</b>
              <i>{spell.classes.map((element) => ` ${element.name}`).join(', ')}</i>
            </div>
          </div>
          <h3 className="spell__name">{spell.name}</h3>
        </li>
      );
    });

    return (
      <>
        <ul className="spells__wrapper">{spellsList}</ul>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <div className={`modal-spell__wrapper ${selectedSpell?.school.index}`}>
            <h2 className="modal-spell__name">{selectedSpell?.name}</h2>
            <div className="modal-spell__info">
              <div className="modal-spell__summary">
                <div className="spell__level">
                  <i>
                    {`${selectedSpell?.level} Level ${selectedSpell?.school.name}`.replace(
                      /0 Level/,
                      'Cantrip'
                    )}
                  </i>
                </div>
                <div className="spell__casting-time">
                  <b>Casting time: </b>
                  <i> {selectedSpell?.casting_time}</i>
                </div>
                <div className="spell__distance">
                  <b>Distance: </b>
                  <i>{selectedSpell?.range}</i>
                </div>
                <div className="spell__components">
                  <b>Components: </b>
                  <i>{selectedSpell?.components.join(', ')}</i>
                </div>
                <div className="spell__duration">
                  <b>Duration: </b>
                  <i>{selectedSpell?.duration}</i>
                </div>
                <div className="spell__class">
                  <b>Classes:</b>
                  <i>{selectedSpell?.classes.map((element) => ` ${element.name}`).join(', ')}</i>
                </div>
              </div>
              <div className="modal-spell__description">
                <i>{selectedSpell?.desc}</i>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  } catch (err) {
    return <div className="spells__error">No such spell in your spellbook!</div>;
  }
}
export default Spellcards;
