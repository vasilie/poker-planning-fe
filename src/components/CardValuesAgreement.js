import React, { useContext } from 'react';

import { SocketContext } from '../contexts/SocketContext';
import CardValueItem from './CardValueItem';


function CardValuesAgreement({maxPercentage}){
  const { valuesAgreement } = useContext(SocketContext);
  return (
    <div className='card-values-wrapper'>
      { valuesAgreement.map(({key, value, percentage }) => <CardValueItem itemKey={key} value={value} percentage={percentage} isOpaque={maxPercentage !== percentage} />)}
    </div>
  )
}

export default CardValuesAgreement;