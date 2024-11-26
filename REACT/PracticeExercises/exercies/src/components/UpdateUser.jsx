import React from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'
import { useState } from 'react'

function UpdateUser() {
    const {updateUser} = useContext(UserContext)
    const [newName, setNewName]  = useState('')
    const handleSubmit = (e)=> {
        e.preventDefault()
        if (newName.trim()) {
            updateUser(newName);
            setNewName("")
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <h1>Update Name</h1>
        <label> Name:
            <input type="text" value={newName} placeholder='Name...' onChange={(e)=>setNewName(e.target.value)} />
        </label>
        <button type='submit'>update</button>
    </form>
  )
}

export default UpdateUser