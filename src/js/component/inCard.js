import React from 'react'

export default function InCard(props) {
  return (
    <div className="card mb-3 ms-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Hair color: {props.hairColor}</p>
        <p className="card-text">Eye color: {props.eyeColor}</p>
        <p className="card-text">Gender: {props.gender}</p>
        <p className="card-text">Description: {props.description}</p>
      </div>
    </div>
  </div>
</div>
  )
}
