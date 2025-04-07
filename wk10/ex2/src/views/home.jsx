import { Link, useParams }  from 'react-router-dom';

export function Home ({songs}) {
    return (
        <div>
            <h1>Music List</h1>
            {songs.map((song) => 
                (
                <div key={song.slug}>
                <img src={song.cover} alt={song.title} />
                <p><Link to={`/${song.slug}`}><strong>{song.title} by {song.artist}</strong></Link></p>
                </div>
                )
            )}
        </div>
    )
}