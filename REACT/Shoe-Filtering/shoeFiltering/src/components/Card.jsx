import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";

function Card({key,img,star,title,reviews,newPrice,prevPrice}) {
  return (
    <section className='card' key={key}>
        <img className='card-img' src={img} alt="jpg" />
        <div className='card-details'>
          <h3 className='card-title'>{title}</h3>
          <section className='card-reviews'>
              <FaStar className='rating-stars'/> 
              <FaStar className='rating-stars'/> 
              <FaStar className='rating-stars'/> 
              <FaStar className='rating-stars'/>
              <span className='total-reviews'> {reviews}</span>
          </section>
          <section className='card-price'>
              <div className='price'>
                  <del>{prevPrice}</del> {newPrice}
              </div>
                <IoBagHandleOutline className='bag-icon'/>

          </section>
        </div>
      </section>
  )
}

export default Card