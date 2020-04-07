const auth = () => {
	const { token } = localStorage
	return !!token
}

export default auth
