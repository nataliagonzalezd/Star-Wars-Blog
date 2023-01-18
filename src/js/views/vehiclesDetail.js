import React, {useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";
import InCardVe from "../component/inCardVe";

export const VehiclesDetail = props => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => {
            actions.getDetailsVe(params.id)
    }, [])

    return (<>
        <InCardVe name={store.vehiclesDetail.properties?.name}/>
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
