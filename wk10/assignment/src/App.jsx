import { Routes, Route } from "react-router-dom";
import './App.css';
import { AlbumDetail } from "./views/AlbumDetail.jsx";
import { Home } from "./views/home.jsx";
import albumData from "./assets/album-list.json";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<AlbumDetail data={albumData} />} />
    </Routes>
  );
}

export default App;
