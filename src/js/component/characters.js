import React from 'react'
import { Link } from 'react-router-dom'

export default function Characters(props) {
  return (
    <div className="card ms-5" style={{minWidth: "18rem"}}>
  <img src="https://www.hub-4.co.uk/wp-content/uploads/2017/11/400X200.gif" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">Gender:</li>
    <li className="list-group-item">Hair Color:</li>
    <li className="list-group-item">Eye-Color:</li>
  </ul>
    <Link to={"/single/" + props.id} className="btn btn-primary me-5">Learn More!</Link>
    <button type="button" className="btn btn-warning"><i className="fa fa-heart text-light" /></button>
  </div>
</div>
  )
}
