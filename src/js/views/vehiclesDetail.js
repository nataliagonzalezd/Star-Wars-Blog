import React, {useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";
import InCardVe from "../component/inCardVe";
import vehiclesDescription from "../component/json/vehicles.json"

export const VehiclesDetail = props => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => {
            actions.getDetailsVe(params.id)
    }, [])

    function match(){
        let oldId = 0;
        if (params.id==4) {
            oldId = "0";
        }else if (params.id==7) {
            oldId = "1";
        }else if (params.id==6) {
            oldId = "2";
        }else if (params.id==8) {
            oldId = "3";
        }else if (params.id==14) {
            oldId = "4";
        }else if (params.id==18) {
            oldId = "5";
        }else if (params.id==16) {
            oldId = "6";
}else if (params.id==19) {
            oldId = "7";
        }else if (params.id==20) {
            oldId = "8";
        }else {
            oldId = "9";
            
        }
        return oldId;
        }
        
        const pos = match();

    return (<>
        <InCardVe name={store.vehiclesDetail.properties?.name}/>
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
            {vehiclesDescription[pos].description}
		</>
    );
};

VehiclesDetail.propTypes = {
    match: PropTypes.object
};
