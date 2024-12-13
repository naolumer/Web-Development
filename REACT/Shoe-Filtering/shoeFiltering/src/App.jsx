import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import Recommended from './Recommended/Recommended'
import Products from './Products/Products'
import Sidebar from './Sidebar/Sidebar'
import products from './db/Data'
import Card from './components/Card'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  //------------------ input filter----------
 
  const[query, setQuery] = useState("")

  const handleInputChange = (e)=>{
    setQuery(e.target.value)``
  }
  const filteredItems = products.filter(product => 
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  // ----------------Radio Filter------------
  const handleChange = (e)=> {
    setSelectedCategory(e.target.value)
  }

  // ---------------Buttons filter -------------

  const handleClick = (e)=>{
    setSelectedCategory(e.target.value)
  }

  function filteredData(products,selected,query) {
    let filteredProducts = products

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems
    };

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({category,color,company,newPrice,title}) => 
      category===selected || 
      color===selected || 
      company===selected || 
      newPrice===selected || 
      title===selected)
    }
    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice})=> (
      <Card key={Math.random()}
            img = {img}
            title = {title}
            star = {star}
            reviews = {reviews}
            newPrice = {newPrice}
            prevPrice = {prevPrice}
            />

    ))
  }

  const result = filteredData(products,selectedCategory,query);

  return (
    <div>
    <Sidebar handleChange={handleChange}/>
    <Nav  query={query} handleInputChange={handleInputChange}/>
    <Recommended handleChange={handleClick}/>   
    <Products result={result}/>
    
     

    </div>
  )
}

export default App