import ItemCard from "../ItemCard/ItemCard.jsx";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { nanoid } from "nanoid";
import albumData from "../assets/album-list.json";


export function Home() {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
  function handleSubmitJob(data) {
    addAlbum(data);
    reset();
  }
  const [albums, setAlbums] = useState(albumData);

  function addAlbum(data) {
    // do stuff with data to add an album
    // taking existing albums and spreading a new ablum to it
    const newId = nanoid(6);
    const newAlbum = {id: newId, ...data};
    setAlbums([...albums, newAlbum]);
  }

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

  return(
    <div>
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
    
          <div>
                <form onSubmit={handleSubmit(handleSubmitJob)}>
                    <label className="form-title">Add an Album</label>
                    <div className="form-group">
                      <input type="text" placeholder="Album Title" {...register("title", {required: true})}/>
                      {errors.title && <p className="error-text">Title is required</p>}
                    </div>
    
                    <div className="form-group">
                      <input type="text" placeholder="Artist" {...register("artist", {required: true})}/>
                      {errors.artist && <p className="error-text">Artist is required</p>}
                    </div>
    
                    <div className="form-group">
                      <input type="text" placeholder="Release Date" {...register("release", {required: true})}/>
                      {errors.release && <p className="error-text">Release Date is required</p>}
                    </div>
    
                    <div className="form-group">
                      <input type="text" placeholder="Genre" {...register("genre", {required: true})}/>
                      {errors.genre && <p className="error-text">Genre is required</p>}
                    </div>
    
                    <p className="form-text">Physical Copy<input type="checkbox" {...register("havePhysical")}/></p>
                
                    <button className="submit-button" type="submit">Add Album</button>
                </form>
            </div>
    
    
        </div>
  );

}