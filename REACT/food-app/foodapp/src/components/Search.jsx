import { useEffect, useState } from "react";
import styles from "./search.module.css"


const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "9c60d1ff8b3742f1bda437647aab4b29"

export default function Search({foodData,setFoodData}) {
    const [query, setQuery] = useState("pizza");
    // syntax of the useEffect hook
    useEffect(()=> {
        async function fetchFood() {
           const res= await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
           const data =await res.json();
           setFoodData(data.results);
           console.log(data.results);
        }
        fetchFood()
    }, [query])

    return (
        <div className={styles.searchContainer} >
            <input 
                className={styles.input}
                type="text" 
                value = {query}
                onChange={(e) => setQuery(e.target.value)}/>
        </div>
    )
}