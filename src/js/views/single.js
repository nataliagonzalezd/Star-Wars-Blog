import React, {useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";
import InCardCh from "../component/inCardCh";
import characterDescription from "/workspace/Star-Wars-Blog/src/js/component/json/characters.json";

export const Single = props => {

    const params = useParams();
    const {store, actions} = useContext(Context);

    useEffect(() => {
            actions.getDetailsCh(params.id)
    }, [])

    let pos = params.id -1;

    return (<>
		<InCardCh name={store.charactersDetail.properties?.name} hairColor={store.charactersDetail.properties?.hair_color} eyeColor={store.charactersDetail.properties?.eye_color} gender={store.charactersDetail.properties?.gender} description={store.charactersDetail.properties?.description} id={params.id}/>
        {characterDescription[pos].description}
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
