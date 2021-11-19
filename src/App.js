import "./App.scss";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App(props) {
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    console.log(currentPage);
  });

  return (
    <>
      <div className="App">
        <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main>
          <Header />

          {(() => {
            if (currentPage === "Home") {
              return <Home />;
            } else if (currentPage === "SignUp") {
              return <SignUp />;
            } else {
              return <Home />;
            }
          })()}
        </main>
      </div>
    </>
  );
}

export default App;
