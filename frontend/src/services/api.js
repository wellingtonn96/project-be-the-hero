import axios from 'axios'

const api = axios.create({
	baseURL: 'https://be-the-hero-rest-api.herokuapp.com/',
})

export default api
