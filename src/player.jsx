import { useState } from "react"

export default function Player  (){
    const[runs,setRuns]=useState(0);
    const[siex,setSiex] =useState(0);
    const hendelsingles=()=>{
        const updateRun= runs+1;
        setRuns(updateRun);
    }
    const hendelFour=()=>{
        const updatefour= runs+4;
        setRuns(updatefour)
    }
    const heldelsix=()=>{
        const updatesix=runs+6;
        const updatesies=siex+1;
        setSiex(updatesies)
        setRuns(updatesix)
    }
    return(
       <div>
        <p><small>six{siex}</small></p>
       <h2>scour {runs}</h2>
        <button onClick={hendelsingles}>singles</button>
        <button onClick={hendelFour}>four</button>
        <button onClick={heldelsix}>six</button>


       </div>

    )
}