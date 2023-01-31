import React, {useEffect,useState,useContext} from "react";
import { Context } from "../store/appContext";
import Login from "../component/login"
import "../../styles/home.css";

export const LoginView = () => {

const {store} = useContext(Context);

return(
	<div className="mt-5">
        <Login/>
	</div>
);};