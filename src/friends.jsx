import { use } from "react"

export default  function Friend({ friendPromice}){
    const friends=use( friendPromice)
    console.log(friends)
return(
    <div>
        <h3>friend : {friends.length}</h3>
    </div>
)
}