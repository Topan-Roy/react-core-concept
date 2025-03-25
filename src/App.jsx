import Counter from './count'
import Player from './player'
import './App.css'

function App() {
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
