import { use } from "react"

export default function User ({fetchUsers}){
    const user=use(fetchUsers);
    // console.log(user);
    return(
        <div className="card">
            <h3>User:{user.length}</h3>
        </div>
    )
}