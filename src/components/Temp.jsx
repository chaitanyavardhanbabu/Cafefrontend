// import React from "react";

// export default function Temp(){
//     return(
//         <div>Temp</div>
//     )
// }

import React from "react";
// export default function Temp({flag}){
//     if(flag) return <h1>Flag is true</h1>;
//     else return <h1>Flag is false</h1>;
// }
// export default function Temp({flag}){
//     // return flag && <div>Flag is false</div>;
// }
// export default function Temp(){
//     const handleClick =()=>{
//         alert("Hello world");
//     };
//     const handleSubmit =(name)=>{
//         alert(`Hello ${name}`);
//     }
//     return (
//         <div>
//             <button onClick={handleClick}>Click</button><br></br>
//             <button onClick={()=>handleSubmit("John")}>Submit</button>
//         </div>
//     )
// }


import {useState} from 'react';

export default function Temp(){
    const [ score, setScore] = useState(0);
    const updateScore =() =>{
        setScore(score+1);
    }
    const decrement =()=>{
        setScore(score-1);
    }
    return <div>{score}
    <p>
        <button onClick={updateScore}>Update Score</button>
        <button onClick={decrement}>Decrement <Score></Score></button>
        </p></div>
}