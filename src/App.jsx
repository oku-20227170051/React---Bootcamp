import React, { useState } from 'react'
import Button from "./components/Button"; //button bileşeni içe ekledik böylece
import Text from "./components/Text";     //text bileşeni içe ekledik böylece


function App() {
 
const [name, setName] = useState("null")
const [data, setData] = useState("null")

console.log(name, "name")

const targetFunc = (e) => {
  console.log(e,"e")
  setName(e.target.value)
}
const clickFunc = () => {
setData(name)
}
  return (
    <>
   <input type="text" onChange={targetFunc} />
   <button onClick={clickFunc}>Tıkla</button>
   <div> 
   {data}
   </div>
    </>
  )                     

}
export default App
