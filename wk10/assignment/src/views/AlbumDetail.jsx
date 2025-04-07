import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./AlbumDetail.css";


export function AlbumDetail({data}) {
    const { id } = useParams();
    const selectedAlbum = data.find((album) => album.id === Number(id)); // Convert id to a number

    return (
        <>
        <Link to="/" className="home">Return to Album List</Link>
            <h2>{selectedAlbum.title}</h2>
            <h1>{selectedAlbum.artist}</h1>
            <p>Release Date: {selectedAlbum.release}</p>
            <p>Genre: {selectedAlbum.genre}</p>
            <p>
                {selectedAlbum.havePhysical ? (
                    <i className="fa-solid fa-compact-disc"></i>
                ) : (
                    <i className="fa-solid fa-download"></i>
                )}
            </p>

        </>
    );
}

AlbumDetail.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            artist: PropTypes.string,
            release: PropTypes.string,
            genre: PropTypes.string,
            havePhysical: PropTypes.bool,
        })
    ).isRequired,
};