import React, { useState } from 'react'
import Button from "./components/Button";
import Text from "./components/Text";     //text bileşeni içe ekledik böylece


function App() {
 // let name = "react"  
const [name, setName] = useState("react");
//const [degisken, degiskeni setlemek istedigin fonksiyon] 
  const clisckFunc = () => {
    console.log("click işlemi yapıldı...")
    setName("React değişti") // Artık click yapınca name değişkeni "React değişti" olarak güncellenecek
  }
  return (
    <>
    <div onClick={clisckFunc}>
      {name}
      </div>                   
      
    </>
  )                     
}

export default App
