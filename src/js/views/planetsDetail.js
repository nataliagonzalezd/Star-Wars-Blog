import React, {useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";
import InCardPl from "../component/inCardPl";

export const PlanetsDetail = props => {
   // const {store, actions} = useContext(Context);
    const params = useParams();
    const [plDetail,SetPlDetail] = useState({});

    function getDetailsPl(id) {
        fetch("https://www.swapi.tech/api/planets/"+ id)
		.then(res => res.json())
		.then(data => SetPlDetail(data.result))
		.catch(err => console.error(err))
    }

    useEffect(() => {
            getDetailsPl(params.id)
    }, [])

    return (<>
        <InCardPl name={plDetail.properties?.name}/>
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
