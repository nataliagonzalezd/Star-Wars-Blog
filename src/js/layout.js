import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { CharacterDetails } from "./views/details/charactersDetail";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PlanetsDetail } from "./views/details/planetsDetail";
import { VehiclesDetail } from "./views/details/vehiclesDetail";
import { CharactersDetails } from "./views/details/charactersDetail";
import { LoginView } from "./views/loginview";
import { SignUpView } from "./views/signupview";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<LoginView />} />
						<Route path="/signup" element={<SignUpView />} />
						<Route path="/charactersDetail/:id" element={<CharactersDetails />} />
						<Route path="/planetsDetail/:id" element={< PlanetsDetail/>} />
						<Route path="/vehiclesDetail/:id" element={< VehiclesDetail/>} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
