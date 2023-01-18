import React from 'react'

export default function InCardVe(props) {
  return (
    <div className="card mb-3 ms-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.id}.jpg`} className="img-fluid rounded-start"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Model:</p>
        <p className="card-text">Passengers:</p>
      </div>
    </div>
  </div>
</div>
  )
}