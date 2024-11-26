import React, { useState } from 'react'

function Profile() {
    const [profile,setProfile] = useState({name:"",
        age: 0
    })
    const [inputAge,setInputAge] = useState("")
    const [inputName,setInputName] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setInputAge("")
        setInputName("")
    }
    function handleClick() {
        setProfile({name:inputName,age:inputAge})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputName} onChange={(e)=> setInputName(e.target.value)} placeholder='input Name...' />
            <input type="text" value={inputAge}  onChange={(e)=> setInputAge(e.target.value)} placeholder='input Age...' />
            <button onClick={handleClick}>Add Profile</button>
        </form>
        <div>
            <h1>Name: {profile.name}</h1>
            <h3>Age: {profile.age}</h3>
        </div>
        
    </div>
  )
}

export default Profile