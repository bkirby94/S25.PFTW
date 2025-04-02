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
        <li>
          {/* Placeholder for additional navigation */}
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path=":slug" element= {<Song />} />
    </Routes>

    </>
  )
}

export default App
