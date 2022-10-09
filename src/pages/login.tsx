import { NextPage } from "next"
import { useState } from "react"
import loginUser from "../utils/login"

const Login: NextPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handlesubmit = (e: any) => {
        e.preventDefault();
        loginUser(email, password)
    }

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value)
    }

    return (
        <div className="grid grid-cols-2 gap-4 place-content-center bg-black">
            <form onSubmit={handlesubmit}>
                <label>Email:</label>
                <input type="text" name="email" onChange={handleEmailChange} />
                <label>Password:</label>
                <input type="password" name="password" onChange={handlePasswordChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login