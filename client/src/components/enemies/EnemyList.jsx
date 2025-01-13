import { useContext, useEffect, useState } from "react";
import { UserContext } from "../ApplicationViews";

export const EnemyList = () => {
    const [enemies, setEnemies] = useState([]);

    const { loggedInUser } = useContext(UserContext)
    const { test } = useContext(UserContext)
    useEffect(() => {
        console.log(loggedInUser)
        console.log(test)
    }, [])
    return (
        <div className="container" style={{ maxWidth: "500px" }}>
            <h3>Enemy List Page</h3>
        </div>
    );
}