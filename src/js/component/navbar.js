import React, {useContext} from "react";
import { Context } from "../store/appContext";
import {Link} from "react-router-dom";
import { GiRingedPlanet } from "react-icons/gi";

export const Navbar = () => {

    const {store,actions} = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light mb-3 navbar-inner pt-0">
            <Link to="/">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Star_wars_1977_us.svg/286px-Star_wars_1977_us.svg.png" width="120" height="70" className="d-inline-block align-text-top"/>
                    </div>
                </nav>
            </Link>
            <div className="ml-auto me-5">
                    <div className="dropdown">
                        <button className="btn btn-dark dropdown-toggle button-inner" type="button" data-bs-toggle="dropdown" aria-expanded="false">                        
                        <GiRingedPlanet/>
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="dropdown-item" to="#">{
                        
                        <ul>{store.favorites.map((item, i) => (
                            <li key={i}>
                              {item}
                              <button className="btn" onClick={()=> actions.deleteFavorites(item)}>
                                <i className="fas fa-trash-alt align-items-end m-2 pt-1" />
                              </button>
                            </li>
                          ))}</ul>                      
                    }</Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    );
};
