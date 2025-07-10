 import "./Home.css"
 export default function Home({name,age}){
  let id  = 3453566
  return (
  <div>
    <h1 style={{backgroundColor:"orange",color:"blue ",textAlign:"center"}}>
        Hello {name} ,Your age is {age}</h1>
    <h2 className="App-Home-Header">Your Student Id is {id}</h2>
    <p>This is a Paragraph</p>
    </div>
  );
}