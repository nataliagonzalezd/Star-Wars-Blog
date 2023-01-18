import React from "react";
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Star_wars_1977_us.svg/286px-Star_wars_1977_us.svg.png" width="120" height="70" className="d-inline-block align-text-top"/>
                    </div>
                </nav>
            </Link>
            <div className="ml-auto me-5">
                    <div className="dropdown">
                        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="dropdown-item" to="#">cardfavorito</Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    );
};
