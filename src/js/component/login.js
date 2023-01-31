import React, {useState, useContext, Component} from "react";
import {Context} from "../store/appContext.js";
import {Navigate} from "react-router-dom"


export const Login = () => {

    const[userName,setUserName]=useState("")
    const[password,setPassword]=useState("")
    const {store, actions}=useContext(Context)

    function enviarDatos(e) {
        e.preventDefault()
        actions.login(userName,password)
        setUserName("")
        setPassword("")
    }


    return (
        <>
        {store.auth === true ? <Navigate to="/"/>:
        <form className="w-50 mx-auto" onSubmit={enviarDatos}>
        <div className="mb-3 container">
            <label htmlFor="exampleInputUser1" className="form-label">
            User
            </label>
            <input
            type="text"
            className="form-control"
            id="exampleInputUser"
            aria-describedby="userHelp"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
            Password
            </label>
            <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
        <button type="submit" className="btn btn-primary">
            Submit
        </button>
        </form>}
        </>
        
    );
    };

export default Login;