import React, {useEffect,useState} from "react";
import "../../styles/home.css";
import Characters from "../component/characters";
import Planets from "../component/planets";
import Vehicles from "../component/vehicles";

export const Home = () => {

	const [characters,setCharacters] = useState([]);
	const [planets,setPlanets] = useState([]);
	const [vehicles,setVehicles] = useState([]);

	function getCharacters(){
		fetch(`https://www.swapi.tech/api/people/`)
		.then((res)=>res.json())
		.then((data)=>setCharacters(data.results))
		.catch(err=> console.error(err))
	}

	function getPlanets(){
		fetch(`https://www.swapi.tech/api/planets/`)
		.then((res)=>res.json())
		.then((data)=>setPlanets(data.results))
		.catch(err=> console.error(err))
	}

	function getVehicles(){
		fetch(`https://www.swapi.tech/api/vehicles/`)
		.then((res)=>res.json())
		.then((data)=>setVehicles(data.results))
		.catch(err=> console.error(err))
	}

	useEffect(()=> {
		getCharacters()
		getPlanets()
		getVehicles()
	}, [])

return(
	<div className="mt-5">
        <div className="d-flex scrollable me-2 mb-5">{characters.map((item)=><Characters key={item.uid} name={item.name} id={item.uid}/>)}</div>
		<div className="d-flex scrollable me-2 mb-5">{planets.map((item)=><Planets name={item.name} key={item.uid}/>)}</div>
		<div className="d-flex scrollable me-2 mb-5">{vehicles.map((item)=><Vehicles name={item.name} key={item.uid}/>)}</div>
	</div>
);};