import { FormEvent, useRef, useState } from "react"

type formData = {
    name:string;
    email:string;
    password:string
}

function Form() {
 
    const [submittedData,setSubmittedData] = useState<formData>({
            name:"",
            email:"",
            password:""
            })
    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const nameValue = name.current!.value;
        const emailValue = email.current!.value;
        const passwordValue = password!.current.value;

        setSubmittedData({
            name: nameValue,
            email:emailValue,
            password:passwordValue
        })
    }

    return (
        
    <div>
        <form onSubmit={handleSubmit} >
         <input type="text"
         ref={name}
         placeholder="Enter name.."
          />
          <input type="email"
         ref={email}
         placeholder="Enter email.."
          />
          <input type="password"
         ref={password}
         placeholder="Enter password.."
          />
         <button type="submit">Submit</button>
        </form>

        <div>
            <h2>Name: {submittedData.name}</h2>
            <h2>Email: {submittedData.email}</h2>
            <h2>Password: {submittedData.password}</h2>
        </div>
        
    </div>
  )
}

export default Form