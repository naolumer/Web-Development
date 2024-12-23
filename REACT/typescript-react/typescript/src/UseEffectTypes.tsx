import { useState,useEffect } from "react"

type Products = {
    id:number;
    title:string;
    description:string;
    price:number;
    discountPercentage:number;
    rating:number;
    stock:number;
    brand:string;
    category:string;
    thumbnail: string;
    images: string[]
}

const UseEffectTypes = () => {
    const [data,setData] = useState<Products|null>()

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await fetch("https://dummyjson.com/product/1");
                const result = await response.json();
                setData(result)

            } catch (error) {
                console.error("Error",error)
            }
        }
        fetchData()
    })
  return (
    <div>
       {data? <div>
        <p>{data.id}</p>
        <p>{data.title}</p>
        <p>{data.description}</p>
        <p>{data.price}</p>
        <p>{data.discountPercentage}</p>
       </div>:<p>Loading...</p>} 
    </div>
  )
}

export default UseEffectTypes