import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";


const Login = () => {

const [emailId, setEmailId] = React.useState("elon@gmail.com");
const [password, setPassword] = React.useState("Elon@123");
const [errors, setErrors] = React.useState("")

const dispatch = useDispatch();
const Navigate = useNavigate();


const handleLogin = async() =>{
try
{
  const res= await axios.post(BASE_URL+ "/login",{emailId,password},{withCredentials:true});
  dispatch(addUser(res.data))
  Navigate("/")

}catch(err){
setErrors(err?.response?.data)
console.error("Login failed:", err);
}}

  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend my-4">Email ID</legend>
              <input 
              type="text"
              value={emailId}
              className="input w-full"
              placeholder="Type here"
              onChange={(e)=>setEmailId(e.target.value)} />
              <legend className="fieldset-legend my-4">Password</legend>
              <input 
              type="text"
              value={password} 
              className="input w-full" 
              placeholder="Type here"
              onChange={(e)=>setPassword(e.target.value)} />
              
            </fieldset>
          </div>
          {errors && <div className="text-red-500 my-2">{errors}</div>}
          <div className="card-actions justify-center">
            <button className="btn btn-primary my-3" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
