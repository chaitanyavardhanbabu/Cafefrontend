import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Register() {
    const [user, setUser] = useState({})
    const [error, setError] = useState()
    const API_URL = import.meta.env.VITE_API_URL;
    const handleSubmit = async () => {
        try {
            const url = `${API_URL}api/users/register`;
            // const url="https://cafebackend-omega.vercel.app/api/users/register";
            const result = await axios.post(url, user)
            setError("Data saved Successfully")
        } catch (error) {
            console.log(error);
            setError("Something Went Wrong")
        }
    }
    const handlelogin = async () => {
        try {
            const url = `${API_URL}api/users/register`;
            // const url="https://cafebackend-omega.vercel.app/api/users/register";
            const result = await axios.post(url, user)
            setError("Data saved Successfully")
        } catch (error) {
            console.log(error);
            setError("Something Went Wrong")
        }
    }
    return (
        <div>
            <h2>Registration Form</h2>
            {error}
            <p>
                <input type="text" placeholder="First Name" onChange={(e) => setUser({ ...user, firstname: e.target.value })} />
            </p>
            <p>
                <input type="text" placeholder="Last Name" onChange={(e) => setUser({ ...user, lastname: e.target.value })} />
            </p>
            <p>
                <input type="text" placeholder="Email Name" onChange={(e) => setUser({ ...user, email: e.target.value })} />
            </p>

            <p>
                <input type="password" placeholder="New Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </p>
            <p>
                <button onClick={handleSubmit}>Submit</button>
            </p>

            <h2>Login Form</h2>
                        <p>
                <input type="text" placeholder="Email Name" onChange={(e) => setUser({ ...user, email: e.target.value })} />
            </p>

            <p>
                <input type="password" placeholder="New Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </p>
            <p>
                <button onClick={handlelogin}>Submit</button>
            </p>
        </div>
    )
}