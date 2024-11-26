import React from 'react'
import { useState } from 'react'

function Friends() {
    const friend = ["aby","jack","john","sara","muhammad"]
    const [friends,setFriends] = useState(["imran","yahya","hanan","eman"])

    function handleAdd() {
        setFriends([...friends, friend[Math.floor(Math.random()*friend.length)]])
    }
    function handleRemove(){
        setFriends(friends.filter((f)=> f!==friend[Math.floor(Math.random()*friend.length)]))

    }
    function updateFriend(){
        setFriends(friends.map((f)=> f==="imran"?"Imran Umer": f))
    }
  return (
    <div>
        {friends.map((f)=> (
            <li key={Math.random()}>{f}</li>
        ))}
        <button style={{padding:"5px 20px"}} onClick={handleAdd}>Add Friend</button>
        <button style={{padding:"5px 20px"}} onClick={handleRemove}>Remove Friend</button>
        <button style={{padding:"5px 20px"}} onClick={updateFriend}>UpdateFriend</button>
    </div>
  )
}

export default Friends



