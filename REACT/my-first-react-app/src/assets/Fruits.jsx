import Fruit from "./Fruit";


export default function Fruits() {
    const fruits = [{name : "apple",
                    price : "45",
                    color : "red",
                    soldout: false
    },              
                {   name : "apple",
                    price : "45",
                    color : "red",
                    soldout: false          

                },{ name : "apple",
                    price : "45",
                    color : "red",
                    soldout: false},{
                    
                    name : "apple",
                    price : "45",
                    color : "red",
                    soldout: false
                    },{
                    
                    name : "apple",
                    price : "45",
                    color : "red",
                    soldout: false
                    }];
    return (
        <div> 
            <ul>
                {fruits.map((fruit) => {
                    <Fruit key = {fruit.name} name = {fruit.name} price = {fruit.price} color={fruit.color} soldout = {fruit.soldout}/>
                })}

                     
    
        
            </ul>
        </div>

    )
}