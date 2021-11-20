import Quotes from "../QuoteDatabase";
import { useState } from "react";
import "./Quote.scss";
import ChristianVerse from "../ChristianVerseDatabase";
import IslamicVerse from "../IslamicVerseDatabase";

const Verse = (props) => {
  let randomAffirmation = Quotes[Math.floor(Math.random() * Quotes.length)];
  const [currentAffirmation, setCurrentAffirmation] =
    useState(randomAffirmation);

  let randomChristianVerse =
    ChristianVerse[Math.floor(Math.random() * ChristianVerse.length)];
  const [currentChristianVerse, setCurrentChristianVerse] =
    useState(randomChristianVerse);

    let randomIslamicVerse =
    IslamicVerse[Math.floor(Math.random() * IslamicVerse.length)];
  const [currentIslamicVerse, setCurrentIslamicVerse] =
    useState(randomIslamicVerse);

  const changeAffirmation = () => {
    randomAffirmation = Quotes[Math.floor(Math.random() * Quotes.length)];
    setCurrentAffirmation(randomAffirmation);
  };

  const changeChristianVerse = () => {
    randomChristianVerse =
      ChristianVerse[Math.floor(Math.random() * ChristianVerse.length)];
    setCurrentChristianVerse(randomChristianVerse);
  };

  const changeIslamicVerse= () => {
    randomIslamicVerse =
      IslamicVerse[Math.floor(Math.random() * IslamicVerse.length)];
    setCurrentIslamicVerse(randomIslamicVerse);
  };

  const [refreshClicked, setRefreshClicked] = useState(false);

  const [verseMenuOpen, setVerseMenuOpen] = useState(false);

  const [religionSelected, setReligionSelected] = useState("christian");

  return (
    <>
      <div
        className="quote-container"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <div className="quote-header">
          <h2 className="affirmation">Your Daily Verse</h2>

          <div className="icon-menu-container">
            <i
              className="fas fa-ellipsis-v"
              style={{ transform: verseMenuOpen && "rotate(90deg)" }}
              onClick={() =>
                verseMenuOpen ? setVerseMenuOpen(false) : setVerseMenuOpen(true)
              }
            ></i>
            <div
              className="icon-menu"
              style={{ display: verseMenuOpen ? "block" : "none" }}
            >
              <span
                onClick={() => {
                  religionSelected == 'christian' ? changeChristianVerse() : changeIslamicVerse();
          
                  verseMenuOpen
                    ? setVerseMenuOpen(false)
                    : setVerseMenuOpen(true);
                }}
              >
                New verse
              </span>
              <span>Share as Tweet</span>
              <span
                onClick={() => {
                  setReligionSelected("christian");
                  setVerseMenuOpen(false);
                }}
              >
                Switch to Christianity
              </span>
              <span
                onClick={() => {
                  setReligionSelected("islam");
                  setVerseMenuOpen(false);
                }}
              >
                Switch to Islam
              </span>
              <span>Copy</span>
            </div>
          </div>
        </div>

        {(() => {
          if (religionSelected === "christian") {
            return (
              <div className="christian-version">
                <span className="verse">{currentChristianVerse.verse}</span>
                <span className="quote passage-1">
                  {currentChristianVerse.passage1}
                </span>
                <span className="quote passage-2">
                  {currentChristianVerse.passage2}
                </span>
              </div>
            );
          } else {
            return (
              <div className="islam-version">
                <span className="verse">{currentIslamicVerse.passage1}</span>
                <span className="quote">{currentIslamicVerse.passage2}</span>
              </div>
            );
          }
        })()}

        <div className="quote-icon-container">
          <div>
            <svg
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 511.494 511.494"
              fill="#fff"
              className={`quote-icon refresh ${refreshClicked && "spin"}`}
              onClick={() => {
                changeAffirmation();
                setRefreshClicked(true);
              }}
              onAnimationEnd={() => setRefreshClicked(false)}
            >
              <g>
                <path d="M478.291,255.492c-16.133,0.143-29.689,12.161-31.765,28.16c-15.37,105.014-112.961,177.685-217.975,162.315   S50.866,333.006,66.236,227.992S179.197,50.307,284.211,65.677c35.796,5.239,69.386,20.476,96.907,43.959l-24.107,24.107   c-8.33,8.332-8.328,21.84,0.004,30.17c4.015,4.014,9.465,6.262,15.142,6.246h97.835c11.782,0,21.333-9.551,21.333-21.333V50.991   c-0.003-11.782-9.556-21.331-21.338-21.329c-5.655,0.001-11.079,2.248-15.078,6.246l-28.416,28.416   C320.774-29.34,159.141-19.568,65.476,86.152S-18.415,353.505,87.304,447.17s267.353,83.892,361.017-21.828   c32.972-37.216,54.381-83.237,61.607-132.431c2.828-17.612-9.157-34.183-26.769-37.011   C481.549,255.641,479.922,255.505,478.291,255.492z" />
              </g>
            </svg>
          </div>
          <div>
            <svg
              id="Layer_1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              fill="#fff"
              className="quote-icon"
            >
              <path d="m13.5 19h-8a5.506 5.506 0 0 1 -5.5-5.5v-8a5.506 5.506 0 0 1 5.5-5.5h8a5.506 5.506 0 0 1 5.5 5.5v8a5.506 5.506 0 0 1 -5.5 5.5zm-8-16a2.5 2.5 0 0 0 -2.5 2.5v8a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-8a2.5 2.5 0 0 0 -2.5-2.5zm18.5 15.5v-11.5a1.5 1.5 0 0 0 -3 0v11.5a2.5 2.5 0 0 1 -2.5 2.5h-11.5a1.5 1.5 0 0 0 0 3h11.5a5.506 5.506 0 0 0 5.5-5.5z" />
            </svg>
          </div>
          <a
            href={`https://twitter.com/intent/tweet?text=${currentAffirmation}`}
            target="_blank"
            className="tweet"
          >
            Tweet
          </a>
        </div>
      </div>
    </>
  );
};

export default Verse;
