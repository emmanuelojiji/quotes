import Quotes from "../QuoteDatabase";
import { useState } from "react";
import "./Quote.scss";

const Quote = (props) => {
  let randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)];

  const [currentQuote, setCurrentQuote] = useState(randomQuote);

  const changeQuote = () => {
    randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
    setCurrentQuote(randomQuote);
  };

  const [refreshClicked, setRefreshClicked] = useState(false);

  return (
    <>
      <div class="quote-container" style={{backgroundColor:props.backgroundColor }}>
        <div className="quote-header">
          <h2 className="affirmation">Your Affirmation</h2>
        </div>
        <span className="quote">{currentQuote}</span>

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
                changeQuote();
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
            href={`https://twitter.com/intent/tweet?text=${currentQuote}`}
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

export default Quote;
