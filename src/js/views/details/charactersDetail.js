import React, {useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {Context} from "../../store/appContext";
import InCardCh from "../../component/inCards/inCardCh";
import characterDescription from "/workspace/Star-Wars-Blog/src/js/component/json/characters.json";
import Characters from "../../component/cards/characters";

export const CharactersDetails = props => {

    const params = useParams();
    const {store, actions} = useContext(Context);

    useEffect(() => {
            actions.getDetailsCh(params.id)
    }, [])

    let pos = params.id -1;

    return (<>
		<InCardCh name={store.charactersDetail.properties?.name} hairColor={store.charactersDetail.properties?.hair_color} eyeColor={store.charactersDetail.properties?.eye_color} gender={store.charactersDetail.properties?.gender} description={characterDescription[pos].description} id={params.id}/>
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
		</>
    );
};

CharactersDetails.propTypes = {
    match: PropTypes.object
};
