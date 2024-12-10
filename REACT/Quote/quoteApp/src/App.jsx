import React, { useState } from 'react'
import './index.css'

function App() {
  const quotes = [
    {quote:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that",
      author:"Marthin Lutehr.K"
    },
    {
      quote:"It is during our darkest moments that we must focus to see the light",
      author:"Aristotle"
    },
    {
      quote:"The only true wisdom is in knowing you know nothing",
      author:"Socrates"
    },
    {
      quote:"What happens is not as important as how you react to what happens",
      author:"Walt Disney"
    },
    {
      quote:"To lead the people, walk behind them",
      author:"Sun Tzu"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  
  const handleNext = ()=>{
    setCurrentIndex((currentIndex + quotes.length + 1)% quotes.length)
  }
  const handlePrev = ()=>{
    setCurrentIndex((currentIndex + quotes.length - 1)% quotes.length)
  }
  return (
    <div className="container">
      <h1 className='title'>QUOTES</h1>
      <h1 className='quote'><em>{quotes[currentIndex].quote}</em></h1>
      <p className='author'>{quotes[currentIndex].author}</p>
      <div className='button-container'>
        <button className='prev' type='submit' onClick={handlePrev}>Prev</button>
        <button className='next' type= "submit" onClick={handleNext}>Next</button>  
      </div>
      
    </div>
  )
}

export default App