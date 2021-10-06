function Card({name, selection, selected, value, handleSelection}) {
  if (selection){
    return (
      <div onClick={() => handleSelection(value)} className={`card selection ${selected ? "selected": ""}`}>
        <div className='card-name'>{value}</div>
      </div>
    )
  } else {
    return (
      <div className={`card display`}>
        <div className='card-name'>{name}</div>
      </div>
    )
  }
}

Card.defaultProps = {
  name: "",
  selection: false,
  value: 0
}

export default Card;