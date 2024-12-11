import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'
import './Sidebar.css'
import { TiShoppingCart } from "react-icons/ti";


function Sidebar() {
  return (
    <>
    <section className='sidebar'>
        <div className='logo-container'>
            <h1><TiShoppingCart className='cart-img'/></h1>
        </div>
        <Category/>
        <Price/>
        <Colors/>
    </section>
    </>
  )
}

export default Sidebar