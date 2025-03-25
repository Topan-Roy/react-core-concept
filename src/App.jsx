import Counter from './count'
import Player from './player'
import './App.css'
import User from './users'
import Friend from './friends'
import Posts from './posts'
import { Suspense } from 'react'



const fetchUsers= fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json());

const fetchFriend = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
}
const fetchPost= async () =>{
  const res= await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {
  const friendPromice =fetchFriend();
  const postsPromice=fetchPost();
  function hendelclick(){
    alert('click 1')
  };
  const  hendelclick2 = () => {
    alert('click me 2')
  }
  const hendelclick4=(num)=>{
    const newNum=num+10;
    alert(newNum)
  }
  return (
    <>
    <Suspense fallback={<h3>loading posts....</h3>}>
   <Posts postsPromice={postsPromice}></Posts>
    </Suspense>
    
    <Suspense fallback={<h3>friend comming...</h3>}> 
    <Friend  friendPromice={ friendPromice} ></Friend>
    </Suspense>


    <Suspense fallback={<h3>Loading...</h3>}>
      <User fetchUsers={fetchUsers}></User>
    </Suspense>
    
    <Player></Player>
     <Counter></Counter>
      <h1>Vite + React</h1>
      {/* <button onclick="hendelclick()">Click me</button> */}
      <button onClick={hendelclick}>Click me</button>
      <button onClick={hendelclick2}>click 2</button>
     <button onClick={()=>alert('click me 3')}>click 3</button>
     <button onClick={()=>hendelclick4(5)}>click me 4</button>
    </>
  )
}

export default App
