import { useState } from 'react'
import './App.css'
import ItemCard from './ItemCard/ItemCard';
import './ItemCard/ItemCard.css';
import {nanoid} from "nanoid";

function App() {
  const [albums, setAlbums] = useState([
    {id:"1", title: "The Fame", artist: "Lady Gaga", release: "August 19, 2008", genre: "Pop", havePhysical: true},
    {id:"2", title: "...Baby One More Time", artist: "Britney Spears", release: "January 12, 1999", genre: "Pop", havePhysical: true},
    {id:"3", title: "Slut Pop", artist: "Kim Petras", release: "February 11, 2022", genre: "Dance Pop", havePhysical: false},
    {id:"4", title: "Planet Her", artist: "Doja Cat", release: "June 25, 2021", genre: "Pop", havePhysical: true},
    {id:"5", title: "Anti", artist: "Rihanna", release: "January 28, 2016", genre: "Pop", havePhysical: false},
    {id:"6", title: "Short and Sweet", artist: "Sabrina Carpenter", release: "August 23, 2024", genre: "Pop", havePhysical: false},
    {id:"7", title: "Paris", artist: "Paris Hilton", release: "August 14, 2006", genre: "Pop", havePhysical: false},
    {id:"8", title: "Spice", artist: "Spice Girls", release: "November 4, 1996", genre: "Pop", havePhysical: true},
    {id:"9", title: "Love. Angel. Music. Baby", artist: "Gwen Stefani", release: "November 12, 2004", genre: "Pop", havePhysical: true}
  ]);

  function deleteCard(id) {
    const updatedArray = albums.filter((femaleAlbums) => {
      return femaleAlbums.id !== id; //will skip item with matching id
    })
    setAlbums(updatedArray)
  }

  function duplicateCard(id) {
    const matchingAlbum = albums.find((femaleAlbums) => {
      return femaleAlbums.id === id
    });
    const updatedAlbum = {...matchingAlbum, id: nanoid()}
    setAlbums([...albums, matchingAlbum]);
  }

  return (
    <div className="page">
    <h2>Female Pop Albums</h2>

      <div className="collection">
        {albums.map((femaleAlbums) => {
          return(
            <ItemCard 
            key={femaleAlbums.id} 
            deleteFn={deleteCard}
            duplicateFn={duplicateCard}
            {...femaleAlbums}/>
          )
        })}
      </div>
    </div>
  )
}

export default App
