import React, {useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";
import InCardPl from "../component/inCardPl";
import planetDescription from "../component/json/planets.json"

export const PlanetsDetail = props => {

    const {store, actions} = useContext(Context);
    const params = useParams();
    const pos = params.id - 1;

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
            {planetDescription[pos].description}
		</>
    );
};

PlanetsDetail.propTypes = {
    match: PropTypes.object
};
