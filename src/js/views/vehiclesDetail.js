import React, {useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";
import InCardVe from "../component/inCardVe";

export const VehiclesDetail = props => {
   // const {store, actions} = useContext(Context);
    const params = useParams();
    const [veDetail,SetVeDetail] = useState({});

    function getDetailsVe(id){
        fetch("https://www.swapi.tech/api/vehicles/"+id)
        .then(res => res.json())
        .then(data => console.log(data.results))
        .catch(err => console.error(err))
    }

    useEffect(() => {
            getDetailsVe()
    }, [])

    return (<>
        <InCardVe name={veDetail.properties?.name}/>
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
		</>
    );
};

VehiclesDetail.propTypes = {
    match: PropTypes.object
};
