import ItemCard from "../ItemCard/ItemCard.jsx";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { nanoid } from "nanoid";
import cardData from "../assets/card-data.json";


export function Home() {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
  function handleSubmitJob(data) {
    addCard(data);
    reset();
  }
  const [cards, setCards] = useState(cardData);

  const [flippedCards, setFlippedCards]= useState([]);

  function addCard(data) {
    const newId = nanoid(6);
    const newCard = {id: newId, ...data};
    setCards([...cards, newCard]);
  }

  function deleteCard(id) {
    const updatedArray = cards.filter((card) => {
      return card.id !== id; //will skip item with matching id
    })
    setCards(updatedArray)
  }

  function duplicateCard(id) {
    const matchingCard = cards.find((card) => {
      return card.id === id
    });
    const newCard = { ...matchingCard, id: nanoid(6) };

    setCards([...cards, newCard]);
  }

  function handleFlippedCards(id) {
    const getIndex = flippedCards.indexOf(id);
    const copiedCards = [...flippedCards];
    if (getIndex !== -1) {
      copiedCards.splice(getIndex, 1);
    } else {
      copiedCards.push(id);
    }
    setFlippedCards(copiedCards)
  }

  // code from: https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
  function randomizeCards() {
    const copiedCards =[...cards]
    for (let i = copiedCards.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [copiedCards[i], copiedCards[j]] = [copiedCards[j], copiedCards[i]]; 
    } 

    setCards(copiedCards)
  }

  return(
    <div className="container">
          <div className="page">
            <h2>Flash Your Cards</h2>
            <div className="shuffleButton" onClick={(evt) => {
            evt.preventDefault();
            randomizeCards();
        }} >
          <p className="description">
            Your ultimate study buddy! Use the form at the bottom of the page to add your own flash cards. You can click on the text of the cards to flip them and flip them back. Are you struggling with a particular fact or figure? Use the duplicate button to add a duplicate card to the deck. 
            Feeling confident? Use the delete button to remove a card from the deck. Once you're ready to truly test yourself, use the shuffle button to randomize the order of the cards.
          </p>
              <button className="shuffleButton" >SHUFFLE</button>
            </div>
              <div className="collection">
                {cards.map((card) => {
                  return(
                    <ItemCard 
                    key={card.id} 
                    deleteFn={deleteCard}
                    duplicateFn={duplicateCard}
                    flippedCards={flippedCards}
                    handleFlippedCards={handleFlippedCards}
                    {...card}/>
                  )
                })}
              </div>
          </div>
    
          <div>
                <form onSubmit={handleSubmit(handleSubmitJob)}>
                    <label className="form-title">Add a Card</label>
                    <div className="form-group">
                      <textarea row="5" placeholder="Front of Card" {...register("cardFront", {required: true})}/>
                      {errors.cardFront && <p className="error-text">Front of card is required</p>}
                    </div>
    
                    <div className="form-group">
                      <textarea placeholder="Back of Card" {...register("cardBack", {required: true})}/>
                      {errors.cardBack && <p className="error-text">Back of card is required</p>}
                    </div>
                    <button className="submit-button" type="submit">Add Card</button>
                </form>
            </div>
    
    
        </div>
  );

}