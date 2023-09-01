import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./components/Pages/Home";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          <div className="pages">
            <Home />
          </div>
        </div>

      </Router>
    </>
  );
}

export default App;
