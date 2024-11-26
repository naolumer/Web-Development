import React, { useState } from 'react'

function ShoppingList() {
    const [item, setItem] = useState([])
    const [quantity, setQuantity] = useState("")
    const [product, setProduct] = useState("")

    const handleSubmit=(e)=> {
        e.preventDefault()
        setItem(prevItem=> [...prevItem, {product:product,quantity:quantity}])
        setProduct("")
        setQuantity("")
    }

  return (

    <div>
        <form>
            <h1>Enter Product Info</h1>
            <div>
                <label>Product:
                <input type="text" placeholder='Product name...' value={product} onChange={(e)=>setProduct(e.target.value)} />
                </label>
            </div>
            
            <div>
                <label>Quantity:
                <input type="text" placeholder='enter the quantity...' value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
                </label>
            </div>
            
            <button type='submit' onClick={handleSubmit}>Add Product</button>
        </form>
        <div>
            <h1>Products</h1>
            {item.map((i)=> (
                <li key={Math.random()}>{i.product}- Quantity: {i.quantity}</li>
            ))}
        </div>

    </div>
    
  )
}

export default ShoppingList