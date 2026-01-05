import react from "react";
function Hope(props) {
  //props is a object
  console.log(props);
  const { name, number } = props;
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Number :{number}</h2>;
    </div>
  ); //{} is called interpolation
}
export default Hope;
