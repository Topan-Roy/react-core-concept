import { useState } from "react"

export default  function Counter(){
    const[count,setcount] =useState(0);
    const hendelAdd=()=>{
        const newcount = count + 1;
        setcount(newcount);
    }
    const counterStyle={
        border:'2px solid yellow'
    }
    return(
        <div style={counterStyle}>
            <h3 >counter: {count}</h3>
            <button onClick={hendelAdd}>add</button>
        </div>
    )
}