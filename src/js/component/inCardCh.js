import React from 'react'

export default function InCardCh(props) {
  return (
    <div className="card mb-3 ms-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`} className="img-fluid rounded-start"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text text-black">Hair color: {props.hairColor}</p>
        <p className="card-text text-black">Eye color: {props.eyeColor}</p>
        <p className="card-text text-black">Gender: {props.gender}</p>
        <p className="card-text text-black">Description: {props.description}</p>
      </div>
    </div>
  </div>
</div>
  )
}
