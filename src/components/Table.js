import Card from '../components/Card';

function Table({usernames}) {

  return (
    <div className='table'>
      <div className='table-info'>Choose a card</div>
      {usernames.map(({username})=><Card name={username} />)}
     </div>
  )
}

export default Table;