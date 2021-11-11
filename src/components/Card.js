import { cardStyles } from "./cardStyles";

function Card({name, selection, selected, value, handleSelection, cardValue, isReveal, cardStyles, cardStyleSelected, onClick}) {
  const isCardChoosen = !!cardValue;

  if (isReveal){    
    return (
      <div className={`card display reveal`}>
        <div className='card-name'>{cardValue}</div>
      </div>
    )
  }

  if (selection){
    return (
      <div onClick={() => handleSelection(value)} className={`card selection ${selected ? "selected": ""}`}>
        <div className='card-name'>{value}</div>
      </div>
    )
  } else {
    return (
      <div onClick={onClick} className={`card display ${isCardChoosen ? "chosen": ""} ${cardStyles} ${cardStyleSelected ? "card-style-selected" : ""}`}>
        <div className='card-name'>{name}</div>
      </div>
    )
  }
}

Card.defaultProps = {
  name: "",
  selection: false,
  cardStyles: false,
  value: 0
}

export default Card;