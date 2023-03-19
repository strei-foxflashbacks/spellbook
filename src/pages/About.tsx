/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <header className="header">
        <h1>About us</h1>
        <Link to="/" className="header__link">
          Home
        </Link>
      </header>
      <article className="about">
        <section className="about__text">
          <div className="about__paragraph">
            Hi! If you are already a huge D&D fun just like me, you already know what to do in this
            app. <br /> If not, I'll quickly explain what is going on here.
          </div>
          <div className="about__paragraph">
            Dungeons and Dragons (or D&D) is a tabletop roleplaying game, where just like in any
            other RPG, you can choose your character to be a spellcaster. <br /> Spellcasters can
            during their combat or noncombat action cast a spell using their spellslots, which are
            limited to their chosen class and level.
            <br /> There are plenty of spells out there with lots of possibilities and requirements
            so I've made this spells only based minimalistic app to help players through their magic
            journeys.
          </div>
          <div className="about__paragraph conclusion">I hope you like it!</div>
          <img src="./src/assets/nat20.png" alt="natural 20" className="about__img" />
        </section>
      </article>
    </>
  );
}
export default About;
