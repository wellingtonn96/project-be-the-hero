import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'

import './style.css'

import api from '../../services/api'

export default function NewIncident() {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [value, setValue] = useState('')

	const history = useHistory()

	async function handleNewIncident(e) {
		e.preventDefault()

		const { token } = localStorage

		const data = {
			title,
			description,
			value,
		}

		try {
			const response = await api.post('incidents', data, {
				headers: {
					authorization: `Bearer ${token}`,
				},
			})

			console.log(response)
			history.push('/profile')
		} catch (error) {
			console.log(token)
			alert(error)
		}
	}

	return (
		<div className="incident-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="logo" />
					<h1>Cadastro novo caso</h1>
					<p>
						Descreva o caso detalhadamente para encontrar um heroi para resolver isso
					</p>
					<Link className="back-link" to="/profile">
						<FiArrowLeft size={16} color="#e02041" />
						Cadastrar novo caso
					</Link>
				</section>
				<form onSubmit={handleNewIncident}>
					<input
						type="text"
						placeholder="Titulo do caso"
						name="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						type="text"
						placeholder="Descrição"
						name="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<input
						type="number"
						placeholder="Valor em reais"
						name="value"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<button className="button" type="submit">
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	)
}
