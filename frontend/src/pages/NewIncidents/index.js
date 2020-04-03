import React from "react"
import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

import "./style.css"

import logoImg from "../../assets/logo.svg"

export default function NewIncidents() {
	return (
		<div className="incidents-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be the hero" />
					<h1>Cadastrar novo caso</h1>
					<p>
						Descreva o caso detalhadamente para encontrar um heroi para resolver
						isso.
						<Link className="back-link" to="/profile">
							<FiArrowLeft size={16} color="#e02041" />
							Nao tenho cadastro
						</Link>
					</p>
				</section>
				<form action="">
					<input placeholder="Titulo do caso" />
					<textarea placeholder="Descrição" />
					<input placeholder="Valer em reais" />

					<button className="button" type="submit">
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	)
}
