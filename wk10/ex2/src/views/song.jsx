import { useParams } from "react-router-dom"
import PropTypes from "prop-types"
export function Song({ songs }) {
    const { slug } = useParams()
    const song = songs.find((song) => song.slug === slug)

    return (
        <div>
            <h1>{song.title}</h1>
            <p>Artist: {song.artist}</p>
            <p>Position Last Week: {song.position.positionLastWeek}</p>
            <p>Peak Position: {song.position.positionLastWeek}</p>
            <p>Weeks on Chart: {song.position.positionLastWeek}</p>
        </div>
    )
}
Song.prototypes={
    songs: PropTypes.arrayOf(PropTypes.any)
}