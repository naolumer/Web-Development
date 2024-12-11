import './Recommended.css'

function Recommended() {
  return (
    <div>
       <h2 className='recommended-title'>Recommended</h2> 
       <div className='recommended-flex'>
        <button type='button' className='btns'>All Products</button>
        <button type='button' className='btns'>Nike</button>
        <button type='button' className='btns'>Addidas</button>
        <button type='button' className='btns'>Puma</button>
        <button type='button' className='btns'>Vans</button>

       </div>
    </div>
  )
}

export default Recommended