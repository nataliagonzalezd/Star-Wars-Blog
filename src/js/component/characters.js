import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

export default function Characters(props) {

  const {actions} = useContext(Context);

  return (
    <div className="card ms-5" style={{minWidth: "18rem"}}>
  <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">{props.name}</h5>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">Gender:</li>
    <li className="list-group-item">Hair Color:</li>
    <li className="list-group-item">Eye-Color:</li>
  </ul>
    <div className='mt-4'>
      <Link to={"/single/" + props.id} className="btn btn-dark me-5">Learn More!</Link>
      <button type="button" className="btn btn-secondary" onClick={()=> actions.addFavorites()}><i className="fa fa-heart text-light" /></button>
    </div>
  </div>
</div>
  )
}
