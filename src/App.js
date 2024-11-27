import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movie from "./pages/Movie.jsx";
import Pearl from "./pages/Pearl.jsx";
import Halloween from "./pages/Halloween.jsx";
import TheHungerGames from "./pages/TheHungerGames.jsx";
import Coraline from "./pages/Coraline.jsx";
import Scream6 from "./pages/Scream6.jsx";
import Vendetta from "./pages/Vendetta.jsx";

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/movie/Pearl" element={<Pearl />} />
          <Route path="/movie/Halloween" element={<Halloween />} />
          <Route path="/movie/CatchingFire" element={<TheHungerGames />} />
          <Route path="/movie/Coraline" element={<Coraline />} />
          <Route path="/movie/ScreamVI" element={<Scream6 />} />
          <Route path="/movie/Vendetta" element={<Vendetta />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
