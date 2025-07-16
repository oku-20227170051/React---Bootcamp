import Button from "./components/Button";
import Text from "./components/Text";     //text bileşeni içe ekledik böylece


function App() {
  //props
  return (
    <>                   
      <Text number="1" name={"React"}/>  
      <Text number="2" name={"Reactt"}/>
      <Text number="3" name={"Reacttt"}/>
      <Button name={"Artır"} />
      <Button name={"Azalt"} />
    </>
  )                     
}

export default App
