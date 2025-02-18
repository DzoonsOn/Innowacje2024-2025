import axios from 'axios'
import '@/components/style/Categories.css'
import CategoriesSection from '@/components/CategoriesSection'

const Categories = async () => {
	let categories = []

	try {
		const response = await axios.get('http://localhost:5195/api/ProductShortages/categories')
		categories = response?.data
	} catch (e) {}

	console.log(categories)

	return (
		<div style={{ textAlign: 'center', padding: '20px' }}>
			<h1 className='header'>
				<div>STS</div>
				<div className='redDivStyle'>Kamery</div>
			</h1>

			<div className='title'>
				<h2>Kategorie</h2>
			</div>

			<CategoriesSection categories={categories} />
		</div>
	)
}

export default Categories
