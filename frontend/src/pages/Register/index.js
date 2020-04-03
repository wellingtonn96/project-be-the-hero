import React from "react"
import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

import "./style.css"

import logoImg from "../../assets/logo.svg"

export default function Register() {
	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be the hero" />
					<h1>Cadastro</h1>
					<p>
						Faça seu cadastro, entre na plataforma e ajude a encontrarem os casos de
						sua ONG.
						<Link className="back-link" to="/">
							<FiArrowLeft size={16} color="#e02041" />
							Nao tenho cadastro
						</Link>
					</p>
				</section>
				<form action="">
					<input type="text" placeholder="Nome da ONG" />
					<input type="email" placeholder="E-mail" />
					<input type="password" placeholder="senha" />
					<input type="text" placeholder="Whatsapp" />

					<div className="input-group">
						<input placeholder="Cidade" />
						<input placeholder="UF" style={{ width: 80 }} />
					</div>

					<button className="button" type="submit">
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	)
}
