
function Price() {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
       <label className='sidebar-label-container'>
        <input type="radio" name="test2" />
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name="test2" />
        <span className='checkmark'></span>$0-$50
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name="test2" />
        <span className='checkmark'></span>$50-$100
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name="test2" />
        <span className='checkmark'></span>$100-$50
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name="test2" />
        <span className='checkmark'></span>Over  $150
      </label>
    </div>
  )
}

export default Price