import { useState } from 'react'
import './App.css'

function App() {
  const [llamaFact, setLlamaFact] = useState(true);

  const llamaFacts = [
    "Llama poo produces little to no odor", 
    "Llamas are close relatives of alpacas, vicuñas, and guanacos",
    "A full-grown llama can cover around 20 miles in a day",
    "Llamas are extremely social animals and love to live with herds",
    "A young or baby llama is called Cria",
    "The lifespan of the llamas is around 15 to 25 years"
    ];

    const conditionalFact = llamaFact ? llamaFacts[4] : llamaFacts[5];

  return (
  <div>
    <h1>Llama Facts</h1>
    <ul>
        <li>{llamaFacts[0]}</li>
        <li>{llamaFacts[1]}</li>
        <li>{llamaFacts[2]}</li>
        <li>{llamaFacts[3]}</li>
        <li>{conditionalFact}</li>
      </ul>
  </div>
  )
}

export default App
