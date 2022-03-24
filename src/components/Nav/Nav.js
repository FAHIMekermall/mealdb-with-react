import React from "react"
import logo from "../.././assets/logo-small.png"
import "./Nav.css"
const Nav = ({openModal, cartL}) => {
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
						<button>Home</button>
					</li>
					<li>
						<button onClick={openModal}>Cart <sup>{cartL}</sup> </button>
					</li>
					<li>
						<button>About</button>
					</li>
				</ul>
			</header>
		</div>
	)
}

export default Nav
