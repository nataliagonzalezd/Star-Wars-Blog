import React, {useEffect,useState,useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Characters from "../component/cards/characters";
import Planets from "../component/cards/planets";
import Vehicles from "../component/cards/vehicles";

export const Home = () => {

const {store} = useContext(Context);

return(
	<div className="mt-5">
		<h1 className="text-center mb-5">CHOOSE YOUR FIGHTER</h1>
        <div className="d-flex scrollable me-2 mb-5">{store.characters.map((item)=><Characters key={item.uid} name={item.name} id={item.uid}/>)}</div>
		<div className="d-flex scrollable me-2 mb-5">{store.planets.map((item)=><Planets name={item.name} key={item.uid} id={item.uid}/>)}</div>
		<div className="d-flex scrollable me-2 mb-5">{store.vehicles.map((item)=><Vehicles name={item.name} key={item.uid} id={item.uid}/>)}</div>
	</div>
);};