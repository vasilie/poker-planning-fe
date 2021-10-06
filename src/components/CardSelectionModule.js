import React, {useState} from 'react';

import Card from './Card';

const cardOptions = [1, 2, 3, 5, 8, 13];

function CardSelectionModule(){
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelection = (value) => {
    if (selectedCard === value) {
      setSelectedCard(null)
    } else {
      setSelectedCard(value);
    }
  }

  return (
    <div className='card-selection-wrapper'>
      {cardOptions.map(value => <Card handleSelection={handleSelection} selection selected={selectedCard === value} value={value} />)}
    </div>
  )
}

export default CardSelectionModule;