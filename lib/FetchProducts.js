import axios from 'axios'

const fetchProducts = async number => {
	try {
		const response = await axios.get(`http://localhost:5195/api/ProductShortages/categories/${number}/products`)
		return response.data
	} catch (error) {
		console.error('Error fetching categories:', error)
		return []
	}
}

export default fetchProducts
