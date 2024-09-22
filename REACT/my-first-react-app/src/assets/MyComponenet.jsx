//  onChange = event handler used primarily with form elements
// i.e <input>, <textarea>, <select>, <radio> including but not limited to
//  triggers a function every time the value of the input changes
import React, {useState} from "react";

function MyComponent() {
    const [name , setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("spongebob");
    }

    const incrementAge = () => {
        setAge(age+ 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    
    const [quantity, setQuantity] = useState();


    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);

    }

    return(
        <>
        <div>
            <p>Name: {name}</p>
            <button onClick = {updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick = {incrementAge}>Increment</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick = {toggleEmployedStatus}> Toggle Status</button>

        </div>
        </>
    );
}

export default MyComponent