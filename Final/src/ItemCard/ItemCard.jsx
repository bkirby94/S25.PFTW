import PropTypes from "prop-types";
import "./ItemCard.css";
import trash from "../../public/delete.png";
import copy from "../../public/duplicate.png";
import { Link } from "react-router-dom";

export default function ItemCard({
    id,
    cardFront,
    cardBack,
    deleteFn,
    duplicateFn,
    flippedCards,
    handleFlippedCards,
}) {
    return(
        <div className={`flashCard ${flippedCards.includes(id)? "flashCardBack":"flashCardFront"}`} key={id} >
            <div className={`inner-card ${flippedCards.includes(id)? "flipped":""}`} onClick={(evt) => {
            evt.preventDefault();
            handleFlippedCards(id);
        }}>
            {flippedCards.includes(id) ? (
                <div className="cardBack">
                    {cardBack}
                </div>
            ) : (
                <div className="cardFront">
                    {cardFront}
                </div>
            )}
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
        </div>
    )
  }
  ItemCard.propTypes = {
    id: PropTypes.string,
    cardFront: PropTypes.string,
    cardBack: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func
  }