export default function FridentUse({friend}){
    // console.log(friend)
    const{name,email,phone}=friend
    return(
        <div className="card">
            <h4>Name: {name}</h4>
            <p>Email :{email}</p>
           <p>phone:{phone}</p>
        </div>
    )
}