import { use } from "react"
import FridentUse from "./friend"
export default  function Friend({ friendPromice}){
    const friends=use( friendPromice)
    // console.log(friends)
return(
    <div>
        <h3>friend : {friends.length}</h3>
        {
            friends.map(friend=><FridentUse key={friend.id} friend={friend}></FridentUse>)
        }
    </div>
)
}