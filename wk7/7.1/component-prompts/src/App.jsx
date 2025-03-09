import Camelid from './components/camelid';

import llamaImage from "./images/llama.jpg";
import alpacaImage from "./images/alpaca.jpg";

function App() {
const camelidData = [
  {name: "Llama", imageUrl: llamaImage, fact: "Llamas have wide set eyes which can see almost 260 degrees"},
  {name: "Alpaca", imageUrl: alpacaImage, fact: "Alpaca stomachs have three chambers"}
 ]

  return (
  <div>
    <h1>Camelids</h1>
    <Camelid camelid={camelidData[0]} />
    <Camelid camelid={camelidData[1]} />
  </div>
  )
}

export default App;
