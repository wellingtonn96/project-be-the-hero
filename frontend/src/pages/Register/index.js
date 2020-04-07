import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'

import './style.css'

import api from '../../services/api'

export default function Register() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [whatsapp, setWhatsapp] = useState('')
	const [city, setCity] = useState('')
	const [uf, setUf] = useState('')

	const history = useHistory()

	async function handleRegister(e) {
		e.preventDefault()

		const data = {
			name,
			email,
			password,
			whatsapp,
			city,
			uf,
		}

		try {
			await api.post('ongs', data)

			history.push('/')
		} catch (error) {
			alert(`Ong já existi ${error}`)
		}
	}

	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="logo" />
					<h1>Cadastro</h1>
					<p>
						Faça seu cadastro, entre na plataforma e ajude a encontrarem os casos de
						sua ONG.
					</p>
					<Link className="back-link" to="/">
						<FiArrowLeft size={16} color="#e02041" />
						Nao tenho cadastro
					</Link>
				</section>
				<form onSubmit={handleRegister}>
					<input
						type="text"
						name="name"
						placeholder="Nome da ONG"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="email"
						name="email"
						placeholder="E-mail"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						name="password"
						placeholder="Senha"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type="text"
						name="whatsapp"
						placeholder="Whatsapp"
						value={whatsapp}
						onChange={(e) => setWhatsapp(e.target.value)}
					/>
					<div className="input-group">
						<input
							type="text"
							name="city"
							placeholder="Cidade"
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
						<input
							type="text"
							name="uf"
							placeholder="UF"
							value={uf}
							onChange={(e) => setUf(e.target.value)}
						/>
					</div>
					<button className="button" type="submit">
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	)
}
