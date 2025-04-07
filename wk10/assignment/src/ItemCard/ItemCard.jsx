import PropTypes from "prop-types";
import "./ItemCard.css";
import trash from "../../public/delete.png";
import copy from "../../public/duplicate.png";
import { Link } from "react-router-dom";

export default function ItemCard({
    id,
    title,
    artist,
    release,
    genre,
    havePhysical,
    deleteFn,
    duplicateFn
}) {
    return(
        <div className="albumCard">
            <div className="cardTitle">
                <Link to={`/${id}`} role="link">{title}</Link> {/* Ensure the id is passed correctly */}
            </div>
            <div className="actions">
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    deleteFn(id)
                }}><img src={trash}></img></a>
                <a href="#" onClick={(evt) => {
                     evt.preventDefault();
                    duplicateFn(id)
                }}><img src={copy}></img></a>
            </div>
            <div className="cardArtist">{artist}</div>
            <div className="cardDetail">{release}</div>
            <div className="cardDetail">{genre}</div>
           <div className="cardHavePhysical"> {
                havePhysical ?
                <i className="fa-solid fa-compact-disc"></i> :
                <i className="fa-solid fa-download"></i>
                }
            </div>
        </div>
    )
  }
  ItemCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    artist: PropTypes.string,
    release: PropTypes.string,
    genre: PropTypes.string,
    havePhysical: PropTypes.bool,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func
  }