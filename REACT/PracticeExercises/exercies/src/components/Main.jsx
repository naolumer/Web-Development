import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import './style.css'


function Main() {
    const [items, setitems] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res) => {
          // console.log(res.data);
          setitems(res.data.meals);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
      return (
        <section key={Math.random()} className="card">
          <img src={strMealThumb} alt={strMeal} />
          <section className="content">
            <p>{strMeal}</p>
            <p>#{idMeal}</p>
          </section>
        </section>
      );
    });
  
    return <div className="items-container">{itemslist}</div>;
  }
  
  export default Main;