import React, { useState } from 'react'
import Button from "./components/Button"; //button bileşeni içe ekledik böylece
import Text from "./components/Text";     //text bileşeni içe ekledik böylece


function App() {
 // let name = "react"  
const [count, setCount] = useState(0);

  return (
    <>
    <Button name={"Azalt"} onClick={() => setCount(count - 1)} /> 
    {/*<button onClick={decrement}>Azalt</button>*/}
    <div>{count}</div>
    <button onClick={() => setCount(count + 1)}>Artır</button>
    </>
  )                     

}
export default App
