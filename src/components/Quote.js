import Quotes from "../fonts/QuoteDatabase";
import { useState } from "react";

const Quote = () => {
  let randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)];

  const [currentQuote, setCurrentQuote] = useState(randomQuote);

  const changeQuote = () => {
    randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
    setCurrentQuote(randomQuote);
  };

  return (
    <>
      <h1 className="quote">{currentQuote}</h1>

      <div className="shuffle-tweet">
        <span onClick={() => changeQuote()} className="shuffle">
          Shuffle
        </span>
        <a
          href={`https://twitter.com/intent/tweet?text=${currentQuote}`}
          target="_blank"
        >
          Tweet
        </a>
      </div>
    </>
  );
};

export default Quote;
