import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'
import './Sidebar.css'
import { TiShoppingCart } from "react-icons/ti";


function Sidebar({handleChange}) {
  return (
    <>
    <section className='sidebar'>
        <div className='logo-container'>
            <h1><TiShoppingCart className='cart-img'/></h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price  handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </section>
    </>
  )
}

export default Sidebar