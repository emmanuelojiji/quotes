import "./App.css";
import { useState } from "react";
import Quote from "./components/Quote";
import Quotes from "./fonts/QuoteDatabase";

function App(props) {
  let randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)];

  const [currentQuote, setCurrentQuote] = useState(randomQuote);

  console.log(randomQuote);

  const newDate = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let day = days[newDate.getDay()];

  const changeQuote = () => {
    randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
    setCurrentQuote(randomQuote);
  };

  return (
    <>
      <header className="page-container">
        <span style={{ color: "white" }}>{day}</span>
      </header>

      <section className="billboard">
        <div className="billboard-wrap page-container">
          <Quote quote={currentQuote} />
          <div className="shuffle-tweet">
            <span onClick={() => changeQuote()} className="shuffle">Shuffle</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${currentQuote}`}
              target="_blank"
            >
              Tweet
            </a>
          </div>
        </div>
      </section>

      <footer className="page-container">
        <span>Created by Emmanuel Ojiji</span>
      </footer>
    </>
  );
}

export default App;
