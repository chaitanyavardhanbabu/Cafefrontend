import { use, useState } from "react";

export default function Login(){
    const[credentials,setcredentials] = useState({})
    const[mssg,setmssg]=useState()

    const HandleLogin= async()=>{
        try {
            const url = `{API_URL}api/users/register`;
            const result = await axios.post(url,user);
            setmssg("Data saved succesfully")
        } catch (mssg) {
            console.log(mssg);
            setmssg("Something went wrong")
        }
    }
}return (
        <div>
            <h2>Registration Form</h2>
            {mssg}
            <p>
                <input type="text" placeholder="Email Name" onChange={(e) => setUser({ ...user, email: e.target.value })} />
            </p>

            <p>
                <input type="password" placeholder="New Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </p>
            <p>
                <button onClick={HandleLogin}>Login</button>
            </p>
        </div>
    )
