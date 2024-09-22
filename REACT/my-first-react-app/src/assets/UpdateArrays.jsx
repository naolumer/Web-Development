import { useState } from "react"

function UpdateArrays () {

    const [fruits, setFruit] = useState(["banana","Apple","Oranage"]);

    function handleAddFruit() {
        const inputFruit = document.getElementById('food').value;
        document.getElementById('food').value = "";
        

        setFruit(f => [...f, inputFruit]);
    };
    
    function handleRemoveFruit(index) {
        setFruit(fruits.filter((_, i) => i!==index));

    }


    

    return(
        <>
        <div>
            <h2>Fruit Items</h2>
            <ul>
                {fruits.map((fruit, index) => <li key={index} onClick={() => 
                    handleRemoveFruit(index)}>{fruit}</li>)}
            </ul>

            <input type="text" placeholder="Enter fruit name" id="food" />
            <button onClick={handleAddFruit}>Add Fruit</button>
        </div>
        </>
    )
};

export default UpdateArrays