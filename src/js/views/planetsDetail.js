import React, {useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";
import InCardPl from "../component/inCardPl";

export const PlanetsDetail = props => {

    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => {
           actions.getDetailsPl(params.id)
    }, [])

    return (<>
        <InCardPl name={store.planetsDetail.properties?.name}/>
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
		</>
    );
};

PlanetsDetail.propTypes = {
    match: PropTypes.object
};
