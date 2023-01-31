import React, {useEffect,useState,useContext} from "react";
import { Context } from "../store/appContext";
import { Signup } from "../component/signup";

export const SignUpView = () => {

const {store} = useContext(Context);

return(
	<div className="mt-5">
        <Signup/>
	</div>
);};