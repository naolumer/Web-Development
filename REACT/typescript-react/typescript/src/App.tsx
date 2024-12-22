import Admin from "./Admin"
import Form from "./Form"
import User from "./User"
import UserProfile from "./UserProfile"
const App = () => {
  return (
    <div>
      <User name="Richard" age={34} email="anaol@hotmail.com" location={["Mars","Unknown"]}  />
      <Admin name="Richarlison" age={23}  email="anaol@gmail.com" location={["USA","Chicago"]} user="user2"  />
      <UserProfile/>
      <Form/>
      
    
    </div>
  )
}

export default App