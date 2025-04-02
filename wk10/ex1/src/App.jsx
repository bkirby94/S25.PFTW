import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { Llamas } from './views/Llamas'
import { Alpaca } from './views/Alpaca'

function App() {

  return (
    <>

    {/* Navigation here */}
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/llamas">Llamas</Link></li>
        <li><Link to="/alpaca">Alpaca</Link></li>
      </ul>
    </nav>

    {/* Routes here */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/llamas" element={<Llamas />} />
        <Route path="/alpaca" element={<Alpaca />} />
    </Routes>

    </>
  )
}

export default App
