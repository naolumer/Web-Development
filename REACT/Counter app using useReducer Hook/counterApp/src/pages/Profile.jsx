import { useLocation } from "react-router-dom"

export default function Profile() {

    const location = useLocation();
    const {userName} = location.state || {};
    return(
        <div>
            Profile for: {userName}
        </div>
    )
}