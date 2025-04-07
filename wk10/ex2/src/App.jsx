import musicData from "./assets/music-list.json";

import { Link, Route, Routes }  from 'react-router-dom';
import './App.css';
import { Home } from "./views/home.jsx";
import { Song } from "./views/song.jsx";

function App() {

  return (
    <>
    <nav> 
      <ul>
        <li>
          <Link to="/">Go Back Home</Link> 
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element= {<Home songs={musicData} />} />
      <Route path="/:slug" element= {<Song songs={musicData} />} />
    </Routes>

    </>
  )
}

export default App
