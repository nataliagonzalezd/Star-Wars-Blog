import React, {useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";
import InCardCh from "../component/inCardCh";

export const Single = props => {
   // const {store, actions} = useContext(Context);
    const params = useParams();
	const [chDetail,SetChDetail] = useState({});

    function getDetailsCh(id) {
        fetch("https://www.swapi.tech/api/people/"+ id)
		.then(res => res.json())
		.then(data => SetChDetail(data.result))
		.catch(err => console.error(err))
    }

    useEffect(() => {
            getDetailsCh(params.id)
    }, [])

    return (<>
		<InCardCh name={chDetail.properties?.name} hairColor={chDetail.properties?.hair_color} eyeColor={chDetail.properties?.eye_color} gender={chDetail.properties?.gender} description={chDetail.properties?.description} id={params.id}/>
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
		</>
    );
};

Single.propTypes = {
    match: PropTypes.object
};
