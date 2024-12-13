import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";

function Card() {
  return (
    <section className='card'>
        <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="jpg" />
        <div className='card-details'>
          <h3 className='card-title'>Shoe</h3>
          <section className='card-reviews'>
              <FaStar className='rating-stars'/> 
              <FaStar className='rating-stars'/> 
              <FaStar className='rating-stars'/> 
              <FaStar className='rating-stars'/>
              <span className='total-reviews'> 4</span>
          </section>
          <section className='card-price'>
              <div className='price'>
                  <del>$300</del> 200
              </div>
                <IoBagHandleOutline className='bag-icon'/>

          </section>
        </div>
      </section>
  )
}

export default Card