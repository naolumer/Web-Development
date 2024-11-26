import React from 'react'
import { UserContext} from './UserContext'
import { useContext } from 'react'

function UserProfile() {
    const {user}  = useContext(UserContext)
  return (
    <div>
        <h1>
            User Profile
        </h1>
        <p>Name: {user.name}</p>
    </div>
  )
}

export default UserProfile