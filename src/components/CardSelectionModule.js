import React, { useContext } from 'react';
import { GAME_STATE_REVEALING_CARDS } from '../contexts/constants';

import { SocketContext } from '../contexts/SocketContext';

import Card from './Card';

const cardOptions = [1, 2, 3, 5, 8, 13];

function CardSelectionModule(){
  const {changeCardValue, selectedCard, setSelectedCard, gameState} = useContext(SocketContext);

  const isSelection = gameState !== GAME_STATE_REVEALING_CARDS ;

  const handleSelection = (value) => {
    if (!isSelection) return null;

    if (selectedCard === value) {
      setSelectedCard(null)
      changeCardValue(null);
    } else {
      setSelectedCard(value);
      changeCardValue(value);
    }
  }

  return (
    <div className='card-selection-wrapper'>
      {cardOptions.map(value => <Card handleSelection={handleSelection} selection selected={selectedCard === value} value={value} />)}
    </div>
  )
}

export default CardSelectionModule;