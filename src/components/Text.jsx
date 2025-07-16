
const Text = ({number,name}) => {
  console.log(number, "number")  // number propunu konsola yazdırıyoruz
  return (
    <div>{name} {number}</div>  //numberleri sırasıyla yazdırıyoruz
  )
}

export default Text
