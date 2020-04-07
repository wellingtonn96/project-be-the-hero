import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import './style.css'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const history = useHistory()

	async function handleLogin(e) {
		e.preventDefault()

		const data = {
			email,
			password,
		}

		try {
			const response = await api.post('login', data)

			const { token, name } = response.data

			localStorage.setItem('token', token)
			localStorage.setItem('ongName', name)

			history.push('/profile')
		} catch (error) {
			console.log(error)
			alert('Falha no login tente novamente')
		}
	}

	return (
		<div className="container">
			<aside className="login-container">
				<div className="header-contaier">
					<img src={logoImg} alt="logo" />
				</div>
				<form onSubmit={handleLogin}>
					<h1>Fazer login</h1>
					<input
						type="email"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="button" type="submit">
						Login
					</button>
					<Link to="/register">
						<FiLogIn size={16} color="#e02041" />
						Nao tenho cadastro
					</Link>
				</form>
			</aside>
			<section>
				<img src={heroesImg} alt="Be The Hero" />
			</section>
		</div>
	)
}
