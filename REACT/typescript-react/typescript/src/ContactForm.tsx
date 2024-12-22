import { ChangeEvent, FormEvent, useState } from "react"

interface ContactFormState {
    name:string;
    email:string
}

function ContactForm() {
    const [formData,setFormData] = useState<ContactFormState>({
        name:"",
        email:"",
    })

    const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setFormData((prevState)=>({...prevState,[name]: value}))
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log("form Submitted",formData)
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>
                Email:
                <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}/>
            </label>
            <label>
                Name:
                <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}/>
            </label>
        </div>

        <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm