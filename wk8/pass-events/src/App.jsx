import { useState } from 'react'
import './App.css'
import CatBreedComponent from "./CatBreedComponent";

function App() {
  const [headline, setHeadline] = useState("List of Cat Breeds");
  const [catBreeds, setCatBreeds] = useState([
    "Abyssinian",
    "American Shorthair",
    "Balinese",
    "Bengal",
    "Birman",
    "Bombay",
    "British Shorthair",
    "Burmese",
    "Chartreux",
    "Cornish Rex",
    "Devon Rex",
    "Egyptian Mau",
    "Exotic Shorthair",
    "Himalayan",
    "Japanese Bobtail",
    "Maine Coon",
    "Manx",
    "Norwegian Forest Cat",
    "Ocicat",
    "Oriental Shorthair",
    "Persian",
    "Ragdoll",
    "Russian Blue",
    "Scottish Fold",
    "Siamese",
  ]);
  function deleteBreed(breedName) {
    const updatedArray = catBreeds.filter((breed) => {
      return breed !== breedName;
    });
    setCatBreeds(updatedArray);
  }

  function focusBreed(breedName) {
    setHeadline(breedName);
  }

  return (
    <>
          <h1>{headline}</h1>
          {catBreeds.map((myBreed) => {
            return (
              <CatBreedComponent
                key={myBreed}
                breedName={myBreed}
                deleteFn={deleteBreed}
                focusFn={focusBreed}
              />
            );
          })}
        </>
  );
}

export default App
