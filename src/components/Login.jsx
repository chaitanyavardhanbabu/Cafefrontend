// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// export default function Login() {
//     const [user, setUser] = useState({})
//     const [error, setError] = useState()
//     const API_URL = import.meta.env.VITE_API_URL;

//     const handlelogin = async () => {
//         try {
//             const url = `${API_URL}api/users/login`;
//             // const url="https://cafebackend-omega.vercel.app/api/users/register";
//             const result = await axios.post(url, user)
//             setError("Login Successfully")
//         } catch (error) {
//             console.log(error);
//             setError("Login Failed")
//         }
//     }
//     return (
//         <div>
//             <h2>Login Form</h2>
//             {error}
//                         <p>
//                 <input type="email" placeholder="Email Name" onChange={(e) => setUser({ ...user, email: e.target.value })} />
//             </p>

//             <p>
//                 <input type="password" placeholder="New Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
//             </p>
//             <p>
//                 <button onClick={handlelogin}>Submit</button>
//             </p>
//         </div>
//     )
// }