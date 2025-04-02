import musicData from "../assets/music-list.json";

export function Home () {

    return (
        <div>
            <h1>Music List</h1>
            {musicData.map((song) => {
                <div key={song.slug}>
                <img src={song.cover} alt={song.title} />
                <p><strong>{song.title} by {song.artist}</strong></p>
                </div>
            })}
        </div>
    )
}