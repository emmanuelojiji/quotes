import Quotes from "../QuoteDatabase";
import { useState } from "react";
import "./Quote.scss";
import ChristianVerse from "../ChristianVerseDatabase";
import IslamicVerse from "../IslamicVerseDatabase";
import { useEffect } from "react";

const Verse = (props) => {
  const [refreshClicked, setRefreshClicked] = useState(false);
  const [verseMenuOpen, setVerseMenuOpen] = useState(false);
  const [religionSelected, setReligionSelected] = useState("christian");

  let randomAffirmation = Quotes[Math.floor(Math.random() * Quotes.length)];
  const [currentAffirmation, setCurrentAffirmation] =
    useState(randomAffirmation);

  const changeAffirmation = () => {
    randomAffirmation = Quotes[Math.floor(Math.random() * Quotes.length)];
    setCurrentAffirmation(randomAffirmation);
  };

  let randomChristianVerse =
    ChristianVerse[Math.floor(Math.random() * ChristianVerse.length)];

  const [currentChristianVerse, setCurrentChristianVerse] =
    useState(randomChristianVerse);

  const changeChristianVerse = () => {
    randomChristianVerse =
      ChristianVerse[Math.floor(Math.random() * ChristianVerse.length)];
    setCurrentChristianVerse(randomChristianVerse);
  };

  let randomIslamicVerse =
    IslamicVerse[Math.floor(Math.random() * IslamicVerse.length)];
  const [currentIslamicVerse, setCurrentIslamicVerse] =
    useState(randomIslamicVerse);

  const changeIslamicVerse = () => {
    randomIslamicVerse =
      IslamicVerse[Math.floor(Math.random() * IslamicVerse.length)];
    setCurrentIslamicVerse(randomIslamicVerse);
  };

  useEffect(() => {
    setCurrentAffirmation(randomAffirmation);
    setCurrentChristianVerse(randomChristianVerse);
    setCurrentIslamicVerse(randomIslamicVerse);
  }, []);

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
                  religionSelected == "christian"
                    ? changeChristianVerse()
                    : changeIslamicVerse();

                  verseMenuOpen
                    ? setVerseMenuOpen(false)
                    : setVerseMenuOpen(true);
                }}
              >
                New verse
              </span>
              <a
                href={
                  religionSelected == "christian"
                    ? `https://twitter.com/intent/tweet?text=${currentChristianVerse.verse}. ${currentChristianVerse.passage1}, ${currentChristianVerse.passage2}`
                    : `https://twitter.com/intent/tweet?text=${currentIslamicVerse.verse}. ${currentIslamicVerse.passage1}`
                }
              >
                Share as Tweet
              </a>
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
      </div>
    </>
  );
};

export default Verse;
