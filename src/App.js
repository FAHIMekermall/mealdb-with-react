import "./App.css"
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import Modal from "react-modal"
import { useState } from "react"

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
}
Modal.setAppElement("#root")
function App() {
	const [modalIsOpen, setIsOpen] = useState(false)

	function openModal() {
		setIsOpen(true)
	}

	function closeModal() {
		setIsOpen(false)
	}
	const [cart, setCart] = useState([])
	const addToCart = (item) => {
		setCart([...cart, item])
		console.log(cart)
	}
	return (
		<div className="App">
			<Nav openModal={openModal} cartL={cart.length} />
			<Home addToCart={addToCart} />

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<h5>Total: {cart.length}</h5>
				<h4>Cart-list</h4>
				{cart.map(c=> {
					return(
						<div className="modal">
							<img className="modal-thumb" src={c.strMealThumb} alt="" />
							<p className="modal-text">{c.strMeal}</p>
						</div>
					)
				})}
			</Modal>
		</div>
	)
}

export default App
