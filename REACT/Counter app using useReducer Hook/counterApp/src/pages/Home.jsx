import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"

export default function Home() {
    const navigate= useNavigate();
    const [userName, setUserName] =useState();

    function handleClick() {
        navigate("/Dashboard/profile", {state: {userName}})

    }
    return (
        <div>
            This is the Home page
            <Link to="/Dashboard">Dashboard</Link>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <button onClick={handleClick}>Go to a Page</button>
        </div>
    )
}