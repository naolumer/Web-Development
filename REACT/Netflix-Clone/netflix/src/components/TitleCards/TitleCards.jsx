import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'



function TitleCards({title, category}) {
    
    // const cardsRef = useRef();

    // const handleWheel=(event)=>{
    //     event.preventDefault();
    //     cardsRef.current.scrollLeft +=event.deltaY
    // }

    // useEffect(()=>{
    //     cardsRef.current.addEventListener('wheel',handleWheel)
    // },[])
  return (
    <div className='title-cards'>
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className='card-list'>
            {cards_data.map((card, index)=> {
                return <div key={index} className='card' /*ref={cardsRef}*/>
                    <img src={card.image} alt="" />
                    <p>{card.name}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default TitleCards