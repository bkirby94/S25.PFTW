import { useState } from 'react'
import './App.css'

const llamaImg = "/llama.jpg";
const alpacaImg = "/alpaca.jpg";
const cardImg = "/camelidCard.jpg";

function App() {
  const [image, setImage] = useState(cardImg);

  return (
    <div className="container">
      <h2>Swap Camelid Images</h2>
      <img
        src={image}
        alt="Choose your Camelid below"
        className="camelid-card"
      />

      <div className="button.container">
        <button onClick={() => setImage(alpacaImg)}>Alpaca</button>
        <button onClick={() => setImage(llamaImg)}>Llama</button>
      </div>
    </div>
  );
}

export default App
