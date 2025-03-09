import "./App.css"
import Album from "./Album"
import Key from "./Key";

function App() {
  const albums = [
    {id:1, name: "The Fame", artist: "Lady Gaga", release: "August 19, 2008", genre: "Pop", havePhysical: true},
    {id:2, name: "...Baby One More Time", artist: "Britney Spears", release: "January 12, 1999", genre: "Pop", havePhysical: true},
    {id:3, name: "Slut Pop", artist: "Kim Petras", release: "February 11, 2022", genre: "Dance Pop", havePhysical: false},
    {id:4, name: "Planet Her", artist: "Doja Cat", release: "June 25, 2021", genre: "Pop", havePhysical: true},
    {id:5, name: "Anti", artist: "Rihanna", release: "January 28, 2016", genre: "Pop", havePhysical: false},
    {id:6, name: "Short and Sweet", artist: "Sabrina Carpenter", release: "August 23, 2024", genre: "Pop", havePhysical: false}
  ]

  return (
    <div className="page">
      <div className="content">
      <h2>Female Pop Albums: Show and Tell</h2>
      <table style={{ marginBottom:"20px"}}>
        <thead>
          <tr>
            <td>Album</td>
            <td>Artist</td>
            <td>Release Date</td>
            <td>Genre</td>
          </tr>
        </thead>
        <tbody>
          {albums.map((album, albumIdx)=>{  
            const isOddRow = albumIdx % 2 !== 0;

            return(
              <Album key={album.id} albumDetails={album} isOddRow={isOddRow}/>
            )
          }
          )}
        </tbody>
      </table>

      <Key/>
      </div>
  </div>
  )
}

export default App
