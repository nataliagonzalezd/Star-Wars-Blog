import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/512px-Star_wars2.svg.png" width="120" height="70" class="d-inline-block align-text-top"/>
    </a>
  </div>
</nav>
			</Link>
			<div className="ml-auto me-5">
				<Link to="/demo">
				<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">cardfavorito</a></li>
  </ul>
</div>
				</Link>
			</div>
		</nav>
	);
};
