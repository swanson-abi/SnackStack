import { useState } from "react"
import "./register.css"
import axios from "axios";

export default function Register() {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[email, setEmail] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.headers.common = {};
      const response = await axios.post("/auth/register", {
        username,
        email,
        password
      });
      console.log("Registration successful:", response.data);
      console.log({username, email,password});
    } catch (error) {
      console.error("Registration error:", error.response ? error.response.data : error.message);
    }
  }

    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
        className="registerInput" 
        type="text" 
        placeholder="Enter your username..." 
        onChange={e=>setUsername(e.target.value)}/>
        <label>Email</label>
        <input
        className="registerInput"
        type="text" 
        placeholder="Enter your email..." 
        onChange={e=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input 
        className="registerInput" 
        type="password"
         placeholder="Enter your password..." 
         onChange={e=>setPassword(e.target.value)}/>
         <br />
          <select id="wd-select-one-genre">
            <option value="HOME">Home Cook</option>
            <option value="CHEF">Chef</option>
          </select>
        <button className="registerButton" type="submit">Register</button>
      </form>
        <a href="./Login" class="registerLoginButton">Login</a>
    </div>
    )
}