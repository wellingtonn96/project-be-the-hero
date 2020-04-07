import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './style.css'

import api from '../../services/api'

import LogoImg from '../../assets/logo.svg'

export default function Profile() {
	const [incidents, setIncidents] = useState([])

	const { ongName, token } = localStorage

	const history = useHistory()

	useEffect(() => {
		api
			.get('incidents', {
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				const { rows } = response.data.incident
				setIncidents(rows)
			})
			.catch((error) => alert(error))
	}, [ongName])

	async function handleDeleteIncident(id) {
		try {
			await api.delete(`incidents/${id}`, {
				headers: {
					authorization: `Bearer ${token}`,
				},
			})

			setIncidents(incidents.filter((incident) => incident.id !== id))
		} catch (error) {
			alert(error)
		}
	}

	function handleLogout() {
		localStorage.clear()

		history.push('/')
	}

	return (
		<div className="profile-container">
			<div className="header">
				<div className="logo">
					<img src={LogoImg} alt="logo" />
				</div>
				<span className="welcome-title">Bem vindo, {ongName}</span>
				<Link className="button" to="/incident/new">
					Cadastrar novo caso
				</Link>
				<button
					type="button"
					className="logout-button"
					onClick={() => handleLogout()}
				>
					<FiPower />
				</button>
			</div>
			<div className="cases">
				<h1>Casos cadastrados</h1>
				<ul>
					{incidents.map((incident) => (
						<li key={incident.id}>
							<strong>CASO:</strong>
							<p>{incident.title}</p>

							<strong>DESCRIÇÃO</strong>
							<p>{incident.description}</p>

							<strong>VALOR:</strong>
							<p>
								{Intl.NumberFormat('pt-BR', {
									style: 'currency',
									currency: 'BRL',
								}).format(incident.value)}
							</p>

							<button
								type="button"
								onClick={() => handleDeleteIncident(incident.id)}
							>
								<FiTrash2 size={20} color="#a8a8b3" />
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
