import PropTypes from "prop-types";
import "./ItemCard.css";
import trash from "../../public/delete.png";
import copy from "../../public/duplicate.png";

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
            <div className="cardTitle">{title}</div>
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
                <i class="fa-solid fa-compact-disc"></i> :
                <i class="fa-solid fa-download"></i>
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