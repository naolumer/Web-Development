import { useState } from "react"

type UserType = {
    name:string;
    age:number;
    email:string
}


const UserProfile = () => {
    
    const [profile,setProfile] = useState<UserType>({
        name:"",
        age:0,
        email:""
    })
    const UpdateName = (name:string)=> {
        setProfile((prevProfile)=> ({...prevProfile, name}))
    }

    const UpdateAge = (age:number)=> {
        setProfile((prevProfile)=> ({...prevProfile, age}))
    }

    const UpdateEmail = (email:string)=> {
        setProfile((prevProfile)=> ({...prevProfile, email}))
    }

  
    return (
    <div>
        <h1>User Info</h1>
        <h2>Name:</h2>
        <input 
        type="text"
        placeholder="Name.."
        value={profile.name}
        onChange={(e)=>UpdateName(e.target.value)} />

        <h2>Age</h2>
        <input 
        type="number"
        placeholder="Age.."
        value={profile.age}
        onChange={(e)=>UpdateAge(e.target.value)} />

        <h2>Email</h2>
        <input 
        type="email"
        placeholder="Email.."
        value={profile.email}
        onChange={(e)=>UpdateEmail(e.target.value)} />

        <h1>Profile Summary</h1>
        <h3>Name: {profile.name}</h3>
        <h3>Age: {profile.age}</h3>
        <h3>Email: {profile.email}</h3>

        
    </div>
  )
}

export default UserProfile