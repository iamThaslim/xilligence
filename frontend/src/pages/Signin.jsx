import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { base_url } from "../utils/base_url";
import axiosInstance from "../utils/axios_config";

function Signin() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    const response = await axiosInstance.post('user/login', { userName, password });
    const data = response.data;
    localStorage.setItem('userData', JSON.stringify(data));
    alert("Sign in successfull");
    navigate("/admin")
  } catch(err) {
    if (err.response && err.response.status === 401) {
      alert('Incorrect credentials')
    } else {
      alert("Something went wrong. Please try again later")
    }
  }
}

  return (
    <>
    <div className="text-center sign-body">
    <div className="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit}>
        <img className="mb-4" src="https://via.placeholder.com/150x100.png" alt="logo"  />
        <h1 className="h3 mb-3 fw-normal">Please Sign in</h1>

        <div className="form-floating">
          <input type="text" className="form-control" id="username" name="userName" value={userName} placeholder="username" onChange={(event) => setUsername(event.target.value)} required/>
          <label htmlFor="username">User Name</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="password" name="password" value={password} placeholder="password" onChange={(event) => setPassword(event.target.value)} required/>
          <label htmlFor="password">Password</label>
        </div>
        <button className="mt-5 mb-3 w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-body-secondary">&copy; May 2024</p>
      </form>
    </div>
    </div>
    </>
  )
}

export default Signin