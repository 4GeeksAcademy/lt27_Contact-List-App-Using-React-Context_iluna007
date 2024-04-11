import React, {useContext} from "react";
import {Context} from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				{store.titulo}
				<Link to="/contacts">
					<button className="btn btn-primary">Contacts</button>
				</Link>
				<Link to="/newcontact">
					<button className="btn btn-success">Add new contact</button>
				</Link>
				<Link to="/home">
					<button className="btn btn-secondary">home</button>
				</Link>
			</div>
		</nav>
	);
};
