import Admin from "./Admin"
import ContactForm from "./ContactForm"
import Counter from "./Counter"
import FocusInput from "./FocusInput"
import Form from "./Form"
import Reducer from "./Reducer"
import UseEffectTypes from "./UseEffectTypes"
import User from "./User"
import UserProfile from "./UserProfile"
const App = () => {
  return (
    <div>
      {/* <User name="Richard" age={34} email="anaol@hotmail.com" location={["Mars","Unknown"]}  />
      <Admin name="Richarlison" age={23}  email="anaol@gmail.com" location={["USA","Chicago"]} user="user2"  />
      <UserProfile/>
      <Form/> */}
      {/* <FocusInput/> */}
      <ContactForm/>
      <Counter/>
      <Reducer/>
      <UseEffectTypes/>
      
    
    </div>
  )
}

export default App