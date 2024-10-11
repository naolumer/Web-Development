import { useContext } from "react";
import { userContext } from "./App";

export default function checkOut() {

    const value = useContext(userContext);
    return (
        <div>
            Checkout as: {value}
        </div>
    )

}