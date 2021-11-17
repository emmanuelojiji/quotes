import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";

function App(props) {
  return (
    <>
      <div className="App">
      <Menu />
        <main>
          <Header />
          <Home />
        </main>
        
      </div>
    </>
  );
}

export default App;
