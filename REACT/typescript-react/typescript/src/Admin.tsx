import { type Usser } from "./User"
type AdminInfo = Usser & {
  user:string
}

const Admin = ({name,age,email,location,user}:AdminInfo) => {
  return (
    <div>
        <ul>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h2>{email}</h2>
            <p>{JSON.stringify(location)}</p>
            <p>{user}</p>
        </ul>
    </div>
  )
}

export default Admin