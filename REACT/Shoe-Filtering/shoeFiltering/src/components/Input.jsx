function Input({handleChange,value,title,name,color}) {
  return (
    <div>
      <label className='sidebar-label-container'>
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className='checkmark' style={{backgroundColor: color}}></span>{title}
      </label>
    </div>

  )
}

export default Input