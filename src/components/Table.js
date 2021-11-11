import { useContext } from 'react';
import Card from '../components/Card';
import { SocketContext } from '../contexts/SocketContext';

function Table({usernames, isReveal}) {
  const { cardValue, countdown, counting, averageScore, cardStyle } = useContext(SocketContext);

  return (
    <div className='table'>
      {!isReveal && <div className='table-info'>{cardValue ? "Wait for card reveal" : "Choose a card"}</div>}
      {counting && <div className='table-info'>{countdown}</div>}
      {isReveal && !counting && <div className="average-score">Average score: <b>{averageScore}</b></div>}
      <div>
        {usernames.map(({username, cardValue})=><Card cardStyles={cardStyle} name={username} isReveal={isReveal && !counting} cardValue={cardValue} />)}
      </div>

     </div>
  )
}

export default Table;