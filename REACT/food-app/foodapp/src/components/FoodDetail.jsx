import { useEffect, useState } from "react";

export default function FoodDetails({foodId}) {
    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "9c60d1ff8b3742f1bda437647aab4b29";

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
            setIsLoading(false); 
        }
        fetchFood();
    }, [foodId])
    return (
        <div>
            <div>
               <h1> {food.title}</h1>
               <img src={food.image} alt="" />
            

                <span>
                    <strong> ⌚{food.readyInMinutes} Minutes</strong>
                </span>
                <span>
                👪<strong>Serves {food.servings}</strong>
                </span>
                <span>
                    { food.vegetarian ? "🥕Vegetarian" : "🍖Non-vegetarian"}
                
                </span>
                <span>
                    {food.vegan ? "🐮Vegan": ""}
                </span>
            </div>
            <div>
                $<span>{Math.floor(food.pricePerServing)} Per serving</span>
            </div>

            <div>
                <h2>Instructions</h2>
                {isLoading ? (<p>Loading...</p>) : (food.analyzedInstructions[0].steps.map((step) => (<li>{step.step}</li>) ) ) }
                
            </div>
            

        </div>
    )
}
