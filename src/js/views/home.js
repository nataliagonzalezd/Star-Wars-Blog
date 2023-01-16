import React from "react";
import "../../styles/home.css";
import GroupCard1 from "../component/groupCard1";
import GroupCard2 from "../component/groupCard2";

export const Home = () => (
	<div className="mt-5">
        <GroupCard1/>
		<GroupCard2/>
	</div>
);
