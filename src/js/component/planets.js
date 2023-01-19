import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'
import { IoPlanetOutline } from "react-icons/io5";

export default function Planets(props) {
  
  const {store,actions} = useContext(Context);

  return (
    <div className="card ms-5 align-items" style={{minWidth: "18rem"}}>
  <img src={props.id === "1" ? `https://swtorstrategies.com/wp-content/uploads/2010/01/tatooine.jpg`:`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} className="card-img-top img-pl" alt="..."/>
  <div className="card-body ts-card"> 
    <h5 className="card-title text-center">{props.name}</h5>
    <ul className="list-group list-group-flush">
    <li className="list-group-item ts-card">Population:</li>
    <li className="list-group-item ts-card">Terrain:</li>
  </ul>
    <div className='mt-4'>
      <Link to={"/planetsDetail/" + props.id} className="btn btn-dark me-5">Learn More!</Link>
      <button type="button" className="btn btn-secondary" onClick={()=> store.favorites.indexOf(props.name) !== -1 ? alert("yata") : actions.addFavorites(props.name)}><IoPlanetOutline/></button>
    </div>
  </div>
</div>
  )
}