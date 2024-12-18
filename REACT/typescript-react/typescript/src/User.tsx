export type Usser = {
    name:string;
    age:number;
    email:string;
    location: string[];
}
function User({name,age,email,location}:Usser) {
  
    return (
    <ul>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{email}</h1>
        <p>{JSON.stringify(location)}</p>
    </ul>
  )
}

export default User