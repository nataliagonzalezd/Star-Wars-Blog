import React from 'react'

export default function InCardPl(props) {
  return (
    <div className="card mb-3 ms-3 align-items" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} className="img-fluid rounded-start"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-black ts-card">{props.name}</h5>
        <p className="card-text text-black ts-card">Population:</p>
        <p className="card-text text-black ts-card">Terrain:{props.description}</p>
      </div>
    </div>
  </div>
</div>
  )
}