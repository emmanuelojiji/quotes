import "./App.scss";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App(props) {
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <>
      <div className="App">
        <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
