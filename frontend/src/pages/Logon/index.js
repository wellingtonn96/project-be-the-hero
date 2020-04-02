import React from "react"
import { Link } from "react-router-dom"
import { FiLogIn } from "react-icons/fi"

import "./styles.css"

import logoImg from "../../assets/logo.svg"
import heroesImg from "../../assets/heroes.png"

export default function Logon() {
	return (
		<div className="logon-container">
			<section className="form">
				<img src={logoImg} alt="Be The Hero" />
				<div className="login">
					<form action="">
						<h1>Login</h1>

						<div className="email">
							<label htmlFor="email">
								email
								<input type="text" />
							</label>
						</div>
						<div className="senha">
							<label htmlFor="email">
								senha
								<input type="text" email="email" />
							</label>
						</div>
						<button className="button" type="button">
							Entrar
						</button>

						<Link to="/register">
							<FiLogIn size={16} color="#e02041" />
							Nao tenho cadastro
						</Link>
					</form>
				</div>
			</section>
			<img src={heroesImg} alt="Heroes" />
		</div>
	)
}
