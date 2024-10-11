import {Link, Outlet} from "react-router-dom"
import Profile from "./Profile"
import Settings from "./Settings"
export default function Dashboard() {
    return (
        <div>
            <ul>
                <li><Link to="profile">Profile</Link></li>
                <li><Link to="settings">Settings</Link></li>
            </ul>
            
            
            This is a dashboard
            
            <Outlet/>
        </div>
        
    )
}