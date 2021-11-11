function CardValueItem({itemKey, value, percentage, isOpaque}){

  return (
    <div className='card-values-item' style={{ opacity:isOpaque ? 0.3 : 1 }}>
      <p>{itemKey}</p>
      <div className="card-values-percentage">{percentage}%</div>
      <div className="card-values-display-background"></div>
      <div className="card-values-display-foreground" style={{ width: `${percentage}%`}}></div>
    </div>
  )
}

export default CardValueItem; 