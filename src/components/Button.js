function Button({children, ...rest}) {
  return (
    <div className='button' {...rest}>{children}</div>
  )
}

export default Button;