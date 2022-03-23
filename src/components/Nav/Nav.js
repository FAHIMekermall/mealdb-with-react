import React from "react"
import logo from "../.././assets/logo-small.png"
import "./Nav.css"
const Nav = () => {
	return (
		<div>
			<header>
				<ul>
					<li>
						<img src={logo} alt="" />
					</li>
				</ul>
				<ul>
					<li>
						<a href="/home">Home</a>
					</li>
					<li>
						<a href="/home">Product</a>
					</li>
					<li>
						<a href="/home">About</a>
					</li>
				</ul>
			</header>
		</div>
	)
}

export default Nav
